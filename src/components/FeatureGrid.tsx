"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Package, BarChart, ShieldCheck, Zap, TrendingUp, Users } from "lucide-react";

const features = [
  {
    icon: <Package className="h-8 w-8 text-customPurple" />,
    title: "Real-time Tracking",
    description: "Monitor your inventory levels and movements instantly, preventing stockouts and overstocking.",
  },
  {
    icon: <BarChart className="h-8 w-8 text-customPurple" />,
    title: "Advanced Analytics",
    description: "Gain deep insights into your inventory performance with customizable reports and dashboards.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-customPurple" />,
    title: "Secure & Reliable",
    description: "Your data is protected with industry-leading security measures and robust backup systems.",
  },
  {
    icon: <Zap className="h-8 w-8 text-customPurple" />,
    title: "Automated Workflows",
    description: "Automate routine tasks like reordering and reporting to save time and reduce errors.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-customPurple" />,
    title: "Scalable Solutions",
    description: "Fortress grows with your business, adapting to your evolving inventory needs.",
  },
  {
    icon: <Users className="h-8 w-8 text-customPurple" />,
    title: "User-friendly Interface",
    description: "An intuitive design ensures quick adoption and efficient daily operations for your team.",
  },
];

const FeatureGrid = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-950 to-black text-white">
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Unlock Your Inventory's Full Potential</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Fortress provides the tools you need to manage your inventory with precision and confidence.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2">
            <CardHeader className="flex flex-col items-center text-center p-0 mb-4">
              <div className="p-4 bg-customPurple/10 rounded-full mb-4 animate-pulse-hover">
                {feature.icon}
              </div>
              <CardTitle className="text-2xl font-semibold text-foreground mb-2">
                {feature.title}
              </CardTitle>
              <CardDescription className="text-gray-300 text-base">
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