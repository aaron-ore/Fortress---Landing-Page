"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import YouTubeVideoPlayer from "./YouTubeVideoPlayer"; // Import the new component

const HeroSection = () => {
  const handleGetStartedClick = () => {
    window.location.href = "https://app.fortressinventory.com";
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center text-foreground p-6 pt-32 md:pt-40 overflow-hidden" // Adjusted padding and alignment
    >
      {/* No explicit background image here, relies on global gradient and grid */}
      {/* Optional: Add a subtle radial gradient or blob for depth if needed, similar to reference */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/20 to-transparent z-0"></div>


      <div className="container mx-auto flex flex-col items-center justify-center gap-12 flex-grow relative z-10 text-center">
        {/* Top section: Header, Description, 3D Graphic Placeholder, Button */}
        <div className="w-full py-12">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-md max-w-4xl mx-auto text-primary">
            Let Fortress Inventory <br className="hidden sm:inline"/> Streamline Your Operations
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Gain real-time visibility and smart stock management with automated reorder alerts, dedicated picking bins, and effortless organization to prevent waste and shortages.
          </p>
          
          {/* Placeholder for the 3D cube graphic */}
          <div className="relative w-full max-w-2xl mx-auto h-64 md:h-96 bg-card/50 border border-border/50 rounded-xl flex items-center justify-center mb-12 glow-shadow">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 md:w-48 md:h-48 bg-secondary/20 rounded-full animate-pulse-slow flex items-center justify-center">
                <div className="w-20 h-20 md:w-32 md:h-32 bg-secondary/40 rounded-full flex items-center justify-center">
                  <span className="text-primary text-xl font-bold">3D</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 text-muted-foreground text-sm">
              {/* Small text like "Albert Camus" in reference */}
            </div>
          </div>

          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-md shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 group glow-shadow"
            onClick={handleGetStartedClick}
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>

        {/* "Trusted by..." text at the bottom */}
        <div className="text-center text-muted-foreground text-sm mt-16 pb-8 relative z-10">
          Trusted by 10,000+ businesses
        </div>
      </div>
    </section>
  );
};

export default HeroSection;