import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <div className="text-sm">
            © {new Date().getFullYear()} Quiz App. All rights reserved.
          </div>

          <div className="flex gap-6 text-sm font-medium">
            <NavLink
              to="/privacy"
              className="hover:text-sky-400 transition-colors"
            >
              Privacy Policy
            </NavLink>

            <NavLink
              to="/terms"
              className="hover:text-sky-400 transition-colors"
            >
              Terms of Service
            </NavLink>

            <NavLink
              to="/contact"
              className="hover:text-sky-400 transition-colors"
            >
              Contact
            </NavLink>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
