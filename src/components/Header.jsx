import React, { useEffect } from 'react';
import '../styles/Header.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaDownload } from 'react-icons/fa';
import { ReactTyped as Typed } from 'react-typed';

function Header() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <header
      className="header"
      style={{
        background: `url(${process.env.PUBLIC_URL}/assets/images/portfoliobackground.jpg) center/cover no-repeat`,
        backgroundColor: "#333",
      }}
    >
      <div className="overlay"></div>
      <nav className="navbar">
        <div className="logo-container">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
            alt="Athul Krishna Logo"
            className="logo-img"
          />
          <h2 className="logo-text">Athul Krishna</h2>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a
              href={process.env.PUBLIC_URL + "/assets/docs/Athul_Krishna_cv.pdf"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="header-content" data-aos="fade-up">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Athul Krishna</span>
        </h1>

        <div className="hero-subtitle-container">
          <Typed
            className="hero-subtitle"
            strings={[
              'Full Stack Developer',
              'MCA Student',
              'Tech Enthusiast',
              'Problem Solver',
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />

          <a
            href={process.env.PUBLIC_URL + "/assets/docs/Athul_Krishna_cv.pdf"}
            download
            className="resume-btn"
          >
            <FaDownload /> Download Resume
          </a>
        </div>
      </div>

      <div className="scroll-indicator" data-aos="fade-up">
        <span>Scroll Down</span>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
