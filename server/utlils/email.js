const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
    try {
        // Create a transporter object using Gmail
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.EMAIL_USER, // Your Gmail address
                pass: process.env.EMAIL_PASS, // Your Gmail password or app-specific password
            },
        });

        // Define email options
        const mailOptions = {
            from: `"Intelvid.Ai" <${process.env.EMAIL_USER}>`, // Sender address
            to: options.email, // Recipient address
            subject: options.subject, // Email subject
            html: options.html, // HTML body
        };

        console.log("Sending email with options:", mailOptions);

        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully:", info.messageId);
    } catch (error) {
        console.error("Error sending email:", error);
        throw new Error("Failed to send email");
    }
};

module.exports = sendEmail;