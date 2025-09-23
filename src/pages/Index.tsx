"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        {/* Removed other sections to match the landing page reference */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;