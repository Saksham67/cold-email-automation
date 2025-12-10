import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

import { handleSendEmails } from "../controllers/emailController.js";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Multer storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname === "csvFile")
      cb(null, path.join(__dirname, "..", "uploads", "csv"));
    else if (file.fieldname === "resumeFile")
      cb(null, path.join(__dirname, "..", "uploads", "resumes"));
    else cb(null, path.join(__dirname, "..", "uploads"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Single endpoint: accepts multipart/form-data with csvFile and resumeFile
router.post(
  "/",
  upload.fields([
    { name: "csvFile", maxCount: 1 },
    { name: "resumeFile", maxCount: 1 },
  ]),
  handleSendEmails
);

export default router;
