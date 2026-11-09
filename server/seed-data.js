require('dotenv').config();
const mongoose = require('mongoose');
const Portfolio = require('./models/Portfolio');

const portfolioData = {
  name: 'Fathima Hashim',
  role: 'Software Application Development Student',
  welcomeText: 'WELCOME TO MY PORTFOLIO',
  introduction: 'I am passionate about technology, programming and creating useful applications. Welcome to my personal portfolio website.',
  aboutParagraphs: [
    'I am a Software Application Development student with a background in Computer Science. I completed my B.Sc Computer Science (UG) at the University of Calicut.',
    'I am interested in web development, software development, programming, database management, and UI/UX design. I enjoy learning new technologies and using my skills to create useful projects.'
  ],
  education: [
    { title: 'B.Sc Computer Science (UG)', institution: 'University of Calicut' },
    { title: 'M.Voc Software Application Development', institution: 'Postgraduate Studies' }
  ],
  technicalSkills: [
    { title: 'HTML & CSS', description: 'Building and styling responsive web pages.' },
    { title: 'JavaScript', description: 'Creating interactive and dynamic website features.' },
    { title: 'Python', description: 'Programming, problem-solving, and application development.' },
    { title: 'Kotlin', description: 'Learning and developing applications using Kotlin.' },
    { title: 'Node.js & Express.js', description: 'Building server-side applications and web APIs.' },
    { title: 'MongoDB & MySQL', description: 'Database management and data storage.' },
    { title: 'Git & GitHub', description: 'Version control and project collaboration.' },
    { title: 'Figma UI/UX Design', description: 'Designing user interfaces and user experiences.' }
  ],
  professionalSkills: [
    { title: 'Problem-Solving', description: 'Analyzing problems and finding effective solutions.' },
    { title: 'Communication', description: 'Communicating ideas clearly and effectively.' },
    { title: 'Teamwork', description: 'Working collaboratively to achieve shared goals.' },
    { title: 'Leadership', description: 'Taking responsibility and supporting team members.' },
    { title: 'Time Management', description: 'Organizing tasks and meeting deadlines.' }
  ],
  interests: [
    { title: 'Web Development', description: 'Creating modern and responsive websites.' },
    { title: 'Software Application Development', description: 'Developing useful software applications.' },
    { title: 'Database Management', description: 'Organizing, storing, and managing data efficiently.' },
    { title: 'UI/UX Design', description: 'Designing user-friendly and attractive interfaces.' }
  ],
  internships: [
    {
      title: 'Python Development Internship',
      description: 'Gaining practical experience in Python programming, improving coding skills, and learning problem-solving through hands-on internship training.',
      technology: 'Python'
    }
  ],
  projects: [
    {
      title: 'Learn With AR',
      description: 'An Augmented Reality based educational project designed to help medical students learn concepts through interactive AR content.',
      technology: 'Augmented Reality'
    }
  ],
  contact: {
    // Check this address and correct it if necessary before using it publicly.
    email: 'fathimahashim005@gmail,cpom',
    phone: '+91 8111958337',
    location: 'Kozhikode, India'
  },
  footer: '© 2026 Fathima Hashim. All Rights Reserved.'
};

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/fathima_portfolio');
    await Portfolio.deleteMany({});
    await Portfolio.create(portfolioData);
    console.log('Portfolio data inserted successfully.');
  } catch (error) {
    console.error('Seeding error:', error.message);
  } finally {
    await mongoose.disconnect();
  }
}

seedDatabase();
