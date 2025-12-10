import nodemailer from "nodemailer";

function replacePlaceholders(template, row) {
  // Very small templating: replace {{name}}, {{company}} etc.
  let out = template;
  for (const key of Object.keys(row)) {
    const re = new RegExp("{{\\s*" + key + "\\s*}}", "gi");
    out = out.replace(re, row[key] || "");
  }
  return out;
}

export async function sendBulkEmails({
  senderEmail,
  appPassword,
  subject,
  template,
  recipients,
  resumePath,
}) {
  // Create transporter using user's credentials
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: senderEmail,
      pass: appPassword,
    },
  });

  // Verify transporter
  try {
    await transporter.verify();
  } catch (err) {
    // If verification fails, return failure for all
    return recipients.map((r) => ({
      email: r.email || r.Email || "",
      status: "failed",
      error: "SMTP verification failed: " + err.message,
    }));
  }

  const results = [];

  for (const row of recipients) {
    // Attempt to get the recipient email - support common header names
    const toEmail = row.email || row.Email || row.E_mail || row.EADDRESS || "";
    if (!toEmail) {
      results.push({
        email: "(missing)",
        status: "failed",
        error: "No email column found for this row",
      });
      continue;
    }

    const personalized = replacePlaceholders(template, row);

    const mailOptions = {
      from: senderEmail,
      to: toEmail,
      subject: subject,
      text: personalized,
      attachments: [{ filename: "Resume.pdf", path: resumePath }],
    };

    try {
      await transporter.sendMail(mailOptions);
      results.push({ email: toEmail, status: "success" });
    } catch (err) {
      console.error("Send error for", toEmail, err);
      results.push({ email: toEmail, status: "failed", error: err.message });
    }
  }
}
