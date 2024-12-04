import React, { useEffect, useRef } from 'react';
import Hmvv from './HMV.png';
import { RiCpuLine, RiRocketLine } from 'react-icons/ri'; // Remix Icons
import { BiExpand } from 'react-icons/bi'; // BoxIcons
import { AiOutlineTool } from 'react-icons/ai'; // Ant Design
import HmvDeatils from './HmvDeatils';
import './HmvDeatils.css'; // Import CSS file for animations

function Hmv() {
  const fadeInRefs = useRef([]);

  useEffect(() => {
    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
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
    <section className="bg-white dark:bg-custom-gradient transition-colors duration-300">
      <div className="p-8 gap-20 items-center lg:grid lg:grid-cols-2 lg:px-6">
        {/* Image Section */}
        <div className="flex justify-center relative bg-gradient-to-l from-gray-800 to-black p-4 rounded-xl mb-8 lg:mb-0 shadow-3xl">
          <img
            src={Hmvv}
            alt="3D Effect"
            className="relative w-auto h-auto rounded-lg shadow-3xl"
          />
          <div className="absolute inset-0 blur-lg bg-gradient-to-br from-black/40 to-gray-700/20 rounded-xl z-[-1]"></div>
        </div>

        {/* Feature List */}
        <div className="p-8 font-serif text-3xl">
          <div
            className="bg-gradient-to-l from-customTeal to-black p-8 rounded-full m-2 flex items-center gap-4 fade-in"
            ref={(el) => fadeInRefs.current.push(el)}
          >
            <RiCpuLine className="text-red-500" size={40} />
            <p className="text-green-500">Advanced Technology</p>
          </div>

          <div
            className="bg-gradient-to-l from-customTeal to-black p-8 rounded-full m-2 flex items-center gap-4 fade-in"
            ref={(el) => fadeInRefs.current.push(el)}
          >
            <BiExpand className="text-red-500" size={40} />
            <p className="text-green-500">Scalability</p>
          </div>

          <div
            className="bg-gradient-to-l from-customTeal to-black p-8 rounded-full m-2 flex items-center gap-4 fade-in"
            ref={(el) => fadeInRefs.current.push(el)}
          >
            <AiOutlineTool className="text-red-500" size={40} />
            <p className="text-green-500">Customization</p>
          </div>

          <div
            className="bg-gradient-to-l from-customTeal to-black p-8 rounded-full m-2 flex items-center gap-4 fade-in"
            ref={(el) => fadeInRefs.current.push(el)}
          >
            <RiRocketLine className="text-red-500" size={40} />
            <p className="text-green-500">Faster</p>
          </div>
        </div>
      </div>

      <HmvDeatils />
    </section>
  );
}

export default Hmv;
