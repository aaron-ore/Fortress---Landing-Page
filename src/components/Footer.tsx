"use client";

import React from "react";
import { Link } from "react-router-dom"; // Import Link for internal navigation

const Footer = () => {
  return (
    <footer className="bg-background/80 text-muted-foreground py-8 px-6 border-t border-border/50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Fortress. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:space-x-6 md:flex-nowrap items-center"> {/* Adjusted for mobile wrapping and centering */}
          <Link to="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-secondary transition-colors">Terms of Service</Link>
          <Link to="/refund" className="hover:text-secondary transition-colors">Refund Policy</Link>
          <a href="mailto:support@fortressinventory.com" className="hover:text-secondary transition-colors">support@fortressinventory.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;