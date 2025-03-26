const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");
const quotations = require("../models/Quotations"); // Import your model
require("dotenv").config(); // Load environment variables

const SendQuotations = asyncHandler(async (req, res) => {
  const { email, year, make, model, part, pricing, miles, stock } = req.body;
  let description = req.body?.description || "-";
  let variant = req.body?.variant || "-";
  console.log("Received request body:", req.body);
  // Validate email from frontend
  if (!email) {
    return res.status(400).json({ success: false, message: "Recipient email is required" });
  }

  // Save quotation in MongoDB
  let storeinMongo;
  try {
    storeinMongo = await quotations.create({
      email,
      year,
      miles,
      make,
      part,
      model,
      pricing,
      variant,
      stock,
      description,
      agent: req.user,
    });
  } catch (err) {
    console.error("Error saving quotation:", err);
    return res.status(500).json({ success: false, message: "Failed to save quotation" });
  }

  // Email transporter setup
  let transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: 'contactus@vanderengines.com',
      pass: 'Shobhit@1256',
    },
  });
 
  // Email options
  let mailOptions = {
    from: `contactus@vanderengines.com`, // Use sender's email
    to: email, // Send email to the logged-in user
    subject: "Quotation Created Successfully",
    html: `
            <h2>Your Quotation Summary</h2>
            <p><b>Make:</b> ${make}</p>
            <p><b>Model:</b> ${model}</p>
            <p><b>Year:</b> ${year}</p>
            <p><b>Part:</b> ${part}</p>
            <p><b>Variant:</b> ${variant}</p>
            <p><b>Stock No:</b> ${stock}</p>
            <p><b>Pricing:</b> $${pricing}</p>
            <p><b>Miles:</b> ${miles}</p>
            <p><b>Description:</b> ${description}</p>
            <p>Thank you for using our service!</p>
        `,
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    return res.json({
      success: true,
      message: "Quotation saved & email sent successfully!",
      data: storeinMongo,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({
      success: false,
      message: "Quotation saved, but email sending failed!",
      data: storeinMongo,
    });
  }
});

const ViewQuotations = asyncHandler(async (req, res) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ success: false, message: "Email is required!" });
  }

  try {
    // Fetch quotations from MongoDB
    const userQuotations = await quotations.find({ email });

    if (!userQuotations || userQuotations.length === 0) {
      console.log(`No quotations found for email: ${email}`);
      return res.status(404).json({ success: false, message: "No quotations found for this email." });
    }

    return res.json({ success: true, data: userQuotations });
  } catch (error) {
    console.error("Error fetching quotations:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});


module.exports = { SendQuotations, ViewQuotations };
