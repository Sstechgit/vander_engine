const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async ({ part, make, model, year, name, email, phone, message, agreed }) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: 'lily@usaautopartsllc.com', // Your SMTP user
      pass: 'Shobhitrastogi@881037',
    },
  });

  const mailOptions = {
    from: `"${email}" <lily@usaautopartsllc.com>`,
    replyTo: email,
    to: 'lily@usaautopartsllc.com,vanderengines1@gmail.com',
    subject: `Query Through www.vanderenginestransmissions.com Connect At ${phone}`,
    text: `
      Part: ${part}
      Make: ${make}
      Model: ${model}
      Year: ${year}
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
      Agreed to Terms: ${agreed ? 'Yes' : 'No'}
    `,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };

