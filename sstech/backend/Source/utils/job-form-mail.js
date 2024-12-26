const nodemailer = require("nodemailer");
require("dotenv").config();
const fs = require("fs"); // File system to read the uploaded file
const path = require("path");

const sendEmail = async ({
  firstName,
  lastName,
  email,
  mobile,
  city,
  state,
  country,
  experience,
  relevantExperience,
  currentSalary,
  expectedSalary,
  noticePeriod,
  file,
}) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
        user: 'nick@vanderengines.com', // Your Gmail address
        pass: 'Shobhit@2510',
    },
  });

  // Read the file to attach it
  const fileAttachment = file
    ? {
        filename: file.originalname,
        path: file.path,
      }
    : null;

  const mailOptions = {
    from: 'nick@vanderengines.com',
    to:'anekchauhan28@gmail.com',
    subject: `New Form Submission from ${firstName}`,
    text: `FirstName: ${firstName} \nLastName: ${lastName} \nEmail: ${email} \nMobile: ${mobile} \nCity : ${city} \nState: ${state} \nCountry: ${country} 
    \nExperience: ${experience} \nRelevant Experience: ${relevantExperience} \nCurrent Salary : ${currentSalary} \nExpected Salary: ${expectedSalary} \nNotice Period: ${noticePeriod}`,
    attachments: fileAttachment ? [fileAttachment] : [],
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
