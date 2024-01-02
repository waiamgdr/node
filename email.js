
const nodemailer = require('nodemailer');

// Create a transporter with your email service credentials
const transporter = nodemailer.createTransport({
  service: 'your_email_service', // replace with your email service (e.g., 'gmail')
  auth: {
    user: 'your_email@example.com', // replace with your email address
    pass: 'your_email_password', // replace with your email password
  },
});

// Define the email options
const mailOptions = {
  from: 'your_email@example.com', // replace with your email address
  to: 'your_destination@example.com', // replace with the recipient's email address
  subject: 'Test Email',
  text: 'Hello, this is a test email from Node.js!',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.error('Error sending email:', error);
  }
  console.log('Email sent:', info.response);
});