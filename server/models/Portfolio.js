const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  institution: { type: String, default: '' },
  technology: { type: String, default: '' }
}, { _id: false });

const portfolioSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: String,
  welcomeText: String,
  introduction: String,
  aboutParagraphs: [String],
  education: [itemSchema],
  technicalSkills: [itemSchema],
  professionalSkills: [itemSchema],
  interests: [itemSchema],
  internships: [itemSchema],
  projects: [itemSchema],
  contact: {
    email: String,
    phone: String,
    location: String
  },
  footer: String
}, { timestamps: true });

module.exports = mongoose.model('Portfolio', portfolioSchema);
