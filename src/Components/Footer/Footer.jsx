import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm">
              &copy; {new Date().getFullYear()} Quiz App. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm font-medium">
              <a href="#" className="hover:text-sky-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-sky-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-sky-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
