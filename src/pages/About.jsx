import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl text-orange-400 mb-8">// About Me</h2>
        <p className="text-gray-300">
          <span className="text-blue-400">const</span> aboutMe = {"{"}
          <br />
            summary:{" "}
          <span className="text-yellow-400">
            "Motivated and detail-oriented MERN Stack Developer with a strong
            foundation in JavaScript technologies, web development, and IoT
            solutions."
          </span>
          ,
          <br />
            focus:{" "}
          <span className="text-yellow-400">
            "Building scalable, responsive, and user-friendly web applications."
          </span>
          ,
          <br />
            passion:{" "}
          <span className="text-yellow-400">
            "Continuous learning and exploring cutting-edge technologies."
          </span>
          <br />
          {"}"};
        </p>
      </div>
    </section>
  );
};

export default About;
