"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Scan } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"; // Import Button
import { ArrowRight } from "lucide-react"; // Import ArrowRight

const InventoryControlShowcase = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.2);

  const handleGetStartedClick = () => {
    window.location.href = "https://app.fortressinventory.com";
  };

  return (
    <section className="py-20 px-6 bg-transparent text-foreground">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className={cn(
          "md:w-1/2 text-center md:text-left",
          "opacity-0 translate-y-10",
          isVisible && "animate-slide-in-from-bottom animation-delay-100"
        )}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Eliminate Stockouts & Overstock: Intelligent Inventory Control</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Stop losing money to inaccurate stock. Our intelligent system provides real-time visibility, automated reorder alerts, and optimized picking bins, ensuring you always have the right stock at the right time, preventing waste and maximizing profit.
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
          "md:w-1/2 flex justify-center md:justify-end",
          "opacity-0 translate-y-10",
          isVisible && "animate-slide-in-from-bottom animation-delay-300"
        )}>
          <Card className="w-full max-w-md bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 glow-shadow card-3d-hover"> {/* Updated card styling */}
            <CardHeader className="flex flex-row items-center justify-between p-0 mb-4">
              <div className="flex items-center space-x-2">
                <Package className="h-6 w-6 text-secondary" /> {/* Updated icon color */}
                <CardTitle className="text-xl font-semibold text-primary">Product A123</CardTitle>
              </div>
              <span className="text-sm text-muted-foreground">SKU: #INV456</span>
            </CardHeader>
            <CardContent className="p-0 space-y-2">
              <div className="flex justify-between text-foreground">
                <span>Current Stock:</span>
                <span className="font-medium text-foreground">150 units</span>
              </div>
              <div className="flex justify-between text-foreground">
                <span>Location:</span>
                <span className="font-medium text-foreground">Warehouse A, Bin 3B</span>
              </div>
              <div className="flex justify-between text-foreground">
                <span>Last Updated:</span>
                <span className="font-medium text-foreground">2 mins ago</span>
              </div>
              <div className="bg-accent/20 text-accent text-center py-2 rounded-md mt-4 glow-shadow"> {/* Updated background and text color */}
                <Scan className="inline-block h-4 w-4 mr-2" /> Ready for picking
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InventoryControlShowcase;