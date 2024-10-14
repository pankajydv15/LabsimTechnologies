import truck from "../../assets//truck.jpg";

function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Logo Section */}
            <div className="flex justify-center lg:justify-start">
              <img src={truck} alt="Truck" className="w-48 h-auto object-contain" />
            </div>

            {/* Products Section */}
            <div className="text-center font-mono lg:text-left">
              <h6 className="text-lg font-semibold uppercase mb-4 text-green-400">Products</h6>
              <ul>
                <li className="mb-2">
                  <a href="#!" className="text-gray-400 hover:text-green-400 transition duration-300">Angular</a>
                </li>
                <li className="mb-2">
                  <a href="#!" className="text-gray-400 hover:text-green-400 transition duration-300">React</a>
                </li>
                <li className="mb-2">
                  <a href="#!" className="text-gray-400 hover:text-green-400 transition duration-300">Vue</a>
                </li>
                <li>
                  <a href="#!" className="text-gray-400 hover:text-green-400 transition duration-300">Laravel</a>
                </li>
              </ul>
            </div>

            {/* Site Map Section */}
            <div className="text-center font-mono lg:text-left">
              <h6 className="text-lg font-semibold uppercase mb-4  text-green-400">Site Map</h6>
              <ul>
                <li className="mb-2">
                  <a href="#!" className="text-gray-400 hover:text-green-400 transition duration-300">Home</a>
                </li>
                <li className="mb-2">
                  <a href="#!" className="text-gray-400 hover:text-green-400 transition duration-300">About</a>
                </li>
                <li className="mb-2">
                  <a href="#!" className="text-gray-400 hover:text-green-400 transition duration-300">Service</a>
                </li>
                <li>
                  <a href="#!" className="text-gray-400 hover:text-green-400 transition duration-300">Contact Us</a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="text-center font-mono lg:text-left">
              <h6 className="text-lg font-semibold uppercase mb-4 text-green-400">Contact</h6>
              <ul className="text-gray-400">
                <li className="mb-4 flex justify-center lg:justify-start">
                  <span className="mr-2 text-green-400">📍</span>
                  Plot No 199 – 200 , Main Rohtak Road Opposite – Metro Pillar No 541 Mundka Industrial Area , New Delhi -110041
                </li>
                <li className="mb-4 flex justify-center lg:justify-start">
                  <span className="mr-2 text-green-400">✉️</span>
                  Email: <a href="mailto:info@labsim.in" className="hover:text-green-400 transition duration-300">info@labsim.in</a>
                </li>
                <li className="mb-4 flex justify-center lg:justify-start">
                  <span className="mr-2 text-green-400">📞</span>
                  Contact No: <a href="tel:+919467460625" className="hover:text-green-400 transition duration-300">9467460625</a>
                </li>
                <li className="flex justify-center lg:justify-start">
                  <span className="mr-2 text-green-400">📱</span>
                  9811766326
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-black/10 p-6 text-center">
          <span className="text-gray-400">© 2023 Copyright:</span>{" "}
          <a href="https://tw-elements.com/" className="font-semibold text-green-400 hover:text-green-500 font-serif transition duration-300">Labsim Technologies Private Limited</a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
