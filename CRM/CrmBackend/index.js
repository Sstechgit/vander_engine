const express = require("express");
const http = require("http"); // Import http module
const { Server } = require("socket.io"); // Import socket.io
const RingCentral = require("@ringcentral/sdk");
const punycode = require("punycode/");
const connectToDb = require("./db_connection");
const cors = require("cors");
const cron = require("node-cron");
const { FindMails } = require("./helper/RealtimeEmail.js");
const tokens = require("./models/Token.js");

require("dotenv").config();

const app = express();
const server = http.createServer(app); // Create HTTP server
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173", "http://backend.sstechcrm.com"],
        methods: ["GET", "POST", "PUT", "DELETE"],
    },
});

const corsOptions = {
    origin: ["http://localhost:5173", "http://backend.sstechcrm.com"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8000 || 8001;

// Add WebSocket event handling
io.on("connection", (socket) => {
    console.log("A client connected");

    // Example of custom events
    socket.on("disconnect", () => {
        console.log("A client disconnected");
    });
});

// Add io instance to app so it can be accessed in other files
app.set("io", io);

// Routes
app.use("/api", require("./api/user.js"));
app.use("/api", require("./api/lead.js")); // Ensure you update lead.js to emit events
app.use("/api", require("./api/Task.js"));
app.use("/api", require("./api/client.js"));
app.use("/api", require("./api/Order.js"));
app.use("/api", require("./api/OrderTask.js"));
app.use("/api", require("./api/calendar.js"));
app.use("/api", require("./api/email.js"));
app.use("/api", require("./api/FollowUp.js"));
app.use("/api", require("./api/Quotations.js"));
app.use("/api", require("./api/search.js"));
app.use("/api", require("./api/superadmin.js"));
app.use("/api", require("./api/ringcentral.js"));
app.use("/api", require("./api/invoice.js"));

let rcsdk = new RingCentral.SDK({
    server: "https://platform.ringcentral.com", // or your RingCentral server URL
    clientId: process.env.clientId,
    clientSecret: process.env.clientSecret,
    redirectUri: process.env.redirect,
});
let platform = rcsdk.platform();

let expires = null;
let admin = null;
tokens.findOne({ email: "vanderengines@gmail.com" }).then((val) => {
    expires = val.Rexpires;
    admin = val;
    cron.schedule("*/5 * * * *", async () => {
        const currentTime = new Date();
        let givenTime = new Date(expires);
        const timeBeforeFiveMinutes = new Date(
            givenTime.getTime() - 5 * 60 * 1000
        ); // Subtract 5 minutes

        if (currentTime.getTime() === timeBeforeFiveMinutes.getTime()) {
            await platform.auth().setData(admin.tokenObj);
            await platform.refresh();
            const authResponse = await platform.auth().data();

            const newAccessToken = authResponse.access_token;
            const newRefreshToken = authResponse.refresh_token;
            const rExpires = authResponse.refresh_token_expires_in;
            const expiresIn = authResponse.expires_in;

            const AccessExpiresAt = new Date(
                Date.now() + expiresIn * 1000
            );
            const RefreshExpiresAt = new Date(
                Date.now() + rExpires * 1000
            );

            // Update tokens in the database
            admin = await tokens.findOneAndUpdate(
                { email: admin.email },
                {
                    accessToken: newAccessToken,
                    refreshToken: newRefreshToken,
                    Aexpires: AccessExpiresAt,
                    Rexpires: RefreshExpiresAt,
                    tokenObj: authResponse,
                },
                { upsert: true, new: true }
            );
            expires = admin.Rexpires;
        }
    });
});

app.get("/api/hello", (req, res) => {
    res.send("Hello from Backend");
});

// Start server
server.listen(PORT, () => {
    console.log("Server is running at http://localhost:" + PORT);
    connectToDb()
        .then(() => console.log("Connected To DB"))
        .catch((err) => console.log(err));
    FindMails();
});

// Handle socket error (like EPIPE) gracefully
platform.on("error", (err) => {
    if (err.code === "EPIPE") {
        console.error("Socket closed unexpectedly", err);
    } else {
        console.error("Socket error:", err);
    }
});
module.exports.io = io;