import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="home-section">
      <div className="home-content">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg mb-8">
          Hello! I'm Chard Odhiambo, a passionate engineer specializing in Telecommunications, IoT, and Software Development. 
          I focus on creating innovative solutions that blend hardware and software.
        </p>
        <Link 
          to="/about#about" 
          className="btn-primary bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
        >
          Learn More About Me
        </Link>
      </div>
      <div className="home-image">
        <img 
          src={`${process.env.PUBLIC_URL}/images/chard.jpg`} 
          alt="Chard Odhiambo" 
          className="rounded-full border-4 border-blue-400 shadow-xl"
        />
      </div>
    </div>
  );
};

export default Home;