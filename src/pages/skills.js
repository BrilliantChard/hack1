import React from 'react';
import '../styles/skills.css';

const Skills = () => (
  <div className="skills-section">
    <h2>Skills & Expertise</h2>
    <div className="skills-list">
      <div className="skill-item">
        <h3>Telecom Engineering</h3>
        <p>
          Experience in designing antennas, signal processing, and wireless communication systems.
          Focused on optimizing network performance and ensuring high data throughput.
        </p>
      </div>
      <div className="skill-item">
        <h3>IoT (ESP32, Smart Farming)</h3>
        <p>
          Skilled in building IoT solutions, particularly in agriculture, using sensors and cloud platforms for automation.
        </p>
      </div>
      <div className="skill-item">
        <h3>Python (Backend, Machine Learning)</h3>
        <p>
          Proficient in Python for backend development (Django, Flask) and machine learning for AI-driven systems.
        </p>
      </div>
      <div className="skill-item">
        <h3>Frontend (React, JavaScript)</h3>
        <p>
          Experienced in building dynamic web apps using React.js, JavaScript, HTML, and CSS.
        </p>
      </div>
    </div>
  </div>
);

export default Skills;
