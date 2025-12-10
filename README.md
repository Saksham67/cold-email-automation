# 📧 Cold Email Automation Tool

A simple and powerful web app that helps you send **bulk cold emails** to HRs and companies using a CSV file and an email template.  
You can also attach your resume and personalize each email with the receiver’s name and company name.

This project is beginner-friendly and built using **HTML, CSS, JavaScript (Frontend)** and **Node.js + Express (Backend)**.

---

## ✨ Features

- Upload HR list via CSV file
- Add your custom email template
- Supports dynamic variables:
  - `{{name}}` → Receiver's name
  - `{{company}}` → Receiver's company
- Attach your resume (PDF)
- Uses your own Gmail to send emails
- Simple and clean UI
- Secure (does not store email or password)

---

## 📁 Project Folder Structure

cold-email-automation/  
├── backend/  
│   ├── controllers/  
│   ├── routes/  
│   ├── uploads/  
│   ├── .env  
│   ├── app.js  
│   └── package.json  
├── frontend/  
│   ├── index.html  
│   ├── style.css  
│   └── script.js  
└── README.md

---

## 🛠️ Technologies Used

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Libraries:
  - Nodemailer
  - Multer
  - CSV Parser

---

## 🚀 How To Run This Project

### Clone the repo

git clone https://github.com/Saksham67/cold-email-automation.git
cd cold-email-automation
