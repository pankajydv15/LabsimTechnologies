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

      <div className="flex flex-col items-center  dark:text-white">
        <h1 className="text-3xl text-green-700 mt-8 dark:text-white font-semibold font-serif">
          Labsim Technologies Private Limited
          <hr className="dark:border-gray-100 border-gray-900 sm:mx-auto lg:my-4" />
        </h1>

        <div className="flex flex-col items-center bg-gray-800 p-14 m-8 rounded-full dark:text-white">
          <div className="flex flex-col lg:flex-row ">
            {/* Text Section */}
            <div className="w-full lg:w-1/2 border border-green-600 rounded-full p-14 mb-8 lg:mb-0 flex flex-col items-center text-center">
              <h1 className="text-3xl font-semibold font-serif py-8">
                Experts in <span className="text-green-600">Automotive</span> &{" "}
                <span className="text-green-600">Customized</span> Simulator
                Development
              </h1>
              <p className="dark:text-white pb-8">
                Labsim Technologies Private Ltd. is the technical leader for
                design & development of automotive simulators, customized
                simulators, software development & technical consultants for any
                type of simulator development. Labsim Technologies Pvt. Ltd. is
                headquartered in Delhi with a dedicated team for hardware &
                software development, Production, R & D lab, and service
                management team.
              </p>
            </div>

            {/* Image Section */}
            <div className="flex flex-col items-center lg:items-end">
              <img
                src={pic1}
                className="w-auto h-48 flex md:w-64 md:h-64 lg:w-auto lg:h-96 mt-8 lg:ml-72 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      <Details />
    </section>
  );
}

export default About;
