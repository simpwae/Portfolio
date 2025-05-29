import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../index.css';

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-mono">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-800 shadow-lg z-10">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl text-green-400">Naqash Amjad</h1>
          <ul className="flex space-x-4">
            {['About', 'Skills', 'Education', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-green-400 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 pt-16" ref={(el) => (sectionsRef.current[0] = el)}>
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl text-green-400 mb-4">MERN Stack Developer</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            <span className="text-blue-400">const</span> aboutMe = {'{'}
            <br />
            &nbsp;&nbsp;motivated: <span className="text-yellow-400">"Detail-oriented MERN Stack Developer"</span>,
            <br />
            &nbsp;&nbsp;passion: <span className="text-yellow-400">"Building scalable, responsive web applications"</span>,
            <br />
            &nbsp;&nbsp;location: <span className="text-yellow-400">"Peshawar, Pakistan"</span>
            <br />
            {'}'};
          </p>
          <a href="#contact" className="inline-block bg-green-400 text-gray-900 px-6 py-2 rounded hover:bg-green-500 transition">
            Contact Me
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4" ref={(el) => (sectionsRef.current[1] = el)}>
        <div className="container mx-auto">
          <h2 className="text-3xl text-green-400 mb-8">// Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl text-blue-400 mb-4">Web Development</h3>
              <ul className="list-disc list-inside text-gray-300">
                <li>Proficient in HTML5, CSS3, JavaScript, React, Node.js, Express.js, MongoDB</li>
                <li>Responsive web design, accessibility, UI/UX best practices</li>
                <li>Git, REST APIs, Vercel/Netlify deployment</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl text-blue-400 mb-4">IoT Development</h3>
              <ul className="list-disc list-inside text-gray-300">
                <li>Experience with Arduino, Raspberry Pi</li>
                <li>Wireless communication: Wi-Fi, Bluetooth</li>
              </ul>
              <h3 className="text-xl text-blue-400 mt-6 mb-4">Tools & Platforms</h3>
              <ul className="list-disc list-inside text-gray-300">
                <li>VS Code, GitHub, Firebase, Postman, MongoDB Atlas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 bg-gray-800" ref={(el) => (sectionsRef.current[2] = el)}>
        <div className="container mx-auto">
          <h2 className="text-3xl text-green-400 mb-8">// Education</h2>
          <div className="text-gray-300Y">
            <h3 className="text-xl text-blue-400">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-300">Agriculture University of Peshawar, Pakistan (2020 – 2024)</p>
            <p className="text-gray-300">Coursework: Data Structures, Algorithms, Networks, Database Systems</p>
            <p className="text-gray-300">Specialization: MERN Stack Development, Web Development, IoT</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4" ref={(el) => (sectionsRef.current[3] = el)}>
        <div className="container mx-auto">
          <h2 className="text-3xl text-green-400 mb-8">// Projects</h2>
          <div className="text-gray-300">
            <h3 className="text-xl text-blue-400">TransPak Import Services</h3>
            <p>A web application built with JavaScript, React, Firebase, and Material UI</p>
            <p>Final Year Project (2024)</p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 px-4 bg-gray-800" ref={(el) => (sectionsRef.current[4] = el)}>
        <div className="container mx-auto">
          <h2 className="text-3xl text-green-400 mb-8">// Certifications</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>MERN Stack Web Development – SMIT, Peshawar (2023 – Present)</li>
            <li>IoT Development – Islamia College, Peshawar (2022 – 2023)</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4" ref={(el) => (sectionsRef.current[5] = el)}>
        <div className="container mx-auto text-center">
          <h2 className="text-3xl text-green-400 mb-8">// Contact</h2>
          <p className="text-gray-300 mb-4">
            <span className="text-blue-400">email:</span> <span className="text-yellow-400">naqashamjad777@gmail.com</span>
          </p>
          <p className="text-gray-300 mb-4">
            <span className="text-blue-400">phone:</span> <span className="text-yellow-400">+92 3055696677</span>
          </p>
          <p className="text-gray-300">
            <span className="text-blue-400">location:</span> <span className="text-yellow-400">Peshawar, Pakistan</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;