import { useState } from "react";
import img from "../../assets/contactus.jpg";
import Design from "./design";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://labsimbackend.onrender.com/contactUs",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        }
      );

      if (response.ok) {
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Error sending message.");
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-custom-gradient">
  <div className="flex flex-col lg:flex-row w-11/12 lg:w-4/5 bg-gradient-to-t from-gray-900 to-black shadow-lg rounded-lg overflow-hidden">
    {/* Left Section */}
    <div className="w-full lg:w-1/2 bg-gradient-to-r from-gray-900 to-black text-white p-8 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-4 text-center">Contact Information</h2>
      <p className="text-lg mb-6 text-center leading-relaxed">
        Have questions? We're here to help!
      </p>
      <div className="space-y-6 w-10/12">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faPhone} className="text-2xl mr-4 text-white" />
          <span>9467460625</span>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faEnvelope} className="text-2xl mr-4 text-white" />
          <span>info@labsim.in</span>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="text-2xl mr-4 text-white"
          />
          <span>XYZ Street, City</span>
        </div>
      </div>
    </div>

    {/* Right Section */}
    <div className="w-full lg:w-1/2 p-8 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-100 mb-6 text-center">
        Send Us a Message
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6 w-full md:w-10/12">
        <div>
          <label className="block text-gray-400 mb-2 font-semibold" htmlFor="name">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
            className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-gray-400 mb-2 font-semibold" htmlFor="email">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-gray-400 mb-2 font-semibold" htmlFor="message">
            Your Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message"
            rows="5"
            required
            className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition duration-200"
        >
          Send Message
        </button>
      </form>
      {status && (
        <p className="text-center text-green-500 mt-4 font-semibold">
          {status}
        </p>
      )}
    </div>
  </div>
  <Design />
</section>

  );
}

export default ContactUs;
