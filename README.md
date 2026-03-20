# 🚀 Prachi Dhiman's Professional Portfolio

[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB Atlas](https://img.shields.io/badge/MongoDB_Atlas-Cloud-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/cloud/atlas)
[![Nodemailer](https://img.shields.io/badge/Nodemailer-SMTP-EA4335?logo=gmail&logoColor=white)](https://nodemailer.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.x-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A premium, full-stack portfolio website architected for developers and data enthusiasts. Built with the **MERN stack**, this project features a sophisticated dual-channel notification system, real-time database persistence, and a modern, high-performance UI.

---

## ✨ Key Features

### 📨 Dual-Channel Notification System
The portfolio is designed for high accessibility with two dedicated intake flows:
- **Collaboration Form**: Geared towards developers and open-source contributors.
- **Opportunity Form**: Specifically designed for recruiters to provide role details and compensation ranges.

### ⚡ Real-time Alerts
- **Instant Email Notifications**: Every form submission is automatically routed to `prachidhiman362@gmail.com` using Nodemailer and Secure SMTP.
- **Direct WhatsApp Redirection**: A "Send via WhatsApp" feature on the success screen allows visitors to instantly forward a summary of their request to `+91 90344 61378`.

### 🗄️ Backend & Persistence
- **MongoDB Atlas Integration**: All interactions are logged in a cloud-hosted database for persistent record-keeping.
- **Secure Architecture**: Environment variables protect sensitive MongoDB connection strings and Email App Passwords.

### 🎨 Design & Experience
- **Responsive Aesthetics**: A sleek, dark-themed interface built with **Tailwind CSS**.
- **Interactive Micro-animations**: Smooth transitions and hover effects powered by **Framer Motion**.
- **Performance Optimized**: Built with **Vite** for near-instant load times.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 19, Vite, Framer Motion, Lucide Icons, Tailwind CSS |
| **Backend** | Node.js, Express.js (v5), Nodemailer |
| **Database** | MongoDB Atlas (Mongoose ODM) |
| **DevOps** | Dotenv, Nodemon, Git |

---

## 📁 Project Structure

```text
├── client/                # React Vite Frontend
│   ├── src/
│   │   ├── components/    # Reusable UI (ContactForm, OpportunityForm, etc.)
│   │   ├── pages/         # Page Views (Home, Work/Lab, Resume, Contact)
│   │   ├── App.jsx        # Root component & Routing
│   │   └── index.css      # Global styles & Tailwind directives
├── server/                # Node.js Express Backend
│   ├── models/            # Database Schemas (Project, Contact)
│   ├── index.js           # Core API logic & Notification Service
│   └── .env               # Environment configuration (Private)
└── README.md              # Project documentation
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** (v18 or higher)
- **MongoDB Atlas** account (Free Tier works great)
- **Gmail Account** (with 2-Factor Authentication enabled)

### 2. Installation
Clone the repository and install dependencies for both layers:

```bash
# Clone
git clone https://github.com/PrachiDhiman5/Portfolio.git

# Server Setup
cd server && npm install

# Client Setup
cd ../client && npm install
```

### 3. Environment Configuration
Create a `.env` file in the `server` directory and populate it with your credentials:

```env
PORT=5000
MONGODB_URI=mongodb+srv://<USER>:<PASSWORD>@yourcluster.mongodb.net/portfolio
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_16_digit_app_password
```

### 4. Database Setup (MongoDB Atlas)
1.  Log in to [MongoDB Atlas](https://www.mongodb.com/).
2.  Create a new Cluster and a Database User.
3.  In **Network Access**, whitelist your IP or allow access from anywhere (`0.0.0.0/0`).
4.  Get your **Connection String** and replace `<password>` with your user password.

### 5. Email Setup (Gmail App Password)
1.  Go to your [Google Account Settings](https://myaccount.google.com/).
2.  Enable **2-Step Verification**.
3.  Search for **"App Passwords"** in the search bar.
4.  Create a new app called "Portfolio" and copy the **16-character code**.
5.  Use this code as `EMAIL_PASS` in your `.env`.

---

## 🖥️ Usage

Run the project locally:

```bash
# Terminal 1: Backend
cd server
npm run dev

# Terminal 2: Frontend
cd client
npm run dev
```

The application will be accessible at `http://localhost:5173`.

---

## 🤝 Reach Out

- **Email**: [prachidhiman362@gmail.com](mailto:prachidhiman362@gmail.com)
- **WhatsApp**: [+91 90344 61378](https://wa.me/919034461378)
- **LinkedIn**: [Prachi Dhiman](https://www.linkedin.com/in/prachi-dhiman05/)
- **GitHub**: [@PrachiDhiman5](https://github.com/PrachiDhiman5)

---

## 📄 License
This project is licensed under the **ISC License**.
