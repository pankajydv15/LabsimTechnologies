// import React from 'react'
import HMV from "../../assets/HMV.jpg";
import lmv from "../../assets/LMV.jpg";
import tws from "../../assets/TWS.jpg";

function Products() {
  return (
    <section className="bg-white dark:bg-custom-gradient-reverse transition-colors duration-300 py-8 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col items-center">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-4xl uppercase text-green-500 dark:text-green-400 font-bold">
            Product We Provide
          </h3>
          <br />
          <span className="text-4xl md:text-6xl font-serif uppercase block dark:text-white">
            Made in India Simulator
          </span>
          <hr className="dark:border-gray-100 border-gray-900 sm:mx-auto lg:my-4" />
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mt-4">
            Labsim ensuring a high level of customer satisfaction. Our customer
            satisfaction is a core component of our business model.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {/* Card 1 */}
          <div className="relative flex flex-col bg-white dark:bg-gray-800 shadow-sm border border-slate-200 dark:border-gray-700 rounded-lg w-full max-w-md mx-auto">
            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <img
                src={HMV}
                alt="card-image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h6 className="mb-2 text-slate-800 uppercase dark:text-green-400 text-xl font-semibold">
                HMV (Heavy Motor Vehicle)
              </h6>
              <p className="text-slate-600 dark:text-gray-300 leading-normal font-normal">
                The HMV Simulator from Labsim Technologies utilizes original OEM
                components to create an authentic truck experience. It features
                hand control systems like indicators, high/low beam, horn,
                accelerator, brake, and clutch, which replicate those in real
                trucks. Labsim offers various models customized to meet specific
                customer needs, ensuring an immersive training experience that
                enhances driver skills and confidence.
              </p>
            </div>
            <div className="px-4 pb-4 pt-0 mt-2">
              <button className="rounded-md bg-slate-800 dark:bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 dark:focus:bg-green-500 active:bg-slate-700 dark:active:bg-green-500 hover:bg-slate-700">
                Read more
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative flex flex-col bg-white dark:bg-gray-800 shadow-sm border border-slate-200 dark:border-gray-700 rounded-lg w-full max-w-md mx-auto">
            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <img
                src={lmv}
                alt="card-image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h6 className="mb-2 text-slate-800 uppercase dark:text-green-400  text-xl font-semibold">
                LMV SIMULATOR (Light moter Vehicle)
              </h6>
              <p className="text-slate-600 dark:text-gray-300 leading-normal font-normal">
                The LMV Simulator from Labsim Technologies provides a realistic
                driving experience with fully functional car or jeep controls in
                an OEM cabin. Powered by LABSIM software, it integrates advanced
                vehicle dynamics and adheres to CMVR guidelines. This simulator
                is ideal for training both new and experienced drivers while
                ensuring compliance with essential safety standards.
              </p>
            </div>
            <div className="px-4 pb-4 pt-0 mt-2">
              <button className="rounded-md bg-slate-800 dark:bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 dark:focus:bg-green-500 active:bg-slate-700 dark:active:bg-green-500 hover:bg-slate-700">
                Read more
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative flex flex-col bg-white dark:bg-gray-800 shadow-sm border border-slate-200 dark:border-gray-700 rounded-lg w-full max-w-md mx-auto">
            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <img
                src={tws}
                alt="card-image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h6 className="mb-2 text-slate-800 uppercase dark:text-green-400  text-xl font-semibold">
                Two-Wheeler Simulator
              </h6>
              <p className="text-slate-600 dark:text-gray-300 font-normal leading-normal">
                The Two-Wheeler Simulator from Labsim Technologies offers
                realistic training solutions for motorcycles and scooters. With
                authentic controls and advanced software integration, it
                accurately mimics real riding conditions and delivers precise
                vehicle dynamics. This simulator is perfect for both new and
                experienced riders, enhancing their skills while ensuring
                adherence to safety regulations.
              </p>
            </div>
            <div className="px-4 pb-4 pt-0 mt-2">
              <button className="rounded-md bg-slate-800 dark:bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 dark:focus:bg-green-500 active:bg-slate-700 dark:active:bg-green-500 hover:bg-slate-700">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
