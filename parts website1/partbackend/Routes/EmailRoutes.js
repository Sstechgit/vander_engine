import express from "express";
import nodemailer from "nodemailer";
const emailrouter = express.Router();

// Send email route for product inquiry
emailrouter.post("/send-email", (req, res) => {
  const { year, make, model, part, name, email, phone, message } = req.body;
  // Email sending setup (using Nodemailer)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL, // Load from environment variable
      pass: process.env.PASSWORD, // Load from environment variable
    },
  });
  // Validate required fields
  if (!name || !email || !phone) {
    return res
      .status(400)
      .json({ error: "Name, Email, and Phone are required" });
  }

  const mailOptions = {
    from: process.env.EMAIL, // Sender address from environment variable
    to: `siawilson1108@gmail.com`, // Replace with the actual recipient
    subject: "New Product Inquiry",
    text: `Vehicle Information:\n
      Year: ${year}\n
      Make: ${make}\n
      Model: ${model}\n
      Part: ${part}\n\n
      Customer Information:\n
      Name: ${name ? name : ""}\n
      Email: ${email ? email : ""}\n
      Phone: ${phone}\n
      Message: ${message ? message : "No message provided"}`, // Include the optional message if provided
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Error sending email" });
    }
    res.status(200).json({ message: "Email sent successfully" });
  });
});
export default emailrouter;
