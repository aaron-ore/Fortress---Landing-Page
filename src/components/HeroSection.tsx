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
      className="relative min-h-screen flex flex-col justify-between text-foreground p-6 pt-24 md:pt-32 overflow-hidden"
      style={{ backgroundImage: `url('/city-lights-bokeh.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="container mx-auto flex flex-col items-center justify-center gap-12 flex-grow relative z-10">
        {/* Top section: Header, Description, Button */}
        <div className="w-full text-center py-12">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-md max-w-4xl mx-auto text-foreground">
            Fortress Inventory: Your Command Center for Inventory Excellence
          </h1>
          <p className="text-lg md:text-xl text-secondary mb-8 max-w-3xl mx-auto">
            Gain real-time visibility and smart stock management with automated reorder alerts, dedicated picking bins, and effortless organization to prevent waste and shortages.
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-full shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 group"
            onClick={handleGetStartedClick}
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
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