"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureGrid from '@/components/FeatureGrid';
import InventoryControlShowcase from '@/components/InventoryControlShowcase';
import InsightsReportingShowcase from '@/components/InsightsReportingShowcase';
import PricingCardSection from '@/components/PricingCardSection'; // Import the new component
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <FeatureGrid />
        <InventoryControlShowcase />
        <InsightsReportingShowcase />
        <PricingCardSection /> {/* Add the new component here */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;