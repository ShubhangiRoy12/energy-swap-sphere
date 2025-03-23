
import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: "blue" | "green" | "none";
  hoverEffect?: boolean;
  animation?: "fade-in" | "scale-up" | "none";
}

const GlassCard = ({
  children,
  className,
  glowColor = "blue",
  hoverEffect = true,
  animation = "none",
  ...props
}: GlassCardProps) => {
  const getGlowClass = () => {
    if (!hoverEffect) return "";
    if (glowColor === "none") return "";
    return glowColor === "green" ? "energy-glow energy-glow-green" : "energy-glow";
  };

  const getAnimationClass = () => {
    switch (animation) {
      case "fade-in":
        return "animate-fade-in";
      case "scale-up":
        return "animate-scale-up";
      default:
        return "";
    }
  };

  return (
    <div
      className={cn(
        "glass-card rounded-xl p-6",
        getGlowClass(),
        getAnimationClass(),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
