const nodemailer = require('nodemailer');
require('dotenv').config();

const ETsendEmail = async ({ part, make, model, year, variant, name, email,  phone, message, agreed }) => {
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
    to: 'Info@vanderengines.com,vanderengines1@gmail.com,spthelpdesk99@gmail.com',
    subject: `Query Through www.vanderengines.com Connect At ${phone}`, // Keep subject as is
    text: `
      Year: ${year}
      Make: ${make}
      Model: ${model}
      Part: ${part}
      Name: Vander Engines
      Phone: ${phone}
      Email: Transmmision_engine_page@gmail.com
      Variant: ${variant}
    `,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { ETsendEmail };

