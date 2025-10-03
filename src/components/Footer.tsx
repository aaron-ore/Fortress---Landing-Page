"use client";

import React from "react";


const Footer = () => {
  return (
    <footer className="bg-black/50 text-gray-400 py-8 px-6 border-t border-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Fortress. All rights reserved.</p>
        <div className="flex space-x-6 items-center">
          <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;