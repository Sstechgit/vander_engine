const mysql = require('mysql2');
require('dotenv').config();

let pool;

const connectDB = () => {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,  // Ensures that the pool will wait for a connection to be available if the limit is reached
      connectionLimit: 10,       // Maximum number of connections to create in the pool
      queueLimit: 0              // No limit on the connection queue
    });

    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error connecting to the MySQL database:', err.message);
        process.exit(1);
      } else {
        console.log('Connected to MySQL database successfully');
        connection.release(); // Release connection back to pool
      }
    });
  }
  return pool;
};

module.exports = connectDB;