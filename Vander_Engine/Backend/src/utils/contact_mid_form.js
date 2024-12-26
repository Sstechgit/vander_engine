const nodemailer = require('nodemailer');
require('dotenv').config();

const contact_mid_form = async ({ part, make, model, year, variant, name, email, phone, message, agreed }) => {
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
    to: 'anekchauhan30@gmail.com',
    subject: `Query Through www.vanderengines.com`, // Keep subject as is
    text: `
      Part: ${part}
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
      
      Timestamp: ${Date.now()}  // Unique identifier in the body
    `,
    messageId: `<${Date.now()}-${Math.random().toString(36).substring(2)}@vanderengines.com>`, // Unique Message-ID
    headers: {
      'In-Reply-To': null,
      References: null, // Prevent Gmail from threading emails
    },
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { contact_mid_form };
