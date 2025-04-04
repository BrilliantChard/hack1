import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FiMenu, FiX } from 'react-icons/fi';
import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/skills";
import Experience from "./pages/experience";
import Education from "./pages/education";
import Certifications from "./pages/certifications";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Footer from "./pages/footer";
import './styles/global.css';

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen font-sans flex flex-col">
        {/* Navigation */}
        <nav className="fixed w-full top-0 z-50 bg-gray-800 shadow-md">
          <div className="container mx-auto px-4 py-3">
            {/* Name Header */}
            <div className="flex justify-center mb-3">
              <h1 className="text-2xl font-extrabold text-blue-400 hover:text-blue-300 transition-colors">
                <Link to="/">Chard Odhiambo</Link>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <ul className="flex justify-center space-x-6 text-lg">
                <NavLink to="/" text="Home" />
                <NavLink to="/about" text="About" />
                <NavLink to="/skills" text="Skills" />
                <NavLink to="/experience" text="Experience" />
                <NavLink to="/education" text="Education" />
                <NavLink to="/certifications" text="Certifications" />
                <NavLink to="/projects" text="Projects" />
                <NavLink to="/contact" text="Contact" />
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex justify-end">
              <button
                className="text-white hover:text-blue-400 focus:outline-none transition-colors p-2"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-gray-700">
              <ul className="flex flex-col py-2 px-4 space-y-2">
                <MobileNavLink to="/" text="Home" onClick={toggleMobileMenu} />
                <MobileNavLink to="/about" text="About" onClick={toggleMobileMenu} />
                <MobileNavLink to="/skills" text="Skills" onClick={toggleMobileMenu} />
                <MobileNavLink to="/experience" text="Experience" onClick={toggleMobileMenu} />
                <MobileNavLink to="/education" text="Education" onClick={toggleMobileMenu} />
                <MobileNavLink to="/certifications" text="Certifications" onClick={toggleMobileMenu} />
                <MobileNavLink to="/projects" text="Projects" onClick={toggleMobileMenu} />
                <MobileNavLink to="/contact" text="Contact" onClick={toggleMobileMenu} />
              </ul>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main className="flex-grow pt-32 pb-10 px-4 md:px-8 container mx-auto">
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
        </main>

        <Footer />
      </div>
    </Router>
  );
};

// Reusable NavLink component for desktop
const NavLink = ({ to, text }) => (
  <li>
    <Link 
      to={to} 
      className="hover:text-blue-400 transition-colors duration-300 py-2 px-3 rounded-md hover:bg-gray-700"
    >
      {text}
    </Link>
  </li>
);

// Reusable NavLink component for mobile
const MobileNavLink = ({ to, text, onClick }) => (
  <li>
    <Link 
      to={to} 
      className="block py-3 px-4 hover:bg-gray-600 rounded-md transition-colors duration-300"
      onClick={onClick}
    >
      {text}
    </Link>
  </li>
);

export default App;
