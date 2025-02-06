const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async ({ part, make, model, year, variant, name, email,  phone, message, agreed }) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: 'Info@vanderengines.com',
      pass: 'Shobhitrastogi@881037',
    },
  });

  const mailOptions = {
    from: `"Vander Engines" <Info@vanderengines.com>`,
    replyTo: email,
    to: 'Info@vanderengines.com,vanderengines1@gmail.com',
    subject: `Query Through www.vanderengines.com Connect At ${phone}`, // Keep subject as is
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

