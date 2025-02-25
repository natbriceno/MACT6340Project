import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export async function sendMessage(subject, text) {
    let transporter = nodemailer.createTransport({
        host: process.env.GMAIL_HOST,
        port: 587, // Change to 465 if you want SSL
        secure: false, 
        auth: {
            user: process.env.GMAIL_USERNAME,
            pass: process.env.GMAIL_PASSWORD,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    let mailOptions = {
        from: process.env.MESSAGE_FROM,
        to: process.env.MESSAGE_TO,
        subject: subject,
        text: text,
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('✅ Message sent: %s', info.messageId);
        return true;
    } catch (error) {
        console.error('❌ Error sending email:', error);
        return false;
    }
}
