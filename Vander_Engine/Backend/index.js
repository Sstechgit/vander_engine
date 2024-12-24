const express = require('express');
const cors = require('cors');
const connectDB = require('./src/db/index'); // Import the function
const leadRoutes = require('./src/routes/leads_main_form');
const appointmentRoutes = require('./src/routes/appointments_form');
const applyMiddleware = require('./src/middlewares/commonMiddleware');
const emailRoute = require('./src/routes/emailRoute');
const makeModelRoutes = require('./src/routes/makeModelRoutes');
const engine_route = require('./src/routes/EngineRoute');
const transmission_route = require('./src/routes/transmissionroute');
const productRoutes = require("./src/routes/productRoutes");
const app = express();
const PORT = 4010;

// Initialize the database connection
connectDB();

app.use(express.json());
applyMiddleware(app);

app.use(cors({
  origin: ['https://offdiary.org', 'http://localhost:5173', 'https://offdiary.net'],
  methods: 'GET, POST, PUT, DELETE',
  allowedHeaders: 'Content-Type',
}));

// Set up routes
app.use('/api/leads', leadRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/makes-models', makeModelRoutes);
app.use('/api/send-email', emailRoute);
app.use('/api/engines', engine_route);
app.use('/api/transmission', transmission_route);
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
