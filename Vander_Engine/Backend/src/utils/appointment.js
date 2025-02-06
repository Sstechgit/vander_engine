const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async ({ fullName, email, phone, carBrand, carModel, modelYear, partNeeded, message }) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: 'Info@usaautopartsllc.com',
      pass: 'Shobhitrastogi@881037',
    },
  });

  const mailOptions = {
    from: `"Vander Engines" <Info@usaautopartsllc.com>`,
    replyTo: email,
    to: 'Info@vanderengines.com,vanderengines1@gmail.com',
    subject: `Query Through www.vanderengines.com Connect At ${phone}`, // Keep subject as is
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
