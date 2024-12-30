const nodemailer = require('nodemailer');

// Nodemailer configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

transporter.verify((error, success) => {
    if (error) {
        console.error('Email server connection failed:', error);
    } else {
        console.log('Email server is ready to send messages!');
    }
});

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }

    const { name, email, message } = req.body;

    try {
        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER, // Sending to your own email
            subject: `New message from ${name}`,
            text: message,
        });

        res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Email sending failed:', error);
        res.status(500).json({ success: false, message: 'Email is not sent successfully!' });
    }
};
