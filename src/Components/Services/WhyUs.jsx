// import React from 'react';
import { FaCheckCircle, FaUserTie, FaCogs, FaRocket, FaHandsHelping, FaTrophy } from 'react-icons/fa';

const sections = [
  {
    id: 1,
    icon: <FaCheckCircle />,
    title: "Exceptional Quality",
    description: "At Labsim, we prioritize delivering top-notch products and services. Every project undergoes rigorous testing and refinement to ensure the highest level of quality."
  },
  {
    id: 2,
    icon: <FaUserTie />,
    title: "Experienced Team",
    description: "Our team consists of industry professionals with extensive experience. Their expertise allows us to tackle any challenge with confidence, ensuring smooth project execution."
  },
  {
    id: 3,
    icon: <FaCogs />,
    title: "Tailored Solutions",
    description: "We offer customized solutions tailored to meet specific requirements, ensuring you get exactly what you're looking for."
  },
  {
    id: 4,
    icon: <FaRocket />,
    title: "Cutting-edge Technology",
    description: "We stay ahead of the curve by using the latest technologies. From modern frameworks to advanced development techniques, we ensure innovative, future-proof solutions."
  },
  {
    id: 5,
    icon: <FaHandsHelping />,
    title: "Customer-Centric Approach",
    description: "At the heart of everything we do is our dedication to customer satisfaction. We work closely with clients to ensure their vision is brought to life exactly as imagined."
  },
  {
    id: 6,
    icon: <FaTrophy />,
    title: "Proven Results",
    description: "We have a proven track record of delivering successful projects across various industries. Our portfolio speaks for itself, showcasing results that drive success."
  }
];

const WhyUs = () => {
  return (
    <section className="bg-white dark:bg-custom-gradient transition-colors duration-300 ">
    <section className="py-16 text-center">
      <h2 className="text-4xl font-serif font-bold text-green-500 mb-12">Why Choose Us

      <hr className="dark:border-gray-100 border-gray-900 sm:mx-auto lg:my-10 w-1/2" />
      </h2>
      
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3 px-6">
        {sections.map((section) => (
          <div key={section.id} className="bg-gray-800 shadow-lg rounded-lg p-8 hover:scale-105 transform transition duration-300">
            <div className="text-5xl flex justify-center text-red-500 mb-4">
              {section.icon}
            </div>
            <h3 className="text-2xl font-semibold text-green-500 mb-2">{section.title}</h3>
            <p className="text-white text-balance leading-relaxed">{section.description}</p>
          </div>
        ))}
      </div>
    </section>
    </section>
  );
};

export default WhyUs;
