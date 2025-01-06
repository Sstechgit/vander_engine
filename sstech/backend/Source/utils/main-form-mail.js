const nodemailer = require('nodemailer');
require('dotenv').config();

const sendFormEmail = async ({ name, email, number, website, message }) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: 'info@sstechservices.net', // Your Gmail address
      pass: 'Sstech@123',
    },
  });

  const mailOptions = {
    from: `${email} <info@sstechservices.net>`,
    to: 'Sstechofficiel@gmail.com, info@sstechservices.net',
    subject: `New Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nNumber: ${number}\nWebsite: ${website} \nMessage: ${message}`,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendFormEmail };
