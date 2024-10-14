import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.png";
import DarkModeToggle from "../../DarkMode";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="shadow sticky z-50 top-0 bg-white dark:bg-gray-900 transition-colors duration-300">
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5 dark:border-gray-700">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <div className="bg-gray-400 flex justify-center items-center rounded-lg">
              <img src={logo} className="h-14" alt="Logo" />
            </div>
          </Link>
          <div className="flex items-center lg:order-2">
            <DarkModeToggle />
            <button
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={handleToggle}
            >
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
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 text-2xl font-semibold lg:flex-row lg:space-x-28 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 px-4 ${
                      isActive ? "text-white" : "text-green-400"
                    } border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 lg:border-0 lg:p-0 lg:hover:bg-transparent  hover:text-orange-700 dark:hover:text-orange-500 transition duration-300 ease-in-out`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 px-4 ${
                      isActive ? "text-white" : "text-green-400"
                    } border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 lg:border-0 lg:p-0 lg:hover:bg-transparent  hover:text-orange-700 dark:hover:text-orange-500 transition duration-300 ease-in-out`
                  }
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `block py-2 px-4 ${
                      isActive ? "text-white" : "text-green-400"
                    } border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 lg:border-0 lg:p-0 lg:hover:bg-transparent  hover:text-orange-700 dark:hover:text-orange-500 transition duration-300 ease-in-out`
                  }
                >
                  Services
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 px-4 ${
                      isActive ? "text-white" : "text-green-400"
                    } border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 lg:border-0 lg:p-0 lg:hover:bg-transparent  hover:text-orange-700 dark:hover:text-orange-500 transition duration-300 ease-in-out`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
