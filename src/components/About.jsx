import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section className="about" id="about">
      <h2 data-aos="fade-right">About Me</h2>

      <div className="about-content">
        <img
          src={process.env.PUBLIC_URL + "/assets/images/AK.jpg"}
          alt="Athul Krishna"
          className="profile-photo"
          data-aos="fade-left"
        />

        <p data-aos="fade-right">
          Hello! I'm Athul Krishna, an enthusiastic and driven MCA graduate from Kerala, India. I specialize in full-stack web development and have hands-on experience building dynamic, responsive, and secure applications using technologies like React, Spring Boot, Java, Python, SQL, and Bootstrap.
          <br />
          With a strong foundation in computer science and software engineering principles, I’ve built several projects including an online freelance marketplace (TalentHive), which features real-time messaging, role-based dashboards, secure payment integration, and modern UI/UX.
          <br />
          Beyond technical skills, I’m deeply interested in exploring cloud technologies, DevOps, and data analytics. I'm also a quick learner who enjoys solving problems, debugging code, and turning ideas into working solutions.
          <br />
          In addition to coding, I enjoy reading, learning about new tech trends, and collaborating with like-minded peers on innovative solutions.
          <br />
          I'm currently looking for opportunities to contribute to impactful tech projects, intern or work with forward-thinking teams, and continue growing as a software developer.
          <br />
          Let’s connect and build something awesome together!
        </p>
      </div>
    </section>
  );
}

export default About;
