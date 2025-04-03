import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/skills";
import Experience from "./pages/experience";
import Education from "./pages/education";
import Certifications from "./pages/certifications";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Footer from "./pages/footer"; // Import Footer component
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen font-sans">
        <nav className="p-4 flex justify-center items-center shadow-md bg-gray-800 fixed w-full top-0 z-50">
          <h1 className="text-2xl font-extrabold text-blue-400">Chard Odhiambo</h1>
          <ul className="flex space-x-6 text-lg">
            <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-400 transition">About</Link></li>
            <li><Link to="/skills" className="hover:text-blue-400 transition">Skills</Link></li>
            <li><Link to="/experience" className="hover:text-blue-400 transition">Experience</Link></li>
            <li><Link to="/education" className="hover:text-blue-400 transition">Education</Link></li>
            <li><Link to="/certifications" className="hover:text-blue-400 transition">Certifications</Link></li>
            <li><Link to="/projects" className="hover:text-blue-400 transition">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
          </ul>
        </nav>
        <div className="mt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer /> {/* Footer component */}
      </div>
    </Router>
  );
};

export default App;
