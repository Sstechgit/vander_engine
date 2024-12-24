const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async ({ fullName, email, phone, carBrand, carModel, modelYear, partNeeded, message }) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: 'nick@vanderengines.com', // Your SMTP user
      pass: 'Shobhit@2510',           // Your SMTP password
    },
  });

  const mailOptions = {
    from: `"${fullName}" <nick@vanderengines.com>`,
    replyTo: email,
    to: 'vanderengines1@gmail.com',
    subject: `New Appointment Request from ${fullName}`,
    text: `
      Full Name: ${fullName}
      Email: ${email}
      Phone: ${phone}
      Car Brand: ${carBrand}
      Car Model: ${carModel}
      Model Year: ${modelYear}
      Part Needed: ${partNeeded}
      Message: ${message}
    `,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
