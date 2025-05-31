import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section className="contact" id="contact" data-aos="fade-up">
      <h2>Let's Connect</h2>
      <div className="socials">
        <a href="mailto:athulkrishna82812@example.com"><i className="fas fa-envelope"></i></a>
        <a href="https://github.com/yourusername"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/athul-krishna04"><i className="fab fa-linkedin"></i></a>
      </div>
    </section>
  );
}

export default Contact;
