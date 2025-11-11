"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const pricingPlans = [
  {
    name: "Free Plan",
    monthlyCost: "Free",
    inventoryLimit: "Up to 25 Inventory Items",
    userLimit: "1 User",
    features: [
      { name: "Basic Inventory Management", included: true },
      { name: "Dashboard Overview", included: true },
      { name: "Basic Order Management", included: true },
      { name: "Customer & Vendor Management", included: false },
      { name: "Advanced Reporting", included: false },
      { name: "AI Summary for Reports", included: false },
      { name: "QuickBooks Integration", included: false },
      { name: "Shopify Integration", included: false },
      { name: "Automation Engine", included: false },
      { name: "Dedicated Support", included: false },
    ],
    buttonText: "Get Started Free",
  },
  {
    name: "Standard Plan",
    monthlyCost: "$59/month",
    inventoryLimit: "Up to 500 Inventory Items",
    userLimit: "2 Users (+$15/month for additional user)",
    features: [
      { name: "Basic Inventory Management", included: true },
      { name: "Dashboard Overview", included: true },
      { name: "Basic Order Management", included: true },
      { name: "Customer & Vendor Management", included: true },
      { name: "Advanced Reporting", included: false },
      { name: "AI Summary for Reports", included: false },
      { name: "QuickBooks Integration", included: false },
      { name: "Shopify Integration", included: false },
      { name: "Automation Engine", included: false },
      { name: "Dedicated Support", included: false },
    ],
    buttonText: "14 days Free Trial",
  },
  {
    name: "Pro Plan",
    monthlyCost: "$125/month",
    inventoryLimit: "Up to 1000 Inventory Items",
    userLimit: "5 Users (+$10/month for each additional user)",
    features: [
      { name: "Basic Inventory Management", included: true },
      { name: "Dashboard Overview", included: true },
      { name: "Basic Order Management", included: true },
      { name: "Customer & Vendor Management", included: true },
      { name: "Advanced Reporting", included: true },
      { name: "AI Summary for Reports (Coming Soon)", included: true },
      { name: "QuickBooks Integration (Coming Soon)", included: true },
      { name: "Shopify Integration (Coming Soon)", included: true },
      { name: "Automation Engine", included: false },
      { name: "Dedicated Support", included: false },
    ],
    buttonText: "14 days Free Trial",
  },
  {
    name: "Enterprise Plan",
    monthlyCost: "Contact Sales",
    inventoryLimit: "Unlimited Inventory Items",
    userLimit: "Unlimited Users",
    features: [
      { name: "Basic Inventory Management", included: true },
      { name: "Dashboard Overview", included: true },
      { name: "Unlimited Inventory Items", included: true },
      { name: "Basic Order Management", included: true },
      { name: "Customer & Vendor Management", included: true },
      { name: "Advanced Reporting", included: true },
      { name: "AI Summary for Reports (Coming Soon)", included: true },
      { name: "QuickBooks Integration (Coming Soon)", included: true },
      { name: "Shopify Integration (Coming Soon)", included: true },
      { name: "Automation Engine", included: true },
      { name: "Priority Support", included: true }, // Changed from "Dedicated Support"
    ],
    buttonText: "14 days Free Trial",
  },
];

const PricingPage = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.2);

  const handleButtonClick = () => {
    window.location.href = "https://app.fortressinventory.com/signup"; // Updated link
  };

  return (
    <div className="min-h-screen bg-transparent text-foreground">
      <Navbar />
      <main className="pt-32 pb-20 px-6 bg-transparent text-foreground">
        <div className="container mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-md text-primary">
            Flexible Pricing for Every Business
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that best fits your inventory management needs, from startups to large enterprises.
          </p>
        </div>

        <div ref={ref} className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={cn(
                "bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 glow-shadow card-3d-hover flex flex-col justify-between", // Added card-3d-hover
                "opacity-0 translate-y-10", // Initial hidden state
                isVisible && `animate-slide-in-from-bottom animation-delay-${index * 100}` // Animate when visible
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center p-0 mb-6">
                <CardTitle className="text-3xl font-bold text-primary mb-2">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-foreground text-4xl font-extrabold mb-1">
                  {plan.monthlyCost}
                </CardDescription>
                <p className="text-muted-foreground text-sm mt-1">{plan.inventoryLimit}</p>
                <p className="text-muted-foreground text-sm">{plan.userLimit}</p>
              </CardHeader>
              <CardContent className="p-0 flex-grow mb-8">
                <ul className="space-y-3 text-left">
                  {plan.features.map((feature, featIndex) => (
                    <li key={featIndex} className="flex items-center text-base">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground mr-3 flex-shrink-0" />
                      )}
                      <span className={feature.included ? "text-foreground" : "text-muted-foreground"}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <Button 
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-6 py-3 rounded-full transition-all duration-300 ease-in-out glow-shadow"
                onClick={handleButtonClick}
              >
                {plan.buttonText}
              </Button>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;