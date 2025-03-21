import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 bottom-0 fixed w-full">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Admin Panel. All rights reserved.
        </p>
        <div className="mt-2 flex justify-center space-x-4">
          <NavLink
            to="privacypolicy"
            className="hover:text-blue-400"
            aria-label="Privacy Policy"
          >
            Privacy Policy
          </NavLink>
          <NavLink
            to="termsofservices"
            className="hover:text-blue-400"
            aria-label="Terms of Service"
          >
            Terms of Service
          </NavLink>
          <NavLink to="contact-us" className="hover:text-blue-400" aria-label="Contact Us">
            Contact Us
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
