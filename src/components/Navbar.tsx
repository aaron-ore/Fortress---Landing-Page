"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react"; // Removed Search icon, added ArrowRight
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLoginClick = () => {
    window.location.href = "https://app.fortressinventory.com";
  };

  const handleSignUpClick = () => {
    window.location.href = "https://app.fortressinventory.com/signup";
  };

  const navLinks = (
    <>
      <Link to="/features" className="text-lg font-medium text-foreground hover:text-secondary transition-colors">
        Features
      </Link>
      <Link to="/pricing" className="text-lg font-medium text-foreground hover:text-secondary transition-colors">
        Pricing
      </Link>
      <Link to="/about-us" className="text-lg font-medium text-foreground hover:text-secondary transition-colors">
        About Us
      </Link>
    </>
  );

  // Navbar is now full width and fixed at the top, not floating
  const navbarClasses = `fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border/50 transition-all duration-300 ease-in-out py-4 px-6 md:px-10`;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-foreground flex items-center">
          <img src="/fortress-logo.png" alt="Fortress Logo" className="h-8 mr-2" />
        </Link>

        {isMobile ? (
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-foreground">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        ) : (
          <div className="flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks}
            </div>
            <Button 
              variant="ghost" // Login as a ghost button/text link
              className="px-4 py-2 text-lg text-foreground hover:text-secondary"
              onClick={handleLoginClick}
            >
              Login
            </Button>
            <Button 
              className="px-6 py-2 text-lg bg-accent hover:bg-accent/90 text-accent-foreground rounded-md glow-shadow" // Filled button with glow
              onClick={handleSignUpClick}
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        )}
      </div>

      {isMobile && isOpen && (
        <div className="absolute top-full left-0 w-full bg-background/90 border-b border-border/40 flex flex-col items-center space-y-4 py-6 animate-accordion-down">
          {navLinks}
          <Button 
            variant="ghost"
            className="w-3/4 px-6 py-2 text-lg text-foreground hover:text-secondary"
            onClick={handleLoginClick}
          >
            Login
          </Button>
          <Button 
            className="w-3/4 px-6 py-2 text-lg bg-accent hover:bg-accent/90 text-accent-foreground rounded-md glow-shadow"
            onClick={handleSignUpClick}
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;