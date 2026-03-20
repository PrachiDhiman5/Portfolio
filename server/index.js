const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// nodemailer was removed in favor of Resend API
require('dotenv').config();

const Project = require('./models/Project');
const Contact = require('./models/Contact');

const app = express();
const PORT = process.env.PORT || 5000;

// (Nodemailer was removed here, switching to Resend API for reliability)

app.use(cors());
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Routes
app.get('/', (req, res) => {
  res.send('Portfolio Backend API is running...');
});

// GET all projects
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new contact/opportunity submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message, projectType, formType, whatsapp } = req.body;
    
    // Save to database
    const newContact = new Contact({
      name,
      email,
      message,
      projectType,
      formType: formType || (projectType ? 'Collaboration' : 'Opportunity'), // Fallback if not provided
      whatsapp
    });
    
    await newContact.save();

    // Send Email Notification via Resend API
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'Portfolio <onboarding@resend.dev>',
            to: ['prachidhiman362@gmail.com'],
            subject: `🚀 New ${newContact.formType} Submission from ${name}`,
            text: `
New submission received on your portfolio!

Type: ${newContact.formType}
Name: ${name}
Email: ${email}
WhatsApp: ${whatsapp || 'Not provided'}
Classification: ${projectType || 'N/A'}

Message:
${message}

--
This is an automated notification from your Portfolio Website.
            `
          })
        });

        if (!emailResponse.ok) {
          const errorData = await emailResponse.json();
          console.error('Resend API error:', errorData);
        } else {
          console.log('Email sent successfully via Resend');
        }
      } catch (mailErr) {
        console.error('Failed to call Resend API:', mailErr);
      }
    } else {
      console.warn('RESEND_API_KEY not found. Email not sent.');
    }

    // WhatsApp Notification (Placeholder for automated API)
    console.log(`[WhatsApp Notification] To: 9034461378 | Type: ${newContact.formType} | From: ${name}`);

    res.status(201).json({ message: 'Submission successful! Prachi has been notified.' });
  } catch (err) {
    console.error('Submission error:', err);
    res.status(400).json({ message: err.message });
  }
});

// SEED projects
app.post('/api/projects/seed', async (req, res) => {
  const initialProjects = [
    {
      title: "Online Complaint Tracker System",
      description: "A full-stack web application that allows users to submit complaints and enables admins to manage, filter, update, and resolve issues.",
      techStack: ["Node.js", "Express.js", "JavaScript", "HTML", "CSS"],
      githubLink: "https://github.com/PrachiDhiman5/Online_Complaint_Tracker_System",
      category: "Full-stack"
    },
    {
      title: "Wardrobe AI",
      description: "ML-powered wardrobe management and outfit recommendation Android app.",
      techStack: ["Kotlin", "Jetpack Compose", "Android", "ML"],
      githubLink: "https://github.com/PrachiDhiman5/wardrobe-ai-android",
      category: "Android/ML"
    },
    {
      title: "Lifestyle Health Risk Prediction",
      description: "Predictive analytics project to assess health risk in young adults using ML.",
      techStack: ["Python", "Jupyter Notebook", "Scikit-Learn", "Numpy", "Pandas"],
      githubLink: "https://github.com/PrachiDhiman5/Lifestyle-Health-Risk-Prediction",
      category: "Machine Learning"
    },
    {
      title: "Travel Expense Tracker",
      description: "Created a travel expense tracker system applying core Data Structures & Algorithms (Stacks, BST, Hash Maps) to a real-world use case.",
      techStack: ["DSA", "HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/PrachiDhiman5/Travel_expense_Tracker",
      category: "DSA/Web"
    }
  ];

  try {
    await Project.deleteMany({});
    await Project.insertMany(initialProjects);
    res.status(201).json({ message: 'Database seeded with projects!' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
