// import React from "react";
import design from "../../assets/Design.png";

function Design() {
  return (
    <section className="bg-white dark:bg-custom-gradient-reverse transition-colors duration-300">
      <div className="flex flex-col lg:flex-row items-center p-8">
        <div className="w-full lg:w-1/2  mb-6 lg:mb-0 lg:mr-6">
          <img src={design} alt="Design" className="w- rounded-xl" />
        </div>

        <div className="w-full lg:w-1/2 text-left space-y-4">
          <h1 className="text-3xl md:text-4xl font-mono text-white font-semibold">
            Get in Touch for Your <br />
            <span className="text-green-500">Simulation Needs!</span>
          </h1>
          <p className="text-justify text-white text-base md:text-lg leading-relaxed">
            At Labsim, we specialize in delivering cutting-edge simulator
            solutions tailored to your specific needs. Whether you&apos;re looking
            for customized simulation systems or expert support, our team is
            here to help you every step of the way. Reach out today, and let&apos;s
            explore how our simulators can elevate your training and development
            programs.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Design;
