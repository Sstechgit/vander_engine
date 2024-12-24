const nodemailer = require('nodemailer');
require('dotenv').config();

const contact_mid_form = async ({ part, make, model, year, variant, name, email,  phone, message, agreed }) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: 'Info@vanderengines.com', // Your Gmail address
      pass: 'Shobhitrastogi@881037',
    },
  });

  const mailOptions = {
    from: `"${email}" <Info@vanderengines.com>`,
    replyTo: email,
    to: 'Info@vanderengines.com, vanderengines1@gmail.com, anekchauhan30@gmail.com',
    subject: `Query Through www.vanderengines.com`,
    text: `
      Part: ${part}
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { contact_mid_form };

