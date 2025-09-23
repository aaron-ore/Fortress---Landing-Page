"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-gradient-to-br from-gray-900 to-black text-white p-6 pt-24 md:pt-32 overflow-hidden">
      {/* Background elements (blob animations) */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-customPurple rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 flex-grow relative z-10">
        {/* Left side: Header, Description, Button */}
        <div className="md:w-1/2 text-center md:text-left py-12">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-md">
            Fortress Inventory: Your Command Center for Inventory Excellence
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl md:max-w-none mx-auto">
            Gain real-time visibility and smart stock management with automated reorder alerts, dedicated picking bins, and effortless organization to prevent waste and shortages.
          </p>
          <Button size="lg" className="bg-customPurple hover:bg-customPurple/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 group">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>

        {/* Right side: Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end relative">
          <img
            src="/dark.png" // Referencing the attached image
            alt="Fortress Inventory Dashboard"
            className="w-full max-w-xl md:max-w-2xl h-auto rounded-lg shadow-2xl object-contain"
          />
        </div>
      </div>

      {/* "Trusted by..." text at the bottom */}
      <div className="text-center text-gray-400 text-sm mt-16 pb-8 relative z-10">
        Trusted by 10,000+ businesses
      </div>
    </section>
  );
};

export default HeroSection;