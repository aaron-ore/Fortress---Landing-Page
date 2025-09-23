"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

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
    buttonText: "Choose Standard",
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
    buttonText: "Go Pro",
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
      { name: "Dedicated Support", included: true },
    ],
    buttonText: "Contact Sales",
  },
];

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-950 to-black text-white">
        <div className="container mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-md">
            Flexible Pricing for Every Business
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the plan that best fits your inventory management needs, from startups to large enterprises.
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className="bg-background/10 backdrop-blur-xl p-6 rounded-xl shadow-lg flex flex-col justify-between border border-white/10">
              <CardHeader className="text-center p-0 mb-6">
                <CardTitle className="text-3xl font-bold text-customPurple mb-2">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-gray-300 text-4xl font-extrabold mb-1"> {/* Increased font size and boldness */}
                  {plan.monthlyCost}
                </CardDescription>
                <p className="text-gray-400 text-sm mt-1">{plan.inventoryLimit}</p>
                <p className="text-gray-400 text-sm">{plan.userLimit}</p> {/* Display user limit */}
              </CardHeader>
              <CardContent className="p-0 flex-grow mb-8">
                <ul className="space-y-3 text-left">
                  {plan.features.map((feature, featIndex) => (
                    <li key={featIndex} className="flex items-center text-base">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
                      )}
                      <span className={feature.included ? "text-white" : "text-gray-500 line-through"}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <Button className="w-full bg-customPurple hover:bg-customPurple/90 text-primary-foreground text-lg px-6 py-3 rounded-md transition-all duration-300 ease-in-out">
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