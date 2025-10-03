"use client";

import React from "react";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface CheckmarkAnimationProps {
  className?: string;
  size?: number;
}

const CheckmarkAnimation: React.FC<CheckmarkAnimationProps> = ({ className, size = 32 }) => {
  return (
    <CheckCircle
      className={cn(
        "text-green-500 animate-scale-in", // Assuming a green color for success
        className
      )}
      size={size}
    />
  );
};

export default CheckmarkAnimation;