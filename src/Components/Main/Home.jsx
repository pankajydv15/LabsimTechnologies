// import React from "react";
import Simulator from "../../assets/Simulator.jpg";
import Products from "./Products";
import Portfolio from "./Portfolio";
import Clients from "./Clients";

function Home() {
  return (
    <section className="bg-white dark:bg-custom-gradient transition-colors duration-300">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        
        <div className="mb-8 lg:mb-0">
          <span className="bg-green-700 font-serif text-white dark:bg-green-600 p-2 text-4xl md:text-5xl font-semibold rounded-lg  mb-4">
            We are
          </span>
          <h1 className="text-5xl mt-2 dark:text-white md:text-6xl font-light">
            Best in{" "}
            <span className="text-green-700 dark:text-green-500 font-serif ">
              Premium Driving Simulators
            </span>
          </h1>
          <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg md:text-xl">
            Labsim offers the world’s best realistic driving simulator with OEM controls and
            advanced technologies at affordable prices with advanced features.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <img
            className="w-full rounded-lg shadow-lg dark:shadow-none"
            src={Simulator}
            alt="Learning journey"
          />
        </div>

      </div>
      <Products/>
      <Portfolio/>
      <Clients/>
    </section>
  );
}

export default Home;
