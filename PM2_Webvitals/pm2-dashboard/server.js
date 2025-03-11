const express = require("express");
const { exec } = require("child_process");
const cors = require("cors");

const app = express();
const PORT = 7123;

// Configure CORS properly
const corsOptions = {
    origin: "*", // Change this to 'http://localhost:3001' if you want to allow only your frontend
    methods: "GET,POST",
    allowedHeaders: "Content-Type",
};

app.use(cors(corsOptions));
app.use(express.json());

// Get PM2 process list
app.get("/processes", (req, res) => {
    exec("pm2 jlist", (error, stdout) => {
        if (error) {
            console.error("PM2 Fetch Error:", error);
            return res.status(500).json({ success: false, message: "Error fetching processes", error });
        }
        res.json(JSON.parse(stdout));
    });
    
});

// Restart a PM2 process
app.post("/restart", (req, res) => {
    const { name } = req.body;
    exec(`pm2 restart ${name}`, (error, stdout, stderr) => {
        if (error) {
            return res.status(500).json({ success: false, message: stderr || "Error restarting process" });
        }
        res.json({ success: true, message: `Process ${name} restarted successfully!` });
    });
});

// Get logs for a specific PM2 process
app.get("/logs/:name", (req, res) => {
    const { name } = req.params;
    exec(`pm2 logs ${name} --lines 50 --nostream`, (error, stdout) => {
        if (error) {
            return res.status(500).json({ success: false, message: "Error fetching logs" });
        }
        res.json({ success: true, logs: stdout });
    });
});

// Start the server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});