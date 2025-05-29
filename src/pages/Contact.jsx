import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl text-orange-400 mb-8">// Contact</h2>
        <p className="text-gray-300 mb-4">
          <span className="text-blue-400">email:</span>{" "}
          <a
            href="mailto:naqashamjad777@gmail.com"
            className="text-yellow-400 hover:text-orange-400 transition"
          >
            naqashamjad777@gmail.com
          </a>
        </p>
        <p className="text-gray-300 mb-4">
          <span className="text-blue-400">phone:</span>{" "}
          <a
            href="tel:+923055696677"
            className="text-yellow-400 hover:text-orange-400 transition"
          >
            +92 3055696677
          </a>
        </p>
        <p className="text-gray-300 mb-4">
          <span className="text-blue-400">location:</span>{" "}
          <span className="text-yellow-400">Peshawar, Pakistan</span>
        </p>
        <p className="text-gray-300">
          <span className="text-blue-400">linkedin:</span>{" "}
          <a
            href="https://www.linkedin.com/in/naqash-amjad-889248251/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-orange-400 transition"
          >
            linkedin.com/in/naqash-amjad
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
