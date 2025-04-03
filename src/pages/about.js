import React from 'react';
import '../styles/about.css'; // Importing the CSS file

const About = () => {
  return (
    <div id="about" className="about-section">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I am a Telecommunications Engineer with a passion for innovative solutions. 
          My expertise lies in combining hardware and software to create efficient systems. 
          I am experienced in antenna design, IoT development, and machine learning.
        </p>
        <p>
          My goal is to continually grow in my field and contribute to impactful projects that advance technology.
        </p>
      </div>
      <div className="about-image">
        <img src={`${process.env.PUBLIC_URL}/images/at_KBC.jpg`} alt="Chard Odhiambo" />
      </div>
    </div>
  );
};

export default About;
