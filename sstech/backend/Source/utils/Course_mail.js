const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async ({ fullName, email, phone, address, consent }) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: 'info@sstechservices.net', // Your email address
      pass: 'Sstech@123', // Your email password
    },
  });

  const mailOptions = {
    from: `"${fullName}" <info@sstechservices.net>`, // Sender information
    to: 'Sstechofficiel@gmail.com, info@sstechservices.net, anekchauhan28@gmail.com', // Recipients
    subject: `New Form Submission from ${fullName}`,
    text: `
      Name: ${fullName}
      Email: ${email}
      Phone: ${phone}
      Address: ${address}
      Consent to Contact: ${consent}
    `,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
