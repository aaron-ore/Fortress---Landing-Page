"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Award, Heart, TrendingUp, ShieldCheck, Lightbulb, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"; // Import Button
import { ArrowRight } from "lucide-react"; // Import ArrowRight

const reasons = [
  {
    icon: <Award className="h-8 w-8 text-secondary" />, // Changed icon color
    title: "Unmatched Precision & Control",
    description: "Eliminate costly guesswork. Fortress delivers real-time, granular visibility into every item, ensuring you always know what you have, where it is, and its exact value. This precision means peace of mind and perfect stock accuracy, every time.",
  },
  {
    icon: <Heart className="h-8 w-8 text-secondary" />, // Changed icon color
    title: "Designed for Your Success",
    description: "Software that works for you, not against you. Built for businesses like yours, Fortress features an intuitive interface and powerful tools that simplify complex inventory tasks, making your daily operations smoother, more efficient, and delivering immediate results.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-secondary" />, // Changed icon color
    title: "Drive Growth, Not Just Manage Stock",
    description: "Beyond tracking, we drive your growth. Fortress empowers your business with smart reorder alerts, actionable insights, and AI-powered reporting, helping you optimize purchasing, drastically reduce waste, and uncover new growth opportunities for improved profitability.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-secondary" />, // Changed icon color
    title: "Reliable & Secure Platform",
    description: "Your data is your business. We prioritize robust security measures and a stable, scalable platform that grows with you. Our customers trust Fortress to keep their critical inventory information safe and accessible, ensuring business continuity.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-secondary" />, // Changed icon color
    title: "Innovative & Future-Ready",
    description: "We're constantly evolving, integrating cutting-edge features like AI-powered summaries and seamless integrations to keep you ahead of the curve. Our commitment to innovation means you'll always have the best tools at your fingertips.",
  },
  {
    icon: <Users className="h-8 w-8 text-secondary" />, // Changed icon color
    title: "Exceptional Support & Community",
    description: "You're not just a number. Our dedicated support team is here to ensure your success, and our growing community provides valuable insights and shared experiences. Customers appreciate our responsive help and the feeling of being part of a supportive network.",
  },
];

const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.2);

  const handleGetStartedClick = () => {
    window.location.href = "https://app.fortressinventory.com";
  };

  return (
    <section className="py-20 px-6 bg-transparent text-foreground">
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Why Businesses Thrive with Fortress Inventory</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Beyond software, we're your strategic partner. Discover how Fortress Inventory empowers businesses to overcome challenges, achieve operational excellence, and secure their future.
        </p>
      </div>

      <div ref={ref} className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <Card 
            key={index} 
            className={cn(
              "bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 glow-shadow card-3d-hover", // Added card-3d-hover
              "opacity-0 translate-y-10", // Initial hidden state
              isVisible && `animate-slide-in-from-bottom animation-delay-${index * 100}` // Animate when visible
            )} 
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader className="flex flex-col items-center text-center p-0 mb-4">
              <div className="p-4 bg-secondary/10 rounded-full mb-4 animate-pulse-hover"> {/* Updated background color */}
                {reason.icon}
              </div>
              <CardTitle className="text-2xl font-semibold text-primary mb-2">
                {reason.title}
              </CardTitle>
              <CardDescription className="text-muted-foreground text-base"> {/* Updated text color */}
                {reason.description}
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

export default WhyChooseUs;