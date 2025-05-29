import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Education = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center px-4 bg-gray-800"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl text-orange-400 mb-8">// Education</h2>
        <div className="text-gray-300">
          <h3 className="text-xl text-blue-400">
            Bachelor of Science in Computer Science
          </h3>
          <p>Agriculture University of Peshawar, Pakistan (2020 – 2024)</p>
          <p>
            Coursework: Data Structures, Algorithms, Networks, Database Systems
          </p>
          <p>Specialization: MERN Stack Development, Web Development, IoT</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
