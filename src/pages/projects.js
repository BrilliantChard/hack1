import React from 'react';
import '../styles/projects.css';

const Projects = () => (
  <div className="projects-section">
    <div className="projects-content">
      <h2>Projects</h2>
      <div className="project-item">
        <h3>5G Microstrip Patch Antenna Design</h3>
        <p>
          Designed a high-frequency microstrip patch antenna tailored for 5G communication systems, focusing on efficient signal propagation and minimal interference. The design was tested for performance using HFSS simulation software.
        </p>
      </div>
      <div className="project-item">
        <h3>Music Recommendation Algorithm</h3>
        <p>
          Developed an AI-powered system to recommend music based on user preferences and listening history. The algorithm utilized machine learning to predict user tastes and provide personalized playlists.
        </p>
      </div>
      <div className="project-item">
        <h3>Smart Farming IoT System</h3>
        <p>
          Created a smart farming solution using IoT sensors (DHT11, soil moisture) and ESP32. Integrated with ThingSpeak for real-time monitoring, the system helps optimize water usage and soil conditions in smart farms.
        </p>
      </div>
    </div>
  </div>
);

export default Projects;
