import React from "react";
import pic from "../../assets/AboutUs.jpg";
import pic1 from "../../assets/pic1.jpeg";
import Details from "./Deatils";

function About() {
  return (
    <section className="bg-white dark:bg-custom-gradient transition-colors duration-300 ">
      <div className="flex flex-col items-center">
        <div className="flex justify-center w-full h-[50vh] object-cover">
          <img
            src={pic}
            className="w-full h-[50vh] object-cover opacity-45"
            alt="About Us"
          />
        </div>
        <div className="flex justify-center">
          <span className="bg-green-700 -translate-y-7 text-white dark:bg-green-700 p-1 text-4xl md:text-5xl font-serif font-semibold rounded-lg">
            About Us
          </span>
        </div>
      </div>

      {/* main */}

      <div className="py-16 px-6 lg:px-20">
        {/* Introduction Section */}
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text- font-serif lg:text-5xl font-bold text-green-500  mb-4">
            Labsim Technologies
            <hr className="dark:border-gray-100 border-gray-900 sm:mx-auto lg:my-4" />
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            At Labsim Technologies, we are committed to pushing the boundaries
            of simulation technology, delivering unparalleled innovation, and
            tailoring solutions that meet the unique demands of our clients.
          </p>
        </div>

        {/* Content Section: Image + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <img
              src={pic1}
              alt="Labsim Simulator"
              className="rounded-3xl shadow-lg transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -top-4 -left-4 w-full h-full bg-green-500/10 rounded-3xl blur-lg"></div>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold text-green-700 dark:text-green-400 mb-6">
              Experts in Simulation Technology
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Labsim Technologies Private Limited specializes in automotive
              simulators, customized solutions, and advanced software. With over
              40 simulators designed and deployed across India, we bring
              unparalleled expertise and innovation to the simulation industry.
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
              <li>Headquarters in Delhi with advanced R&D facilities.</li>
              <li>
                Dedicated teams for hardware, software, and service management.
              </li>
              <li>Comprehensive solutions tailored to your needs.</li>
            </ul>
          </div>
        </div>

        {/* Grid Section: Why Labsim */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold font-serif text-center text-green-500  mb-12">
            Why Choose Labsim Technologies?
            <hr className="border-gray-200 w-3/5  sm:mx-auto lg:my-4" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-b from-gray-900 to-black rounded-3xl shadow-md p-8 text-center">
              <div className="text-green-500 text-4xl mb-4">🚀</div>
              <h3 className="text-xl text-green-500 font-semibold mb-4">
                Innovation at its Best
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We integrate cutting-edge tools and platforms to create
                simulators that deliver real-life experiences.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-gradient-to-b from-gray-900 to-black rounded-3xl shadow-md p-8 text-center">
              <div className="text-green-500 text-4xl mb-4">🤝</div>
              <h3 className="text-xl text-green-500 font-semibold mb-4">
                Tailored 
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Each project is customized to ensure client satisfaction and
                precise implementation.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-gradient-to-b from-gray-900 to-black rounded-3xl shadow-md p-8 text-center">
              <div className="text-green-700 dark:text-green-400 text-4xl mb-4">
                🌍
              </div>
              <h3 className="text-xl text-green-500 font-semibold mb-4">
                Global Expertise
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                With a team of seasoned engineers, Labsim delivers globally
                competitive solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Call-to-Action Section */}
      </div>
      <Details />
    </section>
  );
}

export default About;
