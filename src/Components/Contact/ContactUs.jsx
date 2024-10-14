import { useState } from "react";
import img from "../../assets/contactUs.jpg";
import Design from "./design";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faGlobe,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

function ContactUs() {
  // State to capture form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await fetch("http://localhost:5000/contactUs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }), // Send form data
      });

      if (response.ok) {
        setStatus("Message sent successfully!"); // Success message
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Error sending message.");
    }
  };

  return (
    <section className="bg-white dark:bg-custom-gradient transition-colors duration-300">
      <div className="flex justify-center w-full h-[25vh] object-cover relative">
        <img
          src={img}
          className="w-full h-[30vh] object-cover opacity-25"
          alt="Contact Us"
        />
        <div className="absolute inset-0 flex items-center justify-center mt-20">
          <h2 className="text-white text-6xl font-bold">
            Contact <span className="text-green-500">Us</span>
          </h2>
        </div>
      </div>

      {/* Two-Column Layout */}
      <div className="flex flex-col lg:flex-row items-start justify-center min-h-screen p-4 lg:p-36 space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Left Section - Get in Touch */}
        <div className="lg:w-1/2 bg-gray-800 mt-8  lg:mt-36 p-8 lg:p-8 rounded-lg shadow-lg text-center lg:text-left">
          <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">
            Get in
            <span className="text-green-500"> Touch</span>
          </h2>

          <div className="flex flex-col lg:flex-row text-xl justify-between px-14 ">
            {/* Column 1 */}
            <div className="space-y-4 ">
              <div className="flex flex-col">
                <span className="text-green-500 font-bold flex items-center">
                  <FontAwesomeIcon icon={faPhone} className="mr-2" /> Phone
                  Number
                </span>
                <span className="text-gray-300">
                9467460625</span>
              </div>

              <div className="flex flex-col">
                <span className="text-green-500 font-bold flex items-center">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Email
                  Address
                </span>
                <span className="text-gray-300">info@labsim.in</span>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-4 mt-4 lg:mt-0">
              <div className="flex flex-col">
                <span className="text-green-500 font-bold flex items-center">
                  <FontAwesomeIcon icon={faGlobe} className="mr-2" /> Website
                </span>
                <span className="text-gray-300">www.labsim.in</span>
              </div>

              <div className="flex flex-col">
                <span className="text-green-500 font-bold flex items-center">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />{" "}
                  Address
                </span>
                <span className="text-gray-300">XYZ Street, City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="lg:w-1/2">
          <form
            className="w-full bg-gray-800 p-8 m-5 lg:p-8 rounded-lg shadow-lg"
            onSubmit={handleSubmit}
          >
            <h2 className="text-4xl font-bold mb-6 text-green-500 font-serif text-center">
              Contact Us
            </h2>

            <div className="mb-4">
              <label
                className="block text-green-500 font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg bg-gray-900 text-gray-200 border-gray-600 focus:outline-none focus:ring focus:ring-indigo-300"
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)} // Update state on change
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-green-500 font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg bg-gray-900 text-gray-200 border-gray-600 focus:outline-none focus:ring focus:ring-indigo-300"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update state on change
                required
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-green-500 font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full px-3 py-2 border rounded-lg bg-gray-900 text-gray-200 border-gray-600 focus:outline-none focus:ring focus:ring-indigo-300"
                id="message"
                rows="5"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)} // Update state on change
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                className="px-6 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300"
                type="submit"
              >
                Send Message
              </button>
            </div>

            {/* Status Message */}
            {status && <p className="text-center text-white mt-4">{status}</p>}
          </form>
        </div>
      </div>

      <Design />
    </section>
  );
}

export default ContactUs;
