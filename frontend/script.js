document
  .getElementById("emailForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const resultLog = document.getElementById("resultLog");
    const sendBtn = document.getElementById("sendBtn");

    sendBtn.disabled = true;
    sendBtn.innerText = "Sending...";

    resultLog.innerHTML = "⏳ Sending emails... Please wait...";

    const formData = new FormData();
    formData.append(
      "senderEmail",
      document.getElementById("senderEmail").value
    );
    formData.append(
      "appPassword",
      document.getElementById("appPassword").value
    );
    formData.append("subject", document.getElementById("emailSubject").value);
    formData.append("template", document.getElementById("emailTemplate").value);
    formData.append("csvFile", document.getElementById("csvFile").files[0]);
    formData.append(
      "resumeFile",
      document.getElementById("resumeFile").files[0]
    );

    try {
      const response = await fetch("https://cold-email-automation-4tg6.onrender.com/send-emails", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      let logHtml = "";
      data.results.forEach((item) => {
        if (item.status === "success") {
          logHtml += `✔ Sent to ${item.email}\n`;
        } else {
          logHtml += `✖ Failed for ${item.email}: ${item.error}\n`;
        }
      });

      resultLog.classList.remove("d-none");
      resultLog.innerHTML = logHtml;
    } catch (error) {
      resultLog.innerHTML = "⚠ Something went wrong: " + error.message;
    }

    sendBtn.disabled = false;
    sendBtn.innerText = "Send Emails";
  });
