const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async ({ name, email, phone, service, website, message, file }) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com', // Or your SMTP host
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'lily@usaautopartsllc.com', // Your SMTP user
      pass: 'Shobhitrastogi@881037', // Ensure this is loaded from .env
    },
  });

  const mailOptions = {
    from: `"${email}" <lily@usaautopartsllc.com>`,
    replyTo: email,
    to: 'lily@usaautopartsllc.com,vanderengines1@gmail.com',
    subject: `Query Through www.vanderenginestransmissions.com Connect At ${phone}`,
    text:  `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nWebsite: ${website}\nMessage: ${message}`,
    // Optionally attach the file if provided
    attachments: file ? [{ filename: file.originalname, path: file.path }] : [],
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
