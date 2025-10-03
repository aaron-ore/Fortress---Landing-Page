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
const MOBILE_TRIGGER_DELAY_MS = 15 * 1000; // 15 seconds

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const hasShownPopupRecently = useCallback(() => {
    const lastShown = localStorage.getItem("exitIntentLastShown");
    if (!lastShown) return false;
    const lastShownTime = parseInt(lastShown, 10);
    return Date.now() - lastShownTime < POPUP_COOLDOWN_MS;
  }, []);

  const showPopup = useCallback(() => {
    if (!hasShownPopupRecently()) {
      setIsOpen(true);
      localStorage.setItem("exitIntentLastShown", Date.now().toString());
    }
  }, [hasShownPopupRecently]);

  const handleMouseLeave = useCallback(
    (event: MouseEvent) => {
      if (!isMobile && event.clientY < 10) { // Detects if mouse leaves top of viewport
        showPopup();
      }
    },
    [isMobile, showPopup],
  );

  useEffect(() => {
    if (!isMobile) {
      document.addEventListener("mouseleave", handleMouseLeave);
    } else {
      // For mobile, trigger after a delay
      const timer = setTimeout(showPopup, MOBILE_TRIGGER_DELAY_MS);
      return () => clearTimeout(timer);
    }

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isMobile, handleMouseLeave, showPopup]);

  const handleGetStartedClick = () => {
    window.location.href = "https://app.fortressinventory.com";
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px] p-6 bg-black backdrop-blur-lg rounded-lg shadow-2xl border border-primary/50">
        <DialogHeader className="text-center">
          <DialogTitle className="text-3xl font-bold text-white mb-2">
            Wait! Don't Miss Out!
          </DialogTitle>
          <DialogDescription className="text-foreground text-lg">
            Ready to revolutionize your inventory? Start your
            <span className="font-extrabold text-accent"> 14-day Free Trial</span> today!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <p className="text-center text-foreground">
            Cancel anytime or stay on the free tier. No obligations.
          </p>
          <Button
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-6 py-3 rounded-md transition-all duration-300 ease-in-out"
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