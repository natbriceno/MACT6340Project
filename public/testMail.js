import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

async function testMail() {
    console.log("🟢 Starting test mail...");

    let transporter = nodemailer.createTransport({
        host: process.env.GMAIL_HOST,
        port: 587, // Change to 465 for SSL
        secure: false, 
        auth: {
            user: process.env.GMAIL_USERNAME,
            pass: process.env.GMAIL_PASSWORD,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    try {
        let info = await transporter.sendMail({
            from: process.env.MESSAGE_FROM,
            to: process.env.MESSAGE_TO,
            subject: "Test Email",
            text: "Hello from Nodemailer!",
        });

        console.log("✅ Test Message sent:", info.messageId);
    } catch (error) {
        console.error("❌ Error:", error);
    }
}

testMail();
