require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const cors = require('cors');
const axios = require('axios');

console.log('✅ Deepthi Server JS loaded');

const app = express();
const PORT = process.env.PORT || 5000;

/* ------------------ MongoDB ------------------ */
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/deepthiDB';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ Connected to MongoDB:', mongoURI))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

/* ------------------ Mongoose Schema ------------------ */
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});
const Contact = mongoose.model('Contact', contactSchema);

/* ------------------ Middleware ------------------ */
app.use(cors({ origin: 'http://localhost:5173', methods: ['POST', 'GET'] }));
app.use(express.json());

/* ------------------ Nodemailer Setup ------------------ */
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/* ------------------ Email Route ------------------ */
app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    console.log('❌ Missing required fields');
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    console.log('➡️ Attempting to save contact in MongoDB...');
    const savedContact = await Contact.create({ name, email, subject, message });
    console.log('✅ Contact saved:', savedContact);

    const adminMail = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage:\n${message}`,
    };

    const userMail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Deepthi Labels!',
      text: `Hi ${name},\n\nThank you for contacting Deepthi Labels.\nWe have received your message and will respond soon.\n\nSubject: ${subject}\nMessage:\n${message}\n\nRegards,\nDeepthi Labels`,
    };

    await transporter.sendMail(adminMail);
    await transporter.sendMail(userMail);

    res.status(200).json({ message: '✅ Emails sent and query stored successfully' });
  } catch (err) {
    console.error('❌ Error during /send-email:', err);
    res.status(500).json({ error: 'Server error while sending/storing email' });
  }
});

/* ------------------ GROQ Chatbot Endpoint ------------------ */
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_API_KEY = process.env.GROQ_API_KEY;

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const groqRes = await axios.post(
      GROQ_API_URL,
      {
        model: "llama3-8b-8192",
        messages: [{ role: "user", content: message }]
      },
      {
        headers: {
          'Authorization': `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const chatReply = groqRes.data.choices[0].message.content;
    res.json({ reply: chatReply });
  } catch (err) {
    console.error('❌ GROQ API error:', err.response?.data || err.message);
    res.status(500).json({ error: "Chatbot service unavailable" });
  }
});

/* ------------------ Health Check ------------------ */
app.get('/', (_, res) => res.send('✅ Deepthi Labels backend is running'));

/* ------------------ Start Server ------------------ */
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
