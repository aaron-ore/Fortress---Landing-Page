"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Free Plan",
    monthlyCost: "Free",
    description: "Perfect for small businesses and startups to get started.",
    features: [
      "Up to 25 Inventory Items",
      "1 User",
      "Basic Inventory Management",
      "Dashboard Overview",
      "Basic Order Management",
    ],
    buttonText: "Try it for Free",
    buttonLink: "https://app.fortressinventory.com",
    highlight: true,
  },
  {
    name: "Standard Plan",
    monthlyCost: "59", // Changed to number string
    description: "Scale your operations with more features and capacity.",
    features: [
      "Up to 500 Inventory Items",
      "2 Users (+$15/month for additional)",
      "Customer & Vendor Management",
      "Advanced Reporting",
      "Basic Integrations (Coming Soon)",
    ],
    buttonText: "14 days Free Trial",
    buttonLink: "https://app.fortressinventory.com", // Link to the full pricing page
    highlight: false,
  },
  {
    name: "Pro Plan",
    monthlyCost: "125", // New Pro Plan
    description: "Empower your growing business with comprehensive tools.",
    features: [
      "Up to 1000 Inventory Items",
      "5 Users (+$10/month for each additional)",
      "Advanced Reporting",
      "AI Summary for Reports (Coming Soon)",
      "QuickBooks Integration (Coming Soon)",
      "Shopify Integration (Coming Soon)",
    ],
    buttonText: "14 days Free Trial",
    buttonLink: "https://app.fortressinventory.com",
    highlight: false,
  },
  {
    name: "Enterprise Plan",
    monthlyCost: "Contact Sales",
    description: "Tailored solutions for large-scale inventory needs.",
    features: [
      "Unlimited Inventory Items",
      "Unlimited Users",
      "AI Summary for Reports",
      "Automation Engine",
      "Dedicated Support & Onboarding",
    ],
    buttonText: "14 days Free Trial",
    buttonLink: "https://app.fortressinventory.com", // Assuming a contact page exists or will be created
    highlight: false,
  },
];

const PricingCardSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-950 to-black text-white">
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Start with our free plan or choose a tier that grows with your business. No hidden fees, no surprises.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 items-stretch"> {/* Changed to 4 columns */}
        {pricingPlans.map((plan, index) => (
          <Card 
            key={index} 
            className={`bg-background/10 backdrop-blur-xl p-8 rounded-xl shadow-lg shadow-white-glow flex flex-col justify-between border ${plan.highlight ? 'border-customPurple ring-2 ring-customPurple' : 'border-white/10'} hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2`}
          >
            <CardHeader className="text-center p-0 mb-6">
              <CardTitle className="text-3xl font-bold text-customPurple mb-2">
                {plan.name}
              </CardTitle>
              <CardDescription className="text-gray-300 text-lg mb-4">
                {plan.description}
              </CardDescription>
              <p className="text-5xl font-extrabold text-white mb-1">
                {plan.monthlyCost === "Free"
                  ? plan.monthlyCost
                  : plan.monthlyCost === "Contact Sales"
                    ? plan.monthlyCost
                    : `$${plan.monthlyCost}`}
              </p>
              {plan.monthlyCost !== "Free" && plan.monthlyCost !== "Contact Sales" && (
                <p className="text-gray-400 text-sm">per month</p>
              )}
            </CardHeader>
            <CardContent className="p-0 flex-grow mb-8">
              <ul className="space-y-3 text-left">
                {plan.features.map((feature, featIndex) => (
                  <li key={featIndex} className="flex items-center text-base text-gray-200">
                    <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <Button 
              className="w-full bg-customPurple hover:bg-customPurple/90 text-primary-foreground text-lg px-6 py-3 rounded-md transition-all duration-300 ease-in-out"
              onClick={() => window.location.href = plan.buttonLink}
            >
              {plan.buttonText}
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PricingCardSection;