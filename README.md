📧 Cold Email Automation Tool

A simple and powerful web app that helps you send bulk cold emails to HRs and companies using a CSV file and an email template.
You can also attach your resume and personalize each email with the receiver’s name and company name.

This project is beginner-friendly and built using HTML, CSS, JavaScript (Frontend) and Node.js + Express (Backend).

✨ Features

Upload HR list via CSV file

Add your custom email template

Supports dynamic variables:

{{name}} → Receiver's name

{{company}} → Receiver's company

Attach your resume (PDF)

Uses your own Gmail to send emails

Simple and clean UI

Secure (does not store email or password)

📁 Project Folder Structure
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

🛠️ Technologies Used

Frontend: HTML, CSS, JavaScript

Backend: Node.js, Express.js

Libraries:

Nodemailer (for sending emails)

Multer (for file uploads)

CSV Parser (for reading CSV files)

🚀 How To Run This Project Locally
Step 1: Clone the Repository
git clone https://github.com/your-username/cold-email-automation.git
cd cold-email-automation

Step 2: Install Backend Dependencies
cd backend
npm install

Step 3: Create .env File

Inside the backend folder, create a file named .env

PORT=5000

Step 4: Start the Backend Server
nodemon app.js


You should see:

Server running on port 5000

Step 5: Run the Frontend

Open this file manually in browser:

public/index.html

📄 CSV File Format

Your CSV file must look like this:

name,email,company
Yash,someone@gmail.com,ABC Pvt Ltd
Ravi,hr@company.com,XYZ Pvt Ltd


⚠️ Important:

No extra spaces in headers

Header names must be exactly:

name

email

company

🔐 How To Generate Gmail App Password (Very Important)

Gmail does not allow normal passwords to send emails via apps.
You must generate an App Password.

Step-by-step:

Go to: https://myaccount.google.com/

Click on Security

Turn ON 2-Step Verification

After that, click on:

App passwords


Select:

App: Mail

Device: Other

Click Generate

Gmail will give you a 16-digit password

👉 Use this password in the "App Password" field of the app
👉 Do NOT use your real Gmail password

📨 How To Use The App

Enter your Gmail address

Paste the App Password

Write email Subject

Write email Template, example:

Dear {{name}},

I hope you are doing well.

I am applying for a role in your company {{company}}.

Regards,
Your Name


Upload CSV file

Upload Resume (PDF)

Click Send Emails

❗ Common Problems & Fixes
❌ Emails Not Sending?

✅ Use App Password, not real Gmail password
✅ Turn on "Less secure apps" / App Password
✅ Check your internet connection
✅ Make sure CSV file format is correct

❌ Name or Company Not Replacing?

✅ Your template must use:

{{name}}
{{company}}


✅ Your CSV headers must match:

name,email,company

🌍 Deployment (Coming Soon)

You can deploy this project for free using:

Render

Railway

Cyclic

Vercel (Frontend)

Netlify (Frontend)

📌 Disclaimer

This tool is built for educational purposes and for sending professional job application emails.
Do not use it for spam or illegal emailing.

🤝 Author

Made with ❤️ by Saksham Kumar