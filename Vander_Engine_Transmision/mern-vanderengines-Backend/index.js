const express = require('express');
const cors = require('cors'); // Import cors
const connectDB = require('./src/db/index'); // MongoDB connection
const leadRoutes = require('./src/routes/leads_main_form'); //
const appointmentRoutes = require('./src/routes/appointments_form'); // New route for appointment form Import the leads routes
const applyMiddleware = require('./src/middlewares/commonMiddleware');
const emailRoute = require('./src/routes/emailRoute');
const app = express();
const PORT = 4050;

// Connect to the database
connectDB();

// Middleware to parse JSON request bodies
app.use(express.json());
applyMiddleware(app);

// Enable CORS
app.use(cors({
  origin: ['https://offdiary.org', 'http://localhost:7000'], // Allow only your frontend domain
    methods: 'GET, POST, PUT, DELETE', // Allowed HTTP methods
    allowedHeaders: 'Content-Type', // Allowed headers
  }));

// Use the lead routes for handling form submissions
app.use('/api/leads', leadRoutes); // Base route for leads
app.use('/api/appointments', appointmentRoutes);
// Apply common middleware
applyMiddleware(app);

// Use email route
app.use('/api/send-email', emailRoute); 

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
