"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust scroll threshold as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("change", handleScroll);
  }, []);

  const handleLoginClick = () => {
    window.location.href = "https://app.fortressinventory.com";
  };

  const navLinks = (
    <>
      <Link to="/features" className="text-lg font-medium text-white hover:text-gray-200 transition-colors">
        Features
      </Link>
      <Link to="/pricing" className="text-lg font-medium text-white hover:text-gray-200 transition-colors">
        Pricing
      </Link>
      <Link to="/contact" className="text-lg font-medium text-white hover:text-gray-200 transition-colors">
        Contact

      </Link>
    </>
  );

  const navbarWidthClasses = isScrolled
    ? "max-w-3xl w-[calc(100%-2rem)] md:w-[calc(100%-4rem)]" // Shrunk state
    : "max-w-7xl w-[calc(100%-2rem)] md:w-[calc(100%-4rem)]"; // Expanded state

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 rounded-full bg-background/10 backdrop-blur-xl py-4 px-6 md:px-10 transition-all duration-300 ease-in-out ${navbarWidthClasses}`}>
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-foreground flex items-center">
          <img src="/fortress-logo.png" alt="Fortress Logo" className="h-8 mr-2" />
        </Link>

        {isMobile ? (
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        ) : (
          <div className="flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks}
            </div>
            <Button 
              className="px-6 py-2 text-lg text-white bg-customPurple hover:bg-customPurple/90"
              onClick={handleLoginClick} // Added onClick handler
            >
              Login
            </Button>
          </div>
        )}
      </div>

      {isMobile && isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/50 backdrop-blur-xl border-b border-border/40 flex flex-col items-center space-y-4 py-6 animate-accordion-down rounded-b-xl">
          {navLinks}
          <Button 
            className="w-3/4 px-6 py-2 text-lg text-white bg-customPurple hover:bg-customPurple/90"
            onClick={handleLoginClick} // Added onClick handler
          >
            Login
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;