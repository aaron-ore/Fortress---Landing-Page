"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = (
    <>
      <Link to="/features" className="text-lg font-medium hover:text-primary transition-colors">
        Features
      </Link>
      <Link to="/pricing" className="text-lg font-medium hover:text-primary transition-colors">
        Pricing
      </Link>
      <Link to="/contact" className="text-lg font-medium hover:text-primary transition-colors">
        Contact
      </Link>
    </>
  );

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 max-w-7xl w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] rounded-xl bg-background/10 backdrop-blur-xl border border-border/40 py-4 px-6 md:px-10">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-foreground">
          Fortress
        </Link>

        {isMobile ? (
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        ) : (
          <div className="flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks}
            </div>
            <Button className="px-6 py-2 text-lg">Login</Button>
          </div>
        )}
      </div>

      {isMobile && isOpen && (
        <div className="absolute top-full left-0 w-full bg-background/90 backdrop-blur-md border-b border-border/40 flex flex-col items-center space-y-4 py-6 animate-accordion-down">
          {navLinks}
          <Button className="w-3/4 px-6 py-2 text-lg">Login</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;