// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3004;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/Contactus', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define schema for email details
const emailSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

// Define model for email details
const Email = mongoose.model('Email', emailSchema);

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nanisai9294@gmail.com', // Enter your Gmail email address
        pass: 'AmmA@143' // Enter your Gmail password
    }
});

// Route for sending email
app.post('/api/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Save email data to MongoDB
    const newEmail = new Email({ name, email, message });
    newEmail.save((err) => {
        if (err) {
            console.error('Error saving email to MongoDB:', err);
            res.status(500).json({ error: 'Failed to save email to database' });
            return;
        }

        // Send email using Nodemailer
        const mailOptions = {
            from: '', // Enter your Gmail email address
            to: 'nanisai9294@gmail.com', // Enter recipient email address
            subject: 'New Message from Contact Form successfuly sent',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                res.status(500).json({ error: 'Failed to send email' });
            } else {
                console.log('Email sent:', info.response);
                res.status(200).json({ message: 'Email sent successfully' });
            }
        });
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
