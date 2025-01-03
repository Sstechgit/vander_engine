const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Connected to MongoDB Atlas database successfully');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1); // Exit the process if the connection fails
    }
};

module.exports = connectDB;
