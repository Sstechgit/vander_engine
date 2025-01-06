const express = require('express');
const cors = require('cors'); // Import cors
const applyMiddleware = require('./Source/middleware/commonMiddleware');
const emailRoute = require('./Source/routes/emailRoute');
const mainformroute = require('./Source/routes/mainFormRoute')
const jobformroute = require('./Source/routes/JobFormRoute')
const Course_Route =require('./Source/routes/Course_Route')
const app = express();
const PORT = process.env.PORT || 3000;


// Middleware to parse JSON request bodies
app.use(express.json());
// Enable CORS
app.use(cors({
  origin: ['https://offdiary.org', 'http://localhost:5173'], // Allow only your frontend domain
    methods: 'GET, POST, PUT, DELETE', // Allowed HTTP methods
    allowedHeaders: 'Content-Type', // Allowed headers
  }));

app.get('/', (req, res) => {
    res.send('Welcome to the Backend API');
});

// Apply common middleware
applyMiddleware(app);

// Use email route
app.use('/api/send-email', emailRoute); 
app.use('/api/receive-msg',mainformroute)
app.use('/api/users',jobformroute)
app.use('/api/Course_Form',Course_Route)
console.log("Hello From Backend");
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
