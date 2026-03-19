const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
    sender: { type: String, enum: ['user', 'bot'], required: true },
    message: { type: String, required: true },
    isLead: { type: Boolean, default: false },
    timestamp: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Chat', ChatSchema);
