"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Import Input component
import { Menu, X, Search } from "lucide-react"; // Import Search icon
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
    return () => window.removeEventListener("scroll", handleScroll); // Corrected event listener cleanup
  }, []);

  const handleLoginClick = () => {
    window.location.href = "https://app.fortressinventory.com";
  };

  const handleSignUpClick = () => {
    window.location.href = "https://app.fortressinventory.com/signup"; // Assuming a signup page
  };

  const navLinks = (
    <>
      <Link to="/features" className="text-lg font-medium text-foreground hover:text-gray-200 transition-colors">
        Features
      </Link>
      <Link to="/pricing" className="text-lg font-medium text-foreground hover:text-gray-200 transition-colors">
        Pricing
      </Link>
      <Link to="/about-us" className="text-lg font-medium text-foreground hover:text-gray-200 transition-colors">
        About Us
      </Link>
    </>
  );

  const navbarWidthClasses = isScrolled
    ? "max-w-3xl w-[calc(100%-2rem)] md:w-[calc(100%-4rem)]" // Shrunk state
    : "max-w-7xl w-[calc(100%-2rem)] md:w-[calc(100%-4rem)]"; // Expanded state

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end py-4 px-6 md:px-10 transition-all duration-300 ease-in-out ${navbarWidthClasses}`}>
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
            <div className="relative flex items-center">
              <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search or jump to..."
                className="pl-9 pr-3 py-2 rounded-md bg-background/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-0 w-48"
              />
            </div>
            <Button 
              variant="outline" // Changed to outline
              className="px-6 py-2 text-lg border-accent text-accent hover:bg-accent/10" // Styled with accent color
              onClick={handleLoginClick}
            >
              Login
            </Button>
            <Button 
              className="px-6 py-2 text-lg bg-accent hover:bg-accent/90 text-accent-foreground" // Filled button
              onClick={handleSignUpClick}
            >
              Sign Up
            </Button>
          </div>
        )}
      </div>

      {isMobile && isOpen && (
        <div className="absolute top-full left-0 w-full bg-gradient-to-b from-gradient-start to-gradient-end border-b border-border/40 flex flex-col items-center space-y-4 py-6 animate-accordion-down rounded-b-xl">
          {navLinks}
          <Button 
            variant="outline"
            className="w-3/4 px-6 py-2 text-lg border-accent text-accent hover:bg-accent/10"
            onClick={handleLoginClick}
          >
            Login
          </Button>
          <Button 
            className="w-3/4 px-6 py-2 text-lg bg-accent hover:bg-accent/90 text-accent-foreground"
            onClick={handleSignUpClick}
          >
            Sign Up
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;