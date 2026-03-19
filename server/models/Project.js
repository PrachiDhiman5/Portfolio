const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    techStack: [String],
    githubLink: String,
    liveLink: String,
    category: String, // e.g., 'Full-stack', 'ML', 'Android'
    image: String
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);
