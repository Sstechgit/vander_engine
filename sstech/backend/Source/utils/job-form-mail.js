const fs = require("fs"); // File system to handle uploads
const path = require("path"); // Path module to handle file paths
const nodemailer = require("nodemailer");

const sendEmail = async ({
  title,
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
      user: "info@sstechservices.net",
      pass: "Sstech@123",
    },
  });

  const fileAttachment = file
    ? {
        filename: file.originalname,
        path: file.path,
      }
    : null;

  const mailOptions = {
    from: `${email} <info@sstechservices.net>`,
    to: "Sstechofficiel@gmail.com, info@sstechservices.net",
    subject: `New Form Submission from ${firstName}`,
    text: `Title: ${title}
    First Name: ${firstName}
Last Name: ${lastName}
Email: ${email}
Mobile: ${mobile}
City: ${city}
State: ${state}
Country: ${country}
Experience: ${experience}
Relevant Experience: ${relevantExperience}
Current Salary: ${currentSalary}
Expected Salary: ${expectedSalary}
Notice Period: ${noticePeriod}`,
    attachments: fileAttachment ? [fileAttachment] : [],
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent:", result);

    // Clean up the uploaded file
    if (file && file.path) {
      fs.unlink(file.path, (err) => {
        if (err) {
          console.error("Error deleting file:", err);
        } else {
          console.log("Uploaded file deleted:", file.path);
        }
      });
    }

    return result;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error; // Rethrow to handle in route
  }
};

module.exports = { sendEmail };
