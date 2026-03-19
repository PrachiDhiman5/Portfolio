const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Project = require('./models/Project');
const Message = require('./models/Message');
const Contact = require('./models/Contact');
const Chat = require('./models/Chat');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { initKnowledgeBase, getRelevantContext } = require('./utils/ragUtils');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "models/gemini-1.5-flash",
  systemInstruction: `You are Prachi Dhiman's Intelligent AI Assistant. 
  Your goal is to act as a professional representative of Prachi.
  
  CONTEXT HANDLING:
  - You will be provided with relevant context about Prachi below.
  - Use ONLY the provided context and your core identity as Prachi's assistant to answer.
  - If the context doesn't contain the answer, politely say you're not sure but can take a message for Prachi.
  
  LEAD DETECTION:
  - If the user mentions a job, internship, or opportunity, inform them that you've flagged this for Prachi and she will be notified via email.
  - Suggest they can also use the Contact form or LinkedIn.
  
  BEHAVIOR:
  - Stay professional, friendly, and concise.
  - Do not hallucinate details not found in the context.`
});

// Nodemailer Setup (Using placeholders - user will need to update)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Initialize Knowledge Base on startup
initKnowledgeBase().catch(console.error);

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

// POST a new message (Contact Form)
app.post('/api/contact', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// SEED projects (Simple route for initial data)
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

// Test endpoint
app.get('/api/test', (req, res) => {
  console.log('TEST endpoint hit!');
  res.json({ message: 'Server is working!' });
});

// AI Chat Route
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  try {
    // 1. Detect if it's a lead
    const leadKeywords = ['job', 'opportunity', 'hire', 'internship', 'position', 'recruit'];
    const isLead = leadKeywords.some(key => message.toLowerCase().includes(key));

    // 2. Retrieve relevant context for the AI
    console.log("RAG Query:", message); // Log the query
    const context = await getRelevantContext(message);
    console.log("RAG Context:", context); // Log the context

    // 3. Get AI Response with Context
    const chatSession = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: `Here is the relevant information about Prachi:\n\n${context}` }],
        },
        {
          role: "model",
          parts: [{ text: "Understood. I will use this information to represent Prachi accurately." }],
        },
      ],
    });

    const result = await chatSession.sendMessage(message);
    const aiResponse = result.response.text();

    // 4. Persistence
    await Chat.create({ sender: 'user', message, isLead });
    await Chat.create({ sender: 'bot', message: aiResponse });

    // 5. Email Alert for leads
    if (isLead && process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Send to self
        subject: '🚀 New Opportunity Detected via Portfolio Chatbot!',
        text: `New job opportunity detected:\n\nUser Message: "${message}"\nAI Response: "${aiResponse}"\n\nCheck your MongoDB for full history.`
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) console.error('Email error:', error);
        else console.log('Email sent: ' + info.response);
      });
    }

    res.json({
      response: aiResponse,
      shouldRedirect: isLead,
      action: isLead ? 'contact' : null
    });
  } catch (err) {
    console.error("Chat error:", err);
    res.status(500).json({ message: "Something went wrong with the AI." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
