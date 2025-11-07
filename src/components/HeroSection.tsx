"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import YouTubeVideoPlayer from "./YouTubeVideoPlayer"; // Import the new component
import { cn } from "@/lib/utils"; // Import cn for conditional class names

const HeroSection = () => {
  const handleGetStartedClick = () => {
    window.location.href = "https://app.fortressinventory.com/signup"; // Updated link
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center text-foreground p-6 pt-16 md:pt-20 overflow-hidden" // Adjusted padding
    >
      {/* Ambient Glow Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute w-[800px] h-[800px] rounded-full bg-accent/20 blur-3xl opacity-50 animate-hero-glow-1" 
          style={{ top: '10%', left: '10%' }}
        ></div>
        <div 
          className="absolute w-[600px] h-[600px] rounded-full bg-secondary/20 blur-3xl opacity-50 animate-hero-glow-2" 
          style={{ bottom: '15%', right: '15%' }}
        ></div>
      </div>

      <div className="container mx-auto flex flex-col items-center justify-center gap-12 flex-grow relative z-10 text-center">
        <div className="w-full py-12">
          <h1 className={cn(
            "text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-md max-w-4xl mx-auto text-primary",
            "opacity-0 translate-y-10", // Initial hidden state
            "animate-slide-in-from-bottom" // Apply new animation
          )}>
            Stop Guessing, Start Growing: Optimize Your Inventory, Orders & Warehouse in Real-Time with Fortress.
          </h1>
          <p className={cn(
            "text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto",
            "opacity-0 translate-y-10", // Initial hidden state
            "animate-slide-in-from-bottom animation-delay-200" // Apply new animation with delay
          )}>
            Tired of inventory chaos? Losing sales due to inaccurate stock counts? Spending hours on manual data entry? Gain crystal-clear visibility, eliminate errors, and boost fulfillment speed across your entire supply chain.
          </p>
          
          <div className={cn(
            "w-full max-w-4xl mx-auto mb-12",
            "opacity-0 translate-y-10", // Initial hidden state
            "animate-slide-in-from-bottom animation-delay-400" // Apply new animation with delay
          )}>
            <YouTubeVideoPlayer videoId="BbjYgTiS9HA" className="shadow-2xl glow-shadow" />
          </div>

          <Button
            size="lg"
            className={cn(
              "bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-full shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 group glow-shadow",
              "opacity-0 translate-y-10", // Initial hidden state
              "animate-slide-in-from-bottom animation-delay-600" // Apply new animation with delay
            )}
            onClick={handleGetStartedClick}
          >
            Start Your Free 14-Day Trial <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>

        <div className={cn(
          "text-center text-muted-foreground text-sm mt-16 pb-8 relative z-10",
          "opacity-0", // Initial hidden state
          "animate-fade-in-scale animation-delay-800" // Apply new animation with delay
        )}>
          Trusted by 10,000+ businesses
        </div>
      </div>
    </section>
  );
};

export default HeroSection;