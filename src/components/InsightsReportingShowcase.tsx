"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"; // Import Button
import { ArrowRight } from "lucide-react"; // Import ArrowRight

const InsightsReportingShowcase = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.2);

  const handleGetStartedClick = () => {
    window.location.href = "https://app.fortressinventory.com/signup"; // Updated link
  };

  return (
    <section className="py-20 px-6 bg-transparent text-foreground">
      <div className="container mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-12">
        <div className={cn(
          "md:w-1/2 text-center md:text-left",
          "opacity-0 translate-y-10",
          isVisible && "animate-slide-in-from-bottom animation-delay-100"
        )}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Make Smarter Decisions, Faster: Actionable Insights & AI Reporting</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Transform complex data into clear opportunities. Our comprehensive dashboards, deep-dive analytics, and AI-powered summaries cut through the noise, allowing you to quickly grasp trends and make informed, strategic decisions that drive growth.
          </p>
          <Button
            size="lg"
            className={cn(
              "bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-full shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 group glow-shadow",
              "opacity-0 translate-y-10", // Initial hidden state
              isVisible && "animate-slide-in-from-bottom animation-delay-400" // Animate when visible
            )}
            onClick={handleGetStartedClick}
          >
            Start Your Free 14-Day Trial <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
        <div ref={ref} className={cn(
          "md:w-1/2 flex justify-center md:justify-start",
          "opacity-0 translate-y-10",
          isVisible && "animate-slide-in-from-bottom animation-delay-300"
        )}>
          <Card className="w-full max-w-md bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 glow-shadow card-3d-hover"> {/* Updated card styling */}
            <CardHeader className="flex flex-row items-center justify-between p-0 mb-4">
              <div className="flex items-center space-x-2">
                <BarChart className="h-6 w-6 text-secondary" /> {/* Updated icon color */}
                <CardTitle className="text-xl font-semibold text-primary">Sales Performance</CardTitle>
              </div>
              <span className="text-sm text-muted-foreground">Q3 2024</span>
            </CardHeader>
            <CardContent className="p-0 space-y-2">
              <div className="flex justify-between text-foreground">
                <span>Total Revenue:</span>
                <span className="font-medium text-accent">$125,000</span> {/* Updated text color */}
              </div>
              <div className="flex justify-between text-foreground">
                <span>Growth (YoY):</span>
                <span className="font-medium text-accent flex items-center"> {/* Updated text color */}
                  +18% <TrendingUp className="h-4 w-4 ml-1" />
                </span>
              </div>
              <div className="flex justify-between text-foreground">
                <span>Top Product:</span>
                <span className="font-medium text-foreground">Widget Pro</span>
              </div>
              <div className="bg-secondary/20 text-secondary text-center py-2 rounded-md mt-4 glow-shadow"> {/* Updated background and text color */}
                AI Summary: Strong growth, focus on Widget Pro.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InsightsReportingShowcase;