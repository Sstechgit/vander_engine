const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async ({ fullName, email, phone, carBrand, carModel, modelYear, partNeeded, message }) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: 'lily@usaautopartsllc.com', // Your SMTP user
      pass: 'Shobhitrastogi@881037',           // Your SMTP password
    },
  });

  const mailOptions = {
    from: `"${email}" <lily@usaautopartsllc.com>`,
    replyTo: email,
    to: 'lily@usaautopartsllc.com,vanderengines1@gmail.com',
    subject: `Query Through www.vanderenginestransmissions.com Connect At ${phone}`,
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
