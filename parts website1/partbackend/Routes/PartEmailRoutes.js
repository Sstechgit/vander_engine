import express from "express";
import nodemailer from "nodemailer";
const partemailrouter = express.Router();

// Send email route for product inquiry
partemailrouter.post("/send-parts-email", (req, res) => {
  const { year, make, model, part ,phone } = req.body;
  // Email sending setup (using Nodemailer)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL, // Load from environment variable
      pass: process.env.PASSWORD, // Load from environment variable
    },
  });
 
  const mailOptions = {
    from: process.env.EMAIL, // Sender address from environment variable
    to: `siawilson1108@gmail.com`, // Replace with the actual recipient
    subject: "New Product Inquiry",
    text: `Vehicle Information:\n
      Year: ${year}\n
      Make: ${make}\n
      Model: ${model}\n
      Part: ${part}\n
      Phone: ${phone}\n`, // Include the optional message if provided
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Error sending email" });
    }
    res.status(200).json({ message: "Email sent successfully" });
  });
});
export default partemailrouter;