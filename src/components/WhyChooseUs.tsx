"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Award, Heart, TrendingUp, ShieldCheck, Lightbulb, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const reasons = [
  {
    icon: <Award className="h-8 w-8 text-secondary" />, // Changed icon color
    title: "Unmatched Precision & Control",
    description: "Say goodbye to guesswork. Fortress provides real-time, granular visibility into every item, ensuring you always know what you have, where it is, and its exact value. Our customers love the peace of mind that comes with perfect stock accuracy.",
  },
  {
    icon: <Heart className="h-8 w-8 text-secondary" />, // Changed icon color
    title: "Designed for Your Success",
    description: "We built Fortress with businesses like yours in mind. Our intuitive interface and powerful features are crafted to simplify complex inventory tasks, making your daily operations smoother and more efficient. Our users consistently praise how easy it is to get started and see immediate results.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-secondary" />, // Changed icon color
    title: "Drive Growth, Not Just Manage Stock",
    description: "Fortress isn't just about counting items; it's about empowering your business. With smart reorder alerts, actionable insights, and AI-powered reporting, we help you optimize purchasing, reduce waste, and identify growth opportunities. Our clients report significant improvements in profitability and operational efficiency.",
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

  return (
    <section className="py-20 px-6 bg-transparent text-foreground">
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Why Choose Fortress Inventory?</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We're more than just an inventory system; we're your partner in operational excellence. Discover why businesses trust Fortress to transform their inventory management.
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
    </section>
  );
};

export default WhyChooseUs;