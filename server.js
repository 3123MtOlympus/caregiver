const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Configure the email transport using SMTP
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // Your email from environment variables
            pass: process.env.EMAIL_PASS, // Your email password from environment variables
        },
    });

    // Set up email data
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: `${email}, ${process.env.RECIPIENT_EMAIL}`, // Recipient email(s)
        subject: 'New Message from Website',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.send('Message sent successfully!');
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
