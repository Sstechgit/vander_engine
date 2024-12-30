const express = require('express');
const cors = require('cors'); // Import cors
const applyMiddleware = require('./Source/middleware/commonMiddleware');
const emailRoute = require('./Source/routes/emailRoute');
const mainformroute = require('./Source/routes/mainFormRoute')
const jobformroute = require('./Source/routes/JobFormRoute')
const app = express();
const PORT = process.env.PORT || 3000;


// Middleware to parse JSON request bodies
app.use(express.json());
// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));
// Enable CORS
app.use(cors({
  origin: ['https://offdiary.org', 'http://localhost:5173'], // Allow only your frontend domain
    methods: 'GET, POST, PUT, DELETE', // Allowed HTTP methods
    allowedHeaders: 'Content-Type', // Allowed headers
  }));

// Apply common middleware
applyMiddleware(app);

// Use email route
app.use('/api/send-email', emailRoute); 
app.use('/api/receive-msg',mainformroute)
app.use('/api/users',jobformroute)

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});










