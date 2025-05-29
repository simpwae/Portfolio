import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Projects = () => {
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
        <h2 className="text-3xl text-orange-400 mb-8">// Projects</h2>
        <div className="text-gray-300 space-y-8">
          <div>
            <h3 className="text-xl text-blue-400">TransPak Import Services</h3>
            <p>A web application built with JavaScript, React, Firebase, and Material UI</p>
            <p>Final Year Project (2024)</p>
            <p>
              <span className="text-blue-400">Link:</span>{' '}
              <a
                href="https://final-year-project-ed293.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-orange-400 transition"
              >
                final-year-project-ed293.web.app
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-xl text-blue-400">Restaurant App</h3>
            <p>A responsive web application for restaurant services, built with HTML, CSS, and JavaScript</p>
            <p>Personal Project (2025)</p>
            <p>
              <span className="text-blue-400">Link:</span>{' '}
              <a
                href="https://simpwae.github.io/resturent__boot/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-orange-400 transition"
              >
                simpwae.github.io/resturent__boot
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;