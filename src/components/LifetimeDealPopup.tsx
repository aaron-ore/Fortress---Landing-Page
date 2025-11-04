"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Tag, Clock } from "lucide-react"; // Icons for visual appeal

const LIFETIME_DEAL_COOLDOWN_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

const LifetimeDealPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hasShownPopupRecently = useCallback((key: string, cooldown: number) => {
    const lastShown = localStorage.getItem(key);
    if (!lastShown) return false;
    const lastShownTime = parseInt(lastShown, 10);
    return Date.now() - lastShownTime < cooldown;
  }, []);

  const showPopup = useCallback(() => {
    // Only show if this popup hasn't been shown recently
    if (!hasShownPopupRecently("lifetimeDealLastShown", LIFETIME_DEAL_COOLDOWN_MS)) {
      setIsOpen(true);
      localStorage.setItem("lifetimeDealLastShown", Date.now().toString());
    }
  }, [hasShownPopupRecently]);

  useEffect(() => {
    const handleScroll = () => {
      const featureGridSection = document.getElementById("feature-grid-section");
      if (featureGridSection && !isOpen) {
        const rect = featureGridSection.getBoundingClientRect();
        // Trigger when the top of the feature grid section is halfway up the viewport
        if (rect.top < window.innerHeight / 2) {
          showPopup();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen, showPopup]);

  const handleClaimDealClick = () => {
    window.location.href = "https://app.fortressinventory.com/lifetime-deal"; // Placeholder for a specific deal page
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-card p-8"> {/* Simplified styling for debugging */}
        {/* Removed the inner background gradient for testing */}

        <DialogHeader className="text-center">
          <Tag className="h-12 w-12 text-accent mx-auto mb-4 animate-pulse-hover" />
          <DialogTitle className="text-4xl font-extrabold text-primary mb-3 leading-tight">
            Exclusive Lifetime Deal!
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-lg mb-6">
            Unlock Fortress Inventory forever with a single, one-time payment.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="text-center">
            <p className="text-5xl font-extrabold text-accent mb-2 drop-shadow-lg">
              $249
            </p>
            <p className="text-lg text-foreground font-semibold">
              One-Time Payment
            </p>
          </div>
          <div className="flex items-center justify-center text-destructive font-bold text-base bg-destructive/10 rounded-full py-2 px-4 max-w-xs mx-auto animate-pulse">
            <Clock className="h-5 w-5 mr-2" /> Limited Time Offer!
          </div>
          <Button
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-xl px-8 py-4 rounded-full transition-all duration-300 ease-in-out glow-shadow transform hover:-translate-y-1 hover:scale-105"
            onClick={handleClaimDealClick}
          >
            Claim Your Lifetime Access Now!
          </Button>
          <p className="text-center text-sm text-muted-foreground mt-2">
            Don't miss out on this incredible opportunity.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LifetimeDealPopup;