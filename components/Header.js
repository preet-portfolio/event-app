import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Header() {
  const [showNav, setShowNav] = React.useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/">
          <img src="logo.png" alt="Logo" className="h-8" />
        </Link>
        <div className="hidden sm:block">
          <nav className="flex items-center">
            <Link
              to="/"
              className="mx-4 hover:text-gray-400 transition duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/events"
              className="mx-4 hover:text-gray-400 transition duration-300 ease-in-out"
            >
              Events
            </Link>
            <Link
              to="/about-us"
              className="mx-4 hover:text-gray-400 transition duration-300 ease-in-out"
            >
              About Us
            </Link>
          </nav>
        </div>
        <div className="sm:hidden">
          <button
            className="text-white hover:text-gray-400 focus:outline-none"
            onClick={toggleNav}
          >
            <FaBars size={24} />
          </button>
        </div>
      </div>
      {showNav && (
        <nav className="sm:hidden bg-gray-800 py-4">
          <div className="flex flex-col items-center">
            <Link
              to="/"
              className="my-2 text-white hover:text-gray-400 transition duration-300 ease-in-out"
              onClick={toggleNav}
            >
              Home
            </Link>
            <Link
              to="/events"
              className="my-2 text-white hover:text-gray-400 transition duration-300 ease-in-out"
              onClick={toggleNav}
            >
              Events
            </Link>
            <Link
              to="/about-us"
              className="my-2 text-white hover:text-gray-400 transition duration-300 ease-in-out"
              onClick={toggleNav}
            >
              About Us
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
