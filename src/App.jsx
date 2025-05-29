import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { gsap } from "gsap";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./index.css";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    // Page transition animation
    gsap.fromTo(
      ".page",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );

    // Mobile menu animation
    if (menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { x: "100%", opacity: 0 },
        {
          x: isMenuOpen ? "0%" : "100%",
          opacity: isMenuOpen ? 1 : 0,
          duration: 0.5,
          ease: "power2.out",
        }
      );
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-gray-200 font-mono">
        {/* Navigation */}
        <header className="fixed top-0 w-full bg-gray-800 shadow-lg z-10">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl text-orange-400">Naqash Amjad</h1>
            {/* Hamburger Button */}
            <button
              className="md:hidden text-gray-300 hover:text-orange-400 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                />
              </svg>
            </button>
            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-4">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Skills", path: "/skills" },
                { name: "Education", path: "/education" },
                { name: "Projects", path: "/projects" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-orange-400 transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* Mobile Menu */}
          <div
            ref={menuRef}
            className={`md:hidden bg-gray-800 absolute top-16 left-0 w-full flex flex-col items-center space-y-4 py-4 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Skills", path: "/skills" },
              { name: "Education", path: "/education" },
              { name: "Projects", path: "/projects" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-300 hover:text-orange-400 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </header>

        {/* Page Content */}
        <div className="pt-16 page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
