# 📧 Cold Email Automation Tool

A simple and powerful web app that helps you send bulk cold emails to HRs and companies using a CSV file and an email template. You can attach your resume (PDF) and personalize each email with the receiver’s name and company name.

This project is beginner-friendly and built using HTML, CSS, JavaScript (frontend) and Node.js + Express (backend).

---

## ✨ Features

- Upload HR list via CSV file
- Add your custom email template
- Supports dynamic variables:
  - `{{name}}` → Receiver's name
  - `{{company}}` → Receiver's company
- Attach your resume (PDF)
- Uses your own Gmail to send emails (via App Password)
- Simple and clean UI
- Secure — does not store email or password

---

## 📁 Project Folder Structure

```
cold-email-automation/
│
├── backend/
│   ├── controllers/
│   │   └── emailController.js
│   ├── routes/
│   │   └── emailRoutes.js
│   ├── uploads/
│   │   ├── csv/
│   │   └── resumes/
│   ├── .env
│   ├── app.js
│   └── package.json
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md
```

---

## 🛠️ Technologies Used

- Frontend: HTML, CSS, JavaScript  
- Backend: Node.js, Express.js  
- Libraries:
  - nodemailer (for sending emails)
  - multer (for file uploads)
  - CSV parser (for reading CSV files)

---

## 🚀 How To Run This Project Locally

### Step 1 — Clone the repository
```bash
git clone https://github.com/your-username/cold-email-automation.git
cd cold-email-automation
```

### Step 2 — Install backend dependencies
```bash
cd backend
npm install
```

### Step 3 — Create `.env` file
Inside the `backend` folder, create `.env` with at least:
```
PORT=5000
```

Add any other environment variables your backend expects (if any).

### Step 4 — Start the backend server
- With nodemon:
```bash
npx nodemon app.js
```
- Or with node:
```bash
node app.js
```

You should see:
```
Server running on port 5000
```

### Step 5 — Run the frontend
Open the frontend file in your browser:
- Open `frontend/index.html` directly (double-click or right-click → Open With → Browser)
- Or serve it via a static server if you prefer

---

## 📄 CSV File Format

Your CSV file must have exactly these headers (no extra spaces):

```
name,email,company
Yash,someone@gmail.com,ABC Pvt Ltd
Ravi,hr@company.com,XYZ Pvt Ltd
```

⚠️ Important:
- No extra spaces in headers
- Header names must be exactly: `name`, `email`, `company`

---

## 🔐 How To Generate Gmail App Password (Very Important)

Gmail usually blocks direct app sign-in using your normal password. You must generate an App Password:

1. Go to: https://myaccount.google.com/  
2. Click **Security**  
3. Turn ON **2-Step Verification** (if not already enabled)  
4. Go to **App passwords**  
5. Select:
   - App: Mail  
   - Device: Other (give it a name)  
6. Click **Generate** — Gmail will give you a 16-character password

- Use this 16-character password in the app's "App Password" field  
- Do NOT use your real Gmail password

---

## 📨 How To Use The App

1. Enter your Gmail address in the app.
2. Paste the App Password generated from Gmail.
3. Write the email Subject.
4. Write the email Template. Example:

```
Dear {{name}},

I hope you are doing well.

I am applying for a role in your company {{company}}.

Regards,
Your Name
```

5. Upload the CSV file.
6. (Optional) Upload your Resume (PDF).
7. Click **Send Emails**.

The app will replace `{{name}}` and `{{company}}` for each row and send personalized emails.

---

## ❗ Common Problems & Fixes

### ❌ Emails Not Sending?
- ✅ Use the App Password (not your real Gmail password).
- ✅ Ensure 2-Step Verification is ON and you have generated an App Password.
- ✅ Check your internet connection.
- ✅ Verify CSV file format and headers.

### ❌ Name or Company Not Replacing?
- ✅ Make sure your template uses exactly `{{name}}` and `{{company}}`.
- ✅ Ensure CSV headers match exactly: `name,email,company`.

---

## 🌍 Deployment (Coming Soon)

You can deploy this project using:
- Backend: Render, Railway, Cyclic
- Frontend: Vercel, Netlify

---

## 📌 Disclaimer

This tool is built for educational purposes and for sending professional job application emails. Do not use it for spam, abusive, or illegal emailing.

---

## 🤝 Author

Made with ❤️ by Saksham Kumar  
GitHub: https://github.com/Saksham67

---
