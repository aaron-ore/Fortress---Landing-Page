"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

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
    buttonLink: "https://app.fortressinventory.com/signup", // Updated link
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
    buttonText: "Start Your Free 14-Day Trial",
    buttonLink: "https://app.fortressinventory.com/signup", // Updated link
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
    buttonText: "Start Your Free 14-Day Trial",
    buttonLink: "https://app.fortressinventory.com/signup", // Updated link
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
    buttonLink: "https://app.fortressinventory.com/signup", // Updated link
    highlight: false,
  },
];

const PricingCardSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.2);

  return (
    <section className="py-20 px-6 bg-transparent text-foreground">
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Simple, Transparent Pricing</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Start with our free plan or choose a tier that grows with your business. No hidden fees, no surprises.
        </p>
      </div>

      <div ref={ref} className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 items-stretch">
        {pricingPlans.map((plan, index) => (
          <Card 
            key={index} 
            className={cn(
              `bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/50 flex flex-col justify-between card-3d-hover`, // Added card-3d-hover
              plan.highlight ? 'border-secondary ring-2 ring-secondary glow-shadow-lg' : 'glow-shadow', // Stronger glow for highlighted card
              "opacity-0 translate-y-10", // Initial hidden state
              isVisible && `animate-slide-in-from-bottom animation-delay-${index * 100}` // Animate when visible
            )} 
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader className="text-center p-0 mb-6">
              <CardTitle className="text-3xl font-bold text-primary mb-2">
                {plan.name}
              </CardTitle>
              <CardDescription className="text-muted-foreground text-lg mb-4"> {/* Updated text color */}
                {plan.description}
              </CardDescription>
              <p className="text-5xl font-extrabold text-foreground mb-1">
                {plan.monthlyCost === "Free"
                  ? plan.monthlyCost
                  : plan.monthlyCost === "Contact Sales"
                    ? plan.monthlyCost
                    : `$${plan.monthlyCost}`}
              </p>
              {plan.monthlyCost !== "Free" && plan.monthlyCost !== "Contact Sales" && (
                <p className="text-muted-foreground text-sm">per month</p>
              )}
            </CardHeader>
            <CardContent className="p-0 flex-grow mb-8">
              <ul className="space-y-3 text-left">
                {plan.features.map((feature, featIndex) => (
                  <li key={featIndex} className="flex items-center text-base text-foreground">
                    <Check className="h-5 w-5 text-accent mr-3 flex-shrink-0" /> {/* Updated icon color */}
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <Button 
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-6 py-3 rounded-full shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 group glow-shadow" // Updated button styling
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