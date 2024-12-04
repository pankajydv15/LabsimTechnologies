import React, { useEffect, useRef } from "react";
import pic from "./pic2.jpeg";
import "./HmvDeatils.css"; // CSS file for animations

function HmvDetails() {
  const fadeInRefs = useRef([]);

  useEffect(() => {
    const options = {
      threshold: 0.1, // Element becomes visible when 10% is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-visible");
        }
      });
    }, options);

    fadeInRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      fadeInRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="bg-custom-gradient-reverse transition-colors duration-300">
      <div className="max-w-6xl mx-auto p-8">
        {/* Header Section */}
        <div
          className="flex justify-center text-green-500 fade-in"
          ref={(el) => fadeInRefs.current.push(el)}
        >
          <h1 className="text-6xl font-serif p-4 text-center">
            Heavy Motor Vehicle
            <hr className="dark:border-gray-100 border-gray-900 sm:mx-auto lg:my-4" />
          </h1>
        </div>

        {/* Intro Section */}
        <div
          className="text-gray-200 text-xl fade-in"
          ref={(el) => fadeInRefs.current.push(el)}
        >
          <p className="bg-gradient-to-r from-gray-800 to-black p-6 m-4 rounded-xl shadow-lg">
            Labsim is a forward-thinking technology company dedicated to
            crafting immersive and interactive digital experiences. With
            expertise in developing advanced simulators for industries like
            automotive, aviation, and heavy machinery, as well as AR (Augmented
            Reality) and VR (Virtual Reality) applications, we aim to redefine
            the boundaries of technology.
          </p>
        </div>

        {/* Content Section */}
        <div
          className="bg-gradient-to-r from-gray-800 to-black p-6 m-4 rounded-xl shadow-lg flex flex-col md:flex-row items-center fade-in"
          ref={(el) => fadeInRefs.current.push(el)}
        >
          {/* Text Content */}
          <div className="md:w-2/3">
            <p className="text-lg leading-relaxed text-gray-300">
              Our flagship innovation, the HMV Simulator, is a revolutionary
              solution designed to replicate real-world operations with
              precision and realism. This simulator ensures reliability,
              security, and adaptability, offering tailored solutions for
              diverse client needs. Whether for training, marketing, or
              testing, the HMV Simulator provides an unparalleled platform to
              experience real-world scenarios in a virtual environment.
              <br />
              <br />
              At Labsim, we specialize in creating dynamic and engaging
              digital content, from real-time rendered simulations to
              interactive experiences. Our solutions integrate seamlessly
              across platforms, ensuring maximum accessibility and
              efficiency. We also assist clients in planning strategic
              distribution approaches to enhance the reach and impact of their
              content.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/3 flex justify-center items-center p-4">
            <img
              src={pic}
              alt="Heavy Motor Vehicle Simulator"
              className="rounded-lg shadow-md max-w-full h-auto"
            />
          </div>
        </div>

        {/* Conclusion Section */}
        <p
          className="p-6 bg-gradient-to-r from-gray-800 to-black m-4 rounded-xl text-white shadow-lg fade-in"
          ref={(el) => fadeInRefs.current.push(el)}
        >
          We pride ourselves on delivering innovative solutions that meet
          modern-day demands while pushing the envelope of what’s possible.
          The HMV Simulator exemplifies our commitment to innovation,
          enabling clients to explore new possibilities with high precision,
          scalability, and an unmatched immersive experience.
        </p>
      </div>
    </section>
  );
}

export default HmvDetails;
