import React from 'react';
import '../styles/Projects.css';

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 data-aos="fade-up">My Projects</h2>
      <div className="project-grid">
        <div className="project-card" data-aos="fade-right">
          <h3>TalentHive</h3>
          <p>Online freelancer marketplace with chat, payments, and project management.</p>
        </div>
        <div className="project-card" data-aos="fade-left">
          <h3>Portfolio Website</h3>
          <p>This personal site with animations, responsive design, and resume download.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
