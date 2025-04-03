import React from 'react';
import '../styles/about.css';

const About = () => {
  return (
    <div id="about" className="about-section">
      <div className="about-content">
        <h2 className="text-3xl font-bold mb-6 text-blue-400">About Me</h2>
        <div className="space-y-4 mb-8">
          <p className="text-lg">
            I am a Telecommunications Engineer with a passion for innovative solutions. 
            My expertise lies in combining hardware and software to create efficient systems.
          </p>
          <p className="text-lg">
            I am experienced in antenna design, IoT development, and machine learning, with a goal to continually grow in my field 
            and contribute to impactful projects that advance technology.
          </p>
        </div>

        <div className="cv-viewer-container">
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">My CV</h3>
          <div className="mt-4">
            <a 
              href="/CHARD ODHIAMBO CV.pdf" 
              download
              className="inline-block px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Download and View my CV
            </a>
          </div>
        </div>
      </div>
      <div className="about-image">
        <img 
          src={`${process.env.PUBLIC_URL}/images/at_KBC.jpg`} 
          alt="Chard Odhiambo at work" 
          className="rounded-lg shadow-lg border-2 border-gray-700"
        />
      </div>
    </div>
  );
};

export default About;
