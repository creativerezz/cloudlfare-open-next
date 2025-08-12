"use client";

import React, { useMemo, useState } from "react";

interface InfiniteSliderProps {
  children: React.ReactNode;
  speed?: number; // seconds per full loop
  speedOnHover?: number; // seconds per loop when hovered
  gap?: number; // pixel gap between items
  className?: string;
}

function classNames(...values: Array<string | undefined | false>) {
  return values.filter(Boolean).join(" ");
}

type CSSPropertiesWithVars = React.CSSProperties & {
  [key: `--${string}`]: string | number;
};

export default function InfiniteSlider({
  children,
  speed = 40,
  speedOnHover,
  gap = 112,
  className,
}: InfiniteSliderProps) {
  const items = useMemo(() => React.Children.toArray(children), [children]);
  const [durationSec, setDurationSec] = useState<number>(speed);

  const handleMouseEnter = () => {
    if (typeof speedOnHover === "number" && speedOnHover > 0) {
      setDurationSec(speedOnHover);
    }
  };

  const handleMouseLeave = () => {
    setDurationSec(speed);
  };

  const containerStyle: CSSPropertiesWithVars = {
    ["--gap"]: `${gap}px`,
    ["--duration"]: `${durationSec}s`,
  };

  return (
    <div
      className={classNames("overflow-hidden w-full", className)}
      style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex w-max"
        style={{
          display: "flex",
          width: "max-content",
        }}
      >
        <div
          className="flex items-center"
          style={{ gap: `var(--gap)` }}
        >
          {items}
        </div>
        <div
          className="flex items-center"
          style={{ gap: `var(--gap)` }}
          aria-hidden
        >
          {items}
        </div>
      </div>

      <style jsx>{`
        .flex.w-max > div {
          animation: infinite-scroll var(--duration) linear infinite;
        }
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - var(--gap) / 2));
          }
        }
      `}</style>
    </div>
  );
}