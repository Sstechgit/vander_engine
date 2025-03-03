const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async ({ name, email, phone, service, website, message, file }) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com', // Or your SMTP host
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // Ensure this is loaded from .env
      pass: process.env.EMAIL_PASS, // Ensure this is loaded from .env
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER, // sender address
    to: 'vanderengines1@gmail.com', // recipient (yourself or another email)
    subject: `New Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nWebsite: ${website}\nMessage: ${message}`,
    // Optionally attach the file if provided
    attachments: file ? [{ filename: file.originalname, path: file.path }] : [],
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
