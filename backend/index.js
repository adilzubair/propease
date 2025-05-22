require('dotenv').config();
const express = require('express');
const sgMail = require('@sendgrid/mail');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

// IMPORTANT: Set your SendGrid API Key in your environment variables
// For local development, you can use a .env file with a library like dotenv
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

app.post('/api/send-email', async (req, res) => {
  const { to, from, subject, html } = req.body;

  if (!to || !from || !subject || !html) {
    return res.status(400).json({ error: 'Missing required fields: to, from, subject, html' });
  }

  // Validate email format (basic)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(to)) {
    return res.status(400).json({ error: 'Invalid "to" email format.' });
  }

  // Ensure the 'from' email is the one we expect from our frontend
  if (from !== 'help.propease@gmail.com') {
    console.warn(`Suspicious 'from' email detected: ${from}`); // Log for monitoring
    return res.status(400).json({ error: 'Invalid "from" email address.' });
  }

  // Basic validation for subject and html content (e.g., not excessively long)
  if (subject.length > 255) { // Example length limit
    return res.status(400).json({ error: 'Subject is too long.'});
  }
  if (html.length > 10000) { // Example length limit for basic HTML email
    return res.status(400).json({ error: 'HTML content is too long.'});
  }

  const msg = {
    to,
    from, // Use the email address or domain you verified with SendGrid
    subject,
    html,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error.response ? error.response.body : error);
    // It's good practice to check for error.response.body for more detailed SendGrid errors
    let errorMessage = 'Failed to send email.';
    if (error.response && error.response.body && error.response.body.errors) {
        errorMessage = error.response.body.errors.map(err => err.message).join('; ');
    }
    res.status(500).json({ error: errorMessage });
  }
});

// Start server only if not in test environment or if this file is run directly
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
}

module.exports = app; // Export the app for testing
