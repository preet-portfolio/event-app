import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container flex justify-between items-center mx-auto">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Proudly Made in Ottawa 🇨🇦
        </p>
        <p className="text-sm">
          Follow us on <a href="#">Twitter</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
