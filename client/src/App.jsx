import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, NavLink, Route, Routes } from 'react-router-dom';

const API_URL = '/api/portfolio';

function Footer({ data }) {
  return <footer><p>{data?.footer || '© 2026 Fathima Hashim. All Rights Reserved.'}</p></footer>;
}

function Header({ name }) {
  return (
    <header>
      <nav>
        <h2>{name || 'Fathima Hashim'}</h2>
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

function Home({ data }) {
  return (
    <section className="home">
      <div className="home-content">
        <p className="welcome">{data.welcomeText}</p>
        <h1>Hi, I'm <span>{data.name}</span></h1>
        <h3>{data.role}</h3>
        <p>{data.introduction}</p>
        <Link to="/about" className="btn">Know More</Link>
        <Link to="/contact" className="btn second-btn">Contact Me</Link>
      </div>
    </section>
  );
}

function ItemCards({ items, className = 'skill-box' }) {
  return (
    <div className={className === 'project-card' ? 'project-container' : 'skill-container'}>
      {(items || []).map((item, index) => (
        <article className={className} key={`${item.title}-${index}`}>
          <h3>{item.title}</h3>
          {item.institution && <p>{item.institution}</p>}
          {item.description && <p>{item.description}</p>}
          {item.technology && <p><strong>Technology:</strong> {item.technology}</p>}
        </article>
      ))}
    </div>
  );
}

function About({ data }) {
  return (
    <>
      <section className="about">
        <div className="about-content">
          <p className="section-title">ABOUT ME</p>
          <h1>I'm {data.name}</h1>
          {(data.aboutParagraphs || []).map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
        <div className="education">
          <h2>Education</h2>
          {(data.education || []).map((item, index) => (
            <div className="education-box" key={`${item.title}-${index}`}>
              <h3>{item.title}</h3><p>{item.institution}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="skills">
        <h2>Technical Skills</h2>
        <ItemCards items={data.technicalSkills} />
      </section>
      <section className="skills">
        <h2>Professional Skills</h2>
        <ItemCards items={data.professionalSkills} />
      </section>
      <section className="skills">
        <h2>Areas of Interest</h2>
        <ItemCards items={data.interests} />
      </section>
      <section className="projects">
        <h2>Internship Experience</h2>
        <ItemCards items={data.internships} className="project-card" />
      </section>
      <section className="projects">
        <h2>My Projects</h2>
        <ItemCards items={data.projects} className="project-card" />
      </section>
    </>
  );
}

function Contact({ data }) {
  return (
    <section className="contact">
      <div className="contact-intro">
        <p className="section-title">CONTACT ME</p>
        <h1>Let's Connect</h1>
        <p>If you would like to get in touch with me, feel free to contact me using the details below.</p>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-box"><h3>Email</h3><p>{data.contact?.email}</p></div>
          <div className="contact-box"><h3>Phone</h3><p>{data.contact?.phone}</p></div>
          <div className="contact-box"><h3>Location</h3><p>{data.contact?.location}</p></div>
        </div>
        <div className="contact-note">
          <h3>Get in touch</h3>
          <p>Use the contact details to reach me. The original HTML form was only visual and did not submit messages to a server.</p>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(API_URL)
      .then(response => setPortfolio(response.data))
      .catch(err => setError(err.response?.data?.message || 'Unable to load portfolio. Check that the backend and MongoDB are running.'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <main className="status-message">Loading portfolio...</main>;
  if (error) return <main className="status-message error-message">{error}</main>;
  if (!portfolio) return <main className="status-message">Portfolio data is empty.</main>;

  return (
    <>
      <Header name={portfolio.name} />
      <Routes>
        <Route path="/" element={<Home data={portfolio} />} />
        <Route path="/about" element={<About data={portfolio} />} />
        <Route path="/contact" element={<Contact data={portfolio} />} />
        <Route path="*" element={<Home data={portfolio} />} />
      </Routes>
      <Footer data={portfolio} />
    </>
  );
}
