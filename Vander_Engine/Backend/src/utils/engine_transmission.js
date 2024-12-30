const nodemailer = require('nodemailer');
require('dotenv').config();

const ETsendEmail = async ({ part, make, model, year, variant, name, email,  phone, message, agreed }) => {
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
    from: `"${'noreply@vanderengines.com'}" <Info@vanderengines.com>`,
    replyTo: email,	
    to: 'Info@vanderengines.com, vanderengines1@gmail.com, anekchauhan30@gmail.com',
    subject: `Query Through www.vanderengines.com`,
    text: `
      Year: ${year}
      Make: ${make}
      Model: ${model}
      Part: ${part}
      Name: Vander Engines
      Phone: ${phone}
      Email: Vanderengine01@gmail.com
      Variant: ${variant}
    `,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { ETsendEmail };

