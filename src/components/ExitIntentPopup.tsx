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
import { useIsMobile } from "@/hooks/use-mobile";

const POPUP_COOLDOWN_MS = 24 * 60 * 60 * 1000; // 24 hours
const LIFETIME_DEAL_COOLDOWN_MS = 7 * 24 * 60 * 60 * 1000; // 7 days for lifetime deal

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const hasShownPopupRecently = useCallback((key: string, cooldown: number) => {
    const lastShown = localStorage.getItem(key);
    if (!lastShown) return false;
    const lastShownTime = parseInt(lastShown, 10);
    return Date.now() - lastShownTime < cooldown;
  }, []);

  const showPopup = useCallback(() => {
    // Only show if neither this popup nor the lifetime deal popup has been shown recently
    if (!hasShownPopupRecently("exitIntentLastShown", POPUP_COOLDOWN_MS) &&
        !hasShownPopupRecently("lifetimeDealLastShown", LIFETIME_DEAL_COOLDOWN_MS)) {
      setIsOpen(true);
      localStorage.setItem("exitIntentLastShown", Date.now().toString());
    }
  }, [hasShownPopupRecently]);

  const handleMouseLeave = useCallback(
    (event: MouseEvent) => {
      // Only trigger on desktop when mouse leaves the top of the viewport
      if (!isMobile && event.clientY < 10) {
        showPopup();
      }
    },
    [isMobile, showPopup],
  );

  useEffect(() => {
    if (!isMobile) {
      document.addEventListener("mouseleave", handleMouseLeave);
    }
    // Removed mobile delay trigger as per user request for strict exit-intent

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isMobile, handleMouseLeave, showPopup]);

  const handleGetStartedClick = () => {
    window.location.href = "https://app.fortressinventory.com";
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-[90vw] sm:max-w-[425px] p-6 bg-card rounded-lg shadow-2xl border border-border/50 glow-shadow"> {/* Added max-w-[90vw] for better mobile fit */}
        <DialogHeader className="text-center">
          <DialogTitle className="text-3xl font-bold text-primary mb-2">
            Wait! Don't Miss Out!
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-lg">
            Ready to revolutionize your inventory? Start your
            <span className="font-extrabold text-accent"> 14-day Free Trial</span> today!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <p className="text-center text-foreground">
            Cancel anytime or stay on the free tier. No obligations.
          </p>
          <Button
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-6 py-3 rounded-full transition-all duration-300 ease-in-out glow-shadow"
            onClick={handleGetStartedClick}
          >
            Start Your Free Trial Now!
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;