import React from 'react';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="home-section">
      <div className="home-content">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hello! I'm Chard Odhiambo, a passionate engineer specializing in Telecommunications, IoT, and Software Development. 
          I focus on creating innovative solutions that blend hardware and software. 
          Explore my projects and work experience to learn more about what I do.
        </p>
        <a href="#about" className="btn-primary">Learn More About Me</a>
      </div>
      <div className="home-image">
        <img src={`${process.env.PUBLIC_URL}/images/chard.jpg`} alt="Chard Odhiambo" />
      </div>
    </div>
  );
};

export default Home;
