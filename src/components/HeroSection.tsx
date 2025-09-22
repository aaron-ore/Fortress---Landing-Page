"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-black text-white p-6">
      {/* Background elements for visual interest */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-lg">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-md">
          Fortress: Your Command Center for Inventory Excellence
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Transform your operations with intelligent inventory control, streamlined order fulfillment, empowered mobile warehouse management, and actionable insights. Fortress is designed to elevate your business.
        </p>
        <Button size="lg" className="bg-customPurple hover:bg-customPurple/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 group">
          Get Started
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;