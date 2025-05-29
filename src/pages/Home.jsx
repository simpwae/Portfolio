import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Home = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
    );
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: 'power2.out', delay: 0.3 }
    );
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto text-center">
        <img
          ref={imageRef}
          src="/images/profile.webp" // Replace with your image path or URL
          alt="Naqash Amjad"
          className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto mb-6 border-4 border-orange-400 object-cover filter drop-shadow-lg"
        />
        <h2 className="text-4xl md:text-5xl text-orange-400 mb-4">MERN Stack Developer</h2>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          <span className="text-blue-400">const</span> welcome = {'{'}
          <br />
            name: <span className="text-yellow-400">"Naqash Amjad"</span>,
          <br />
            passion: <span className="text-yellow-400">"Building scalable web apps with MERN"</span>,
          <br />
            goal: <span className="text-yellow-400">"Explore cutting-edge tech"</span>
          <br />
          {'}'};
        </p>
        <a href="/contact" className="inline-block bg-orange-400 text-gray-900 px-6 py-2 rounded hover:bg-orange-500 transition">
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Home;