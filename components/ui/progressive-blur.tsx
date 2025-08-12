import React from "react";

interface ProgressiveBlurProps {
  className?: string;
  direction?: "left" | "right";
  blurIntensity?: number; // multiplies base blur amount
}

export default function ProgressiveBlur({
  className,
  direction = "left",
  blurIntensity = 1,
}: ProgressiveBlurProps) {
  const blurPx = Math.max(0, blurIntensity * 8);
  const background =
    direction === "left"
      ? "linear-gradient(to right, var(--background), transparent)"
      : "linear-gradient(to left, var(--background), transparent)";

  const style: React.CSSProperties = {
    background,
    backdropFilter: `blur(${blurPx}px)`,
    WebkitBackdropFilter: `blur(${blurPx}px)`,
    pointerEvents: "none",
  };

  return <div className={className} style={style} />;
}