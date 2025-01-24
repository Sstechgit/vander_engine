const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // Set upload directory
    },
    filename: (req, file, cb) => {
        const stockId = req.query.Stock || "default"; // Get Stock from query params
        const fileExtension = path.extname(file.originalname); // Get file extension
        cb(null, `${stockId}_image${fileExtension}`); // Example: T10000_image.jpg
    },
});

const upload = multer({ storage });

module.exports = upload;
