"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Search, Smartphone, Lock, TrendingUp, Lightbulb, Rocket } from "lucide-react";

const websiteEssentials = [
  {
    icon: <Search className="h-8 w-8 text-customPurple" />,
    title: "SEO Optimization",
    description: "Ensure your website ranks high on search engines, making it easy for potential customers to find you.",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-customPurple" />,
    title: "Responsive Design",
    description: "Provide a seamless user experience across all devices, from desktops to mobile phones.",
  },
  {
    icon: <Lock className="h-8 w-8 text-customPurple" />,
    title: "Robust Security",
    description: "Protect your website and user data with industry-standard security measures and protocols.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-customPurple" />,
    title: "Analytics & Tracking",
    description: "Understand your audience and website performance with integrated analytics for data-driven decisions.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-customPurple" />,
    title: "Clear Call-to-Actions",
    description: "Guide your visitors effectively with prominent and persuasive calls-to-action that drive conversions.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-customPurple" />,
    title: "Fast Performance",
    description: "Optimize loading times and responsiveness to keep users engaged and reduce bounce rates.",
  },
];

const WebsiteEssentials = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-black to-gray-950 text-white">
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">What Every Modern Website Needs</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Beyond inventory, a strong online presence is crucial. Here are the foundational elements for digital success.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {websiteEssentials.map((item, index) => (
          <Card key={index} className="bg-background/10 backdrop-blur-xl p-6 rounded-xl shadow-lg shadow-white-glow hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2">
            <CardHeader className="flex flex-col items-center text-center p-0 mb-4">
              <div className="p-4 bg-customPurple/10 rounded-full mb-4 animate-pulse-hover">
                {item.icon}
              </div>
              <CardTitle className="text-2xl font-semibold text-customPurple mb-2">
                {item.title}
              </CardTitle>
              <CardDescription className="text-gray-300 text-base">
                {item.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default WebsiteEssentials;