const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');
const validator = require('validator');

// Create transporter for sending emails
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Input validation and sanitization
const validateContactInput = (data) => {
  const errors = [];

  // Validate name
  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }
  if (data.name && data.name.length > 100) {
    errors.push('Name must be less than 100 characters');
  }

  // Validate email
  if (!data.email || !validator.isEmail(data.email)) {
    errors.push('Please provide a valid email address');
  }

  // Validate subject
  if (!data.subject || data.subject.trim().length < 3) {
    errors.push('Subject must be at least 3 characters long');
  }
  if (data.subject && data.subject.length > 200) {
    errors.push('Subject must be less than 200 characters');
  }

  // Validate message
  if (!data.message || data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  }
  if (data.message && data.message.length > 2000) {
    errors.push('Message must be less than 2000 characters');
  }

  return errors;
};

// Sanitize input to prevent XSS
const sanitizeInput = (str) => {
  return validator.escape(str.trim());
};

// POST - Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate input
    const validationErrors = validateContactInput(req.body);
    if (validationErrors.length > 0) {
      return res.status(400).json({ 
        success: false, 
        message: validationErrors.join(', ')
      });
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: validator.normalizeEmail(email),
      subject: sanitizeInput(subject),
      message: sanitizeInput(message)
    };

    // Save to database
    const contact = new Contact(sanitizedData);
    await contact.save();

    // Send email notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'vivekranaworks@gmail.com',
      subject: `Portfolio Contact: ${sanitizedData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #667eea;">New Contact Form Submission</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 10px;">
            <p><strong>Name:</strong> ${sanitizedData.name}</p>
            <p><strong>Email:</strong> ${sanitizedData.email}</p>
            <p><strong>Subject:</strong> ${sanitizedData.subject}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${sanitizedData.message}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            Submitted at: ${new Date().toLocaleString()}
          </p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ 
      success: true, 
      message: 'Message sent successfully!' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again.' 
    });
  }
});

// GET - Get all contact submissions (for admin)
router.get('/', require('../middleware/auth'), async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data: contacts });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Failed to fetch contacts' 
    });
  }
});

module.exports = router;
