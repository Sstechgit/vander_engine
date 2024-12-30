const express = require("express");
const router = express.Router();
const { sendEmail } = require("../utils/job-form-mail");
const multer = require("multer");

// Configure multer for file uploads
const upload = multer({ dest: "uploads/" }); // Specify the destination for file uploads

// POST route to handle form submissions with file upload
router.post("/", upload.single("attachment"), async (req, res) => {
  const {
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
  } = req.body;
  const file = req.file; // The uploaded file

  try {
    await sendEmail({
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
    });
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email." });
  }
});

module.exports = router;
