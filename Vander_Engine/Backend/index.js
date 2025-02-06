const express = require('express');
const cors = require('cors');
const connectDB = require('./src/db/index'); // Import the function
const connectToDb = require('./src/db/Mongo_db_leads'); // Import the function
const leadRoutes = require('./src/routes/leads_main_form');
const appointmentRoutes = require('./src/routes/appointments_form');
const applyMiddleware = require('./src/middlewares/commonMiddleware');
const emailRoute = require('./src/routes/emailRoute');
const makeModelRoutes = require('./src/routes/makeModelRoutes');
const engine_route = require('./src/routes/EngineRoute');
const transmission_route = require('./src/routes/transmissionroute');
const crmroute = require("./src/routes/crmSearchProduct");
const productRoutes = require("./src/routes/productRoutes");
const app = express();
const PORT = 4020;

// Initialize the database connection
connectDB();
connectToDb();

app.use(express.json());
applyMiddleware(app);

app.use(cors({
  origin: ['https://offdiary.org', 'http://localhost:5173', 'https://sstechcrm.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Ensure CORS headers are set for preflight requests
app.options('*', cors());


// Set up routes
app.use('/api/leads', leadRoutes);
app.use('/api/crmsearchroute', crmroute);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/makes-models', makeModelRoutes);
app.use('/api/send-email', emailRoute);
app.use('/api/engines', engine_route);
app.use('/api/transmission', transmission_route);
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
