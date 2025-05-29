import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl text-orange-400 mb-8">// Skills</h2>
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
  );
};

export default Skills;