const nodemailer = require('nodemailer');
require('dotenv').config();

const homesendEmail = async ({ part, make, model, year, variant, name, email,  phone, message, agreed }) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: 'info@autoparts-leads.us',
      pass: 'Shobhitrastogi@881037',
    },
  });

  const mailOptions = {
    from: `${email} <info@autoparts-leads.us>`,
    replyTo: email,
    to: 'info@autoparts-leads.us',
    subject: `Query Through www.autoparts-leads.us Connect At ${phone}`, // Keep subject as is
    text: `
      Year: ${year}
      Make: ${make}
      Model: ${model}
      Part: ${part}
      Name: ${name}
      Phone: ${phone}
      Email: ${email}
    `,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { homesendEmail };

