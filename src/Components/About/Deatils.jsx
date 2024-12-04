import pic1 from "../../assets/pic1.jpeg";

function Details() {
  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-black text-gray-100 py-16">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-700/40 via-gray-900/50 to-black/40 -z-10"></div>

      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl text-green-500 font-serif  tracking-wide">
            Redefining Simulation Excellence
            <hr className="dark:border-gray-100 border-gray-900 sm:mx-auto lg:my-4" />
          </h1>
          <p className="text-2xl text-gray-300">
            Cutting-edge technology to empower immersive experiences.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image */}
          <div className="relative">
            <img
              src={pic1}
              alt="Simulation Image"
              className="rounded-lg shadow-2xl w-full max-w-lg lg:max-w-md hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-4 -right-4 bg-green-600 rounded-lg p-6 shadow-lg hidden lg:block">
              <h3 className="text-lg font-medium text-white">
                Experience Advanced Technology
              </h3>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-semibold">
              Why Choose <span className="text-green-500">Labsim</span>?
              {/* <hr className="border-gray-100 sm:mx-auto lg:my-4 " /> */}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Labsim engineers are experts in cutting-edge simulation technology,
              offering tailored solutions that set the industry standard. From
              immersive driver training simulators to advanced AR/VR applications,
              we are committed to delivering excellence.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With over 40 successful installations across India, Labsim continues
              to push boundaries, ensuring unparalleled quality, scalability, and
              affordability for our clients.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800 rounded-lg p-6 shadow-md text-center">
            <h3 className="text-xl font-medium text-green-500">40+ Projects</h3>
            <p className="text-gray-300">
              Successfully delivered across various industries.
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-md text-center">
            <h3 className="text-xl font-medium text-green-500">Tailored Solutions</h3>
            <p className="text-gray-300">
              Designed to meet specific client needs.
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-md text-center">
            <h3 className="text-xl font-medium text-green-500">Cutting-edge Tech</h3>
            <p className="text-gray-300">
              Leveraging the latest in simulation technology.
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-md text-center">
            <h3 className="text-xl font-medium text-green-500">Expert Team</h3>
            <p className="text-gray-300">
              Skilled professionals with a passion for innovation.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Elevate Your Experience?
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Let’s bring your vision to life with Labsim’s advanced solutions.
          </p>
          <button className="px-8 py-4 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-all">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Details;
