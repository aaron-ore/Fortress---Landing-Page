"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Import Input component
import { ArrowRight } from "lucide-react";
import YouTubeVideoPlayer from "./YouTubeVideoPlayer"; // Import the new component

const HeroSection = () => {
  const handleSignUpClick = () => {
    window.location.href = "https://app.fortressinventory.com/signup"; // Assuming a signup page
  };

  const handleLearnMoreClick = () => {
    // This could scroll to a features section or navigate to /features
    window.location.href = "/features"; 
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-between text-foreground p-6 pt-24 md:pt-32 overflow-hidden bg-transparent" // Removed inline style and added bg-transparent
    >
      {/* Dark overlay to ensure text readability - kept for consistency if other elements are added */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="container mx-auto flex flex-col items-center justify-center gap-12 flex-grow relative z-10">
        {/* Top section: Header, Description, Input, Buttons */}
        <div className="w-full text-center py-12">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-md max-w-4xl mx-auto text-foreground">
            Fortress Inventory: Your Command Center for Inventory Excellence
          </h1>
          <p className="text-lg md:text-xl text-secondary mb-8 max-w-3xl mx-auto">
            Gain real-time visibility and smart stock management with automated reorder alerts, dedicated picking bins, and effortless organization to prevent waste and shortages.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-6 py-3 text-lg rounded-md bg-background/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-0"
            />
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-3 rounded-md shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 group w-full sm:w-auto"
              onClick={handleSignUpClick}
            >
              Sign up for Fortress
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-foreground text-foreground hover:bg-foreground/10 text-lg px-8 py-3 rounded-md shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 group w-full sm:w-auto"
              onClick={handleLearnMoreClick}
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Bottom section: YouTube Video Player */}
        <div className="w-full flex justify-center relative">
          <div className="w-full max-w-5xl bg-card/20 backdrop-blur-xl p-4 rounded-xl border border-white/10 shadow-lg flex items-center justify-center">
            <YouTubeVideoPlayer videoId="BbjYgTiS9HA" title="Fortress Inventory Overview" />
          </div>
        </div>
      </div>

      {/* "Trusted by..." text at the bottom */}
      <div className="text-center text-muted-foreground text-sm mt-16 pb-8 relative z-10">
        Trusted by 10,000+ businesses
      </div>
    </section>
  );
};

export default HeroSection;