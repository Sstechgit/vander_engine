const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async ({ part, make, model, year, variant, name, email,  phone, message, agreed }) => {
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
    from: `"${name} ${email}" <nick@vanderengines.com>`,
    replyTo: email,	
    to: 'vanderengines1@gmail.com',
    subject: `New Quote Request from ${name}`,
    text: `
      Part: ${part}
      Make: ${make}
      Model: ${model}
      Year: ${year}
      Varient: ${variant}
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

