"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Package, BarChart, ShieldCheck, Zap, TrendingUp, Users, Truck, Smartphone, Bot, Lock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation"; // Import the new hook
import { cn } from "@/lib/utils"; // Import cn for conditional class names
import { Button } from "@/components/ui/button"; // Import Button
import { ArrowRight } from "lucide-react"; // Import ArrowRight

const features = [
  {
    icon: <Package className="h-8 w-8 text-secondary" />, // Changed icon color
    title: "Intelligent Inventory Control",
    description: "Instead of reacting to problems, predict and prevent them. Our real-time data analysis means you always know exactly what's in stock, where it is, and what's moving, so you can make smarter decisions, faster, preventing waste and shortages.",
  },
  {
    icon: <Truck className="h-8 w-8 text-secondary" />, // Changed icon color
    title: "Streamlined Order Fulfillment",
    description: "Accelerate your entire order process. Manage sales and purchase orders with intuitive Kanban boards, ensuring faster fulfillment, fewer errors, and professional documentation for every timely delivery.",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-secondary" />, // Changed icon color
    title: "Empowered Warehouse Operations",
    description: "Say goodbye to costly manual errors. Empower your team with mobile-optimized tools and barcode scanning that guarantees accuracy from receiving to shipping, saving you time and money, and boosting efficiency.",
  },
  {
    icon: <BarChart className="h-8 w-8 text-secondary" />, // Changed icon color
    title: "Actionable Insights & Smart Reporting",
    description: "Don't just get data, get insights. Our AI-powered reports summarize complex trends, highlighting opportunities and risks so you can focus on strategic growth, not data interpretation, making informed, strategic decisions.",
  },
  {
    icon: <Bot className="h-8 w-8 text-secondary" />, // Changed icon color
    title: "Automate for Growth",
    description: "Free your team from repetitive tasks. Set up powerful custom automation rules to handle everything from low-stock alerts to purchase order generation, allowing your team to focus on strategic initiatives and business expansion.",
  },
  {
    icon: <Lock className="h-8 w-8 text-secondary" />, // Changed icon color
    title: "Secure & Scalable Platform",
    description: "Grow with confidence. Our robust, scalable platform offers secure user management, customizable experiences, and guided onboarding, ensuring your data is safe and your system evolves with your business.",
  },
];

const FeatureGrid = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.2); // Use the hook

  const handleGetStartedClick = () => {
    window.location.href = "https://app.fortressinventory.com";
  };

  return (
    <section id="feature-grid-section" className="py-20 px-6 bg-transparent text-foreground">
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Transform Your Operations. See Real Results.</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Beyond just managing stock, Fortress empowers you to predict, prevent, and profit. Discover how our intelligent features translate into tangible improvements for your business.
        </p>
      </div>

      <div ref={ref} className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card 
            key={index} 
            className={cn(
              "bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 glow-shadow card-3d-hover", // Added card-3d-hover
              "opacity-0 translate-y-10", // Initial hidden state
              isVisible && `animate-slide-in-from-bottom animation-delay-${index * 100}` // Animate when visible
            )} 
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

      <div className="container mx-auto text-center mt-16">
        <Button
          size="lg"
          className={cn(
            "bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-full shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 group glow-shadow",
            "opacity-0 translate-y-10", // Initial hidden state
            isVisible && "animate-slide-in-from-bottom animation-delay-700" // Animate when visible
          )}
          onClick={handleGetStartedClick}
        >
          Start Your Free 14-Day Trial <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
    </section>
  );
};

export default FeatureGrid;