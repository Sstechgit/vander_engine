const nodemailer = require('nodemailer');
require('dotenv').config();

const sendFormEmail = async ({ name, email, number, message }) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: 'nick@vanderengines.com', // Your Gmail address
      pass: 'Shobhit@2510',
    },
  });

  const mailOptions = {
    from: 'nick@vanderengines.com',
    to: 'anekchauhan28@gmail.com',
    subject: `New Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nNumber: ${number} \nMessage: ${message}`,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendFormEmail };