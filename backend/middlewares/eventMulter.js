const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads/event"));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = file.originalname;
    cb(null, uniqueSuffix);
  },
});

const eventUpload = multer({
  storage, 
  // limits: { fileSize: 25 * 1024 * 1024 }, // 25mb
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];

    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only images and videos are allowed"));
    }
  },
});

module.exports = eventUpload;