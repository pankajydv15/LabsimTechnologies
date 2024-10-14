import React, { useState } from "react";
import truck from "../../assets/Icons/icons8-truck.gif";
import bus from "../../assets/Icons/icons8-bus.gif";
import car from "../../assets/Icons/icons8-car.gif";
import bulldozer from "../../assets/Icons/icons8-bulldozer-50.png";
import crane from "../../assets/Icons/icons8-crane.gif";
import excavator from "../../assets/Icons/icons8-excavator-64.png";
import flight from "../../assets/Icons/icons8-flight.gif";
import scooter from "../../assets/Icons/icons8-scooter.gif";
import unloading from "../../assets/Icons/icons8-trailer-unloading.gif";
import WhyUs from "./WhyUs";

function ProductsServices() {
  const [showAll, setShowAll] = useState(false);


  const products = [
    { id: 1, src: truck, title: "HMV", description: "Lorem ipsum dolor sit amet consectetur. Aliquet amet elementum." },
    { id: 2, src: bus, title: "BUS SIMULATOR", description: "Lorem ipsum dolor sit amet consectetur. Aliquet amet elementum." },
    { id: 3, src: car, title: "LMV SIMULATOR", description: "Lorem ipsum dolor sit amet consectetur. Aliquet amet elementum." },
    { id: 4, src: bulldozer, title: "BULLDOZER SIMULATOR", description: "Lorem ipsum dolor sit amet consectetur. Aliquet amet elementum." },
    { id: 5, src: crane, title: "CRANE SIMULATOR", description: "Lorem ipsum dolor sit amet consectetur. Aliquet amet elementum." },
    { id: 6, src: excavator, title: "EXCAVATOR SIMULATOR", description: "Lorem ipsum dolor sit amet consectetur. Aliquet amet elementum." },
    { id: 7, src: flight, title: "FLIGHT SIMULATOR", description: "Lorem ipsum dolor sit amet consectetur. Aliquet amet elementum." },
    { id: 8, src: scooter, title: "2 WHEELER SIMULATOR", description: "Lorem ipsum dolor sit amet consectetur. Aliquet amet elementum." },
    { id: 9, src: unloading, title: "TIPPER SIMULATOR", description: "Lorem ipsum dolor sit amet consectetur. Aliquet amet elementum." },
  ];

  // Initially sirf pehle 3 products dikhaye jaayenge
  const visibleProducts = showAll ? products : products.slice(0, 3);

  return (
    <section className="bg-white dark:bg-custom-gradient transition-colors duration-300 ">
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl font-serif font-semibold text-green-500 tracking-wide uppercase">
              Our Products
              <hr className="dark:border-gray-100 border-gray-900 sm:mx-auto lg:my-4" />
            </h2>
            <p className="mt-2 text-3xl text-white leading-8 font-semibold py-8 sm:text-4xl">
              A Wide Range of Simulators
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-6">
            {visibleProducts.map((product) => (
              <div key={product.id} className="bg-white shadow-lg rounded-lg p-6 text-center">
                <div className="mb-4">
                  <img src={product.src} alt={`${product.title} Icon`} className="mx-auto" />
                </div>
                <h3 className="text-2xl font-medium font-serif text-green-500">{product.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{product.description}</p>
                <div className="mt-4">
                  <a href="#" className="inline-block text-green-600 hover:text-green-500">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {!showAll && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAll(true)}
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors"
              >
                View All
              </button>
            </div>
          )}
        </div>
      </div>
      <WhyUs/>
    </section>
  );
}

export default ProductsServices;
