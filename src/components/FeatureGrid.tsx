"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Package, BarChart, ShieldCheck, Zap, TrendingUp, Users, Truck, Smartphone, Bot, Lock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation"; // Import the new hook
import { cn } from "@/lib/utils"; // Import cn for conditional class names

const features = [
  {
    icon: <Package className="h-8 w-8 text-secondary" />, // Changed icon color
    title: "Intelligent Inventory Control",
    description: "Gain real-time visibility and smart stock management with automated alerts, optimized bins, and effortless organization to prevent waste and shortages.",
  },
  {
    icon: <Truck className="h-8 w-8 text-secondary" />, // Changed icon color
    title: "Streamlined Order Fulfillment",
    description: "Manage sales and purchase orders with intuitive Kanban boards, accelerate workflows, and generate professional documentation for timely deliveries.",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-secondary" />, // Changed icon color
    title: "Empowered Warehouse Operations",
    description: "Equip your team with mobile-optimized tools for rapid item lookup, precise cycle counts, efficient picking, and seamless stock transfers.",
  },
  {
    icon: <BarChart className="h-8 w-8 text-secondary" />, // Changed icon color
    title: "Actionable Insights & Smart Reporting",
    description: "Access comprehensive dashboards, deep-dive analytics, and AI-powered summaries to quickly grasp trends and make informed, strategic decisions.",
  },
  {
    icon: <Bot className="h-8 w-8 text-secondary" />, // Changed icon color
    title: "Automate for Growth",
    description: "Set up powerful custom automation rules to handle repetitive tasks, freeing your team to focus on strategic initiatives and business expansion.",
  },
  {
    icon: <Lock className="h-8 w-8 text-secondary" />, // Changed icon color
    title: "Secure & Scalable Platform",
    description: "Benefit from robust user management, customizable experiences, and guided onboarding on a platform designed to grow securely with your business.",
  },
];

const FeatureGrid = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.2); // Use the hook

  return (
    <section className="py-20 px-6 bg-transparent text-foreground">
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Unlock Your Inventory's Full Potential</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Fortress provides the tools you need to manage your inventory with precision and confidence.
        </p>
        {/* Removed the image div as per the new design */}
      </div>

      <div ref={ref} className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card 
            key={index} 
            className={cn(
              "bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 glow-shadow hover:glow-shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2",
              "opacity-0 translate-y-10", // Initial hidden state
              isVisible && `opacity-100 translate-y-0 animate-slide-up animation-delay-${index * 100}` // Animate when visible
            )} // Updated card styling
            style={{ animationDelay: `${index * 100}ms` }} // Apply delay dynamically
          >
            <CardHeader className="flex flex-col items-center text-center p-0 mb-4">
              <div className="p-4 bg-secondary/10 rounded-full mb-4 animate-pulse-hover"> {/* Updated background color */}
                {feature.icon}
              </div>
              <CardTitle className="text-2xl font-semibold text-primary mb-2">
                {feature.title}
              </CardTitle>
              <CardDescription className="text-muted-foreground text-base"> {/* Updated text color */}
                {feature.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;