"use client";

import React from "react";
import { Link } from "react-router-dom"; // Import Link for internal navigation

const Footer = () => {
  return (
    <footer className="bg-background/80 text-muted-foreground py-8 px-6 border-t border-border/50"> {/* Updated background and text color */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Fortress. All rights reserved.</p>
        <div className="flex space-x-6 items-center">
          <Link to="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link> {/* Updated hover color */}
          <Link to="/terms" className="hover:text-secondary transition-colors">Terms of Service</Link> {/* Updated hover color */}
          <Link to="/refund" className="hover:text-secondary transition-colors">Refund Policy</Link> {/* Added Refund Policy link */}
          <a href="mailto:support@fortressinventory.com" className="hover:text-secondary transition-colors">support@fortressinventory.com</a> {/* Added support email */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;