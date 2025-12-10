import fs from "fs";
import path from "path";
import { parseCSV } from "../utils/csvParser.js";
import { sendBulkEmails } from "../utils/mailer.js";

export const handleSendEmails = async (req, res) => {
  try {
    // Form fields
    const { senderEmail, appPassword, subject, template } = req.body;
    console.log("🔥 Request received at backend");
    console.log("Body:", req.body);
    console.log("Files:", req.files);

    if (!senderEmail || !appPassword || !subject || !template) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    // Uploaded files
    const csvFile = req.files && req.files.csvFile && req.files.csvFile[0];
    const resumeFile =
      req.files && req.files.resumeFile && req.files.resumeFile[0];

    if (!csvFile || !resumeFile) {
      return res
        .status(400)
        .json({ message: "CSV and Resume files are required." });
    }

    const csvPath = csvFile.path;
    const resumePath = resumeFile.path;

    // Parse CSV into array of recipient objects
    const recipients = await parseCSV(csvPath);

    if (!recipients.length) {
      // cleanup
      fs.unlink(csvPath, () => {});
      fs.unlink(resumePath, () => {});
      return res.status(400).json({ message: "CSV contained no rows." });
    }

    // Send emails
    const results = await sendBulkEmails({
      senderEmail,
      appPassword,
      subject,
      template,
      recipients,
      resumePath,
    });

    // Cleanup uploaded files
    fs.unlink(csvPath, () => {});
    // Keep resume for a short time or delete; we'll delete
    fs.unlink(resumePath, () => {});

    return res.json({ results });
  } catch (err) {
    console.error("Error in handleSendEmails:", err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};
