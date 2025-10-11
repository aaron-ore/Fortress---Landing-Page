"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils"; // Import cn for conditional class names
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"; // Import Sheet components

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

  const navLinks = (
    <>
      <Link to="/features" className="text-lg font-medium text-foreground hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>
        Features
      </Link>
      <Link to="/pricing" className="text-lg font-medium text-foreground hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>
        Pricing
      </Link>
      <Link to="/about-us" className="text-lg font-medium text-foreground hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>
        About Us
      </Link>
    </>
  );

  return (
    <nav
      className={cn(
        "sticky top-4 z-50 mx-auto rounded-full bg-background/50 backdrop-blur-lg border border-border/50 transition-all duration-300 ease-in-out py-3 px-6 md:px-10",
        isScrolled ? "max-w-5xl shadow-xl" : "max-w-7xl"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-foreground flex items-center">
          <img src="/fortress-logo.png" alt="Fortress Logo" className="h-8 mr-2" />
        </Link>

        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/90 backdrop-blur-lg flex flex-col items-center justify-start space-y-8 pt-20">
              {navLinks}
              <Button 
                className="w-3/4 px-6 py-2 text-lg bg-accent hover:bg-accent/90 text-accent-foreground rounded-full glow-shadow"
                onClick={handleLoginClick}
              >
                Login
              </Button>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks}
            </div>
            <Button 
              className="px-6 py-2 text-lg bg-accent hover:bg-accent/90 text-accent-foreground rounded-full glow-shadow"
              onClick={handleLoginClick}
            >
              Login
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;