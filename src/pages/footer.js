import React from 'react';
import '../styles/footer.css'; // Import footer styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Contact Me</h3>
        <p>If you'd like to get in touch, feel free to reach out via the information below:</p>
        <div className="contact-info">
          <p>Email: <a href="mailto:chardodhiambo@example.com">chardodhiambo@example.com</a></p>
          <p>Phone: +254 123 456 789</p>
          <p>Location: Nairobi, Kenya</p>
        </div>
        <div className="social-links">
          <a href="https://linkedin.com/in/chardodhiambo" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/chardodhiambo" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        <p>&copy; 2025 Chard Odhiambo. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
