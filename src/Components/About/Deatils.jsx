import pic1 from "../../assets/pic1.jpeg";
import pic2 from "../../assets/pic2.jpeg";

function Details() {
  return (
    <section className="bg-white dark:bg-custom-gradient-reverse transition-colors duration-300 py-12  px-4 md:px-8 lg:px-16">
      {/* Container */}
      <div className="flex flex-col lg:flex-row items-center lg:m-10  lg:items-center">
        {/* Image Section */}
        <div className="flex flex-col items-center lg:items-start space-y-8 mb-8  lg:mb-0">
          <img
            src={pic1}
            className="w-32 h-32 md:w-48 md:h-48 lg:w-96 lg:h-full rounded-xl border-4 border-green-600 shadow-lg   hover:scale-105 transition-all duration-500"
            alt="Simulation Image 1"
          />
        </div>

        {/* Text Section */}
        <div className="flex justify-center mt-8 lg:justify-evenly w-full">
          <div className="w-full h-full lg:w-2/3  bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300">
            <h1 className="text-2xl md:text-3xl font-semibold font-serif py-4 text-center lg:text-left text-gray-800 dark:text-gray-100 leading-snug">
              <span className="text-green-600">Pioneering</span> Realistic{" "}
              <span className="text-green-600">Simulation</span> with Cutting-Edge{" "}
              <span className="text-green-600">Technology</span> and{" "}
              <span className="text-green-700">Expertise</span> Development
            </h1>
            <p className="dark:text-gray-300 text-gray-600 text-justify mt-6">
              Labsim engineers are highly experienced in simulation technology
              using the latest tools of software & hardware platforms. Labsim has
              designed & developed more than 40 driver training simulators in
              India and successfully installed at customer sites. Labsim started
              with a group of highly technical skilled engineers and now offers
              the world’s best realistic simulation technologies at affordable
              prices with advanced features.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full lg:w-2/3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md flex items-center justify-center mx-auto mt-12 p-8">
        <h1 className="text-lg md:text-xl font-medium text-center text-gray-800 dark:text-gray-100 leading-relaxed">
          Labsim is committed to our customers and has a passion for technology. We take on big challenges, and pride ourselves on seeing them through. We hold ourselves accountable to our customers, ensuring a high level of satisfaction is a core component of our business.
        </h1>
      </div>
    </section>
  );
}

export default Details;
