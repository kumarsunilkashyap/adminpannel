import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 bottom-0 fixed w-full">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Admin Panel. All rights reserved.
        </p>
        <div className="mt-2 flex justify-center space-x-4">
          <a
            href="#"
            className="hover:text-blue-400"
            aria-label="Privacy Policy"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-blue-400"
            aria-label="Terms of Service"
          >
            Terms of Service
          </a>
          <a href="#" className="hover:text-blue-400" aria-label="Contact Us">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
