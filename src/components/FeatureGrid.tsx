"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Package, BarChart, ShieldCheck, Zap, TrendingUp, Users, Truck, Smartphone, Bot, Lock } from "lucide-react";

const features = [
  {
    icon: <Package className="h-8 w-8 text-primary" />,
    title: "Intelligent Inventory Control",
    description: "Gain real-time visibility and smart stock management with automated alerts, optimized bins, and effortless organization to prevent waste and shortages.",
  },
  {
    icon: <Truck className="h-8 w-8 text-primary" />,
    title: "Streamlined Order Fulfillment",
    description: "Manage sales and purchase orders with intuitive Kanban boards, accelerate workflows, and generate professional documentation for timely deliveries.",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: "Empowered Warehouse Operations",
    description: "Equip your team with mobile-optimized tools for rapid item lookup, precise cycle counts, efficient picking, and seamless stock transfers.",
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: "Actionable Insights & Smart Reporting",
    description: "Access comprehensive dashboards, deep-dive analytics, and AI-powered summaries to quickly grasp trends and make informed, strategic decisions.",
  },
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: "Automate for Growth",
    description: "Set up powerful custom automation rules to handle repetitive tasks, freeing your team to focus on strategic initiatives and business expansion.",
  },
  {
    icon: <Lock className="h-8 w-8 text-primary" />,
    title: "Secure & Scalable Platform",
    description: "Benefit from robust user management, customizable experiences, and guided onboarding on a platform designed to grow securely with your business.",
  },
];

const FeatureGrid = () => {
  return (
    <section className="py-20 px-6 bg-background text-foreground">
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Unlock Your Inventory's Full Potential</h2>
        <p className="text-xl text-foreground max-w-3xl mx-auto">
          Fortress provides the tools you need to manage your inventory with precision and confidence.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="bg-card/10 backdrop-blur-xl p-6 rounded-xl shadow-lg shadow-white-glow hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2">
            <CardHeader className="flex flex-col items-center text-center p-0 mb-4">
              <div className="p-4 bg-primary/10 rounded-full mb-4 animate-pulse-hover">
                {feature.icon}
              </div>
              <CardTitle className="text-2xl font-semibold text-primary mb-2">
                {feature.title}
              </CardTitle>
              <CardDescription className="text-foreground text-base">
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