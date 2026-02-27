"use client";
import { cn } from "@/lib/utils";
import React from "react";

/**
 * CSS-only replacement for the original Three.js CanvasRevealEffect.
 * Eliminates WebGL dependency entirely — uses pure CSS animations.
 */
export const CanvasRevealEffect = ({
  containerClassName,
  colors = [[0, 255, 255]],
}: {
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
}) => {
  // Convert first color array [r,g,b] to CSS rgb string
  const [r, g, b] = colors[0] ?? [0, 255, 255];
  const primary = `rgb(${r},${g},${b})`;
  const secondary = colors[1]
    ? `rgb(${colors[1][0]},${colors[1][1]},${colors[1][2]})`
    : primary;

  return (
    <div
      className={cn(
        "h-full relative w-full overflow-hidden",
        containerClassName,
      )}
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background: `radial-gradient(ellipse at 30% 40%, ${primary}33 0%, transparent 60%),
                                 radial-gradient(ellipse at 70% 60%, ${secondary}22 0%, transparent 55%)`,
          animation: "pulse 4s ease-in-out infinite alternate",
        }}
      />

      {/* Dot-grid pattern via SVG background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle, ${primary}88 1px, transparent 1px)`,
          backgroundSize: "16px 16px",
          animation: "drift 8s linear infinite",
        }}
      />

      {/* Sweeping light streak */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, transparent 30%, ${primary}18 50%, transparent 70%)`,
          animation: "sweep 3s ease-in-out infinite alternate",
        }}
      />

      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-70" />

      <style jsx>{`
        @keyframes pulse {
          0% {
            opacity: 0.5;
            transform: scale(1);
          }
          100% {
            opacity: 0.9;
            transform: scale(1.05);
          }
        }
        @keyframes drift {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 32px 32px;
          }
        }
        @keyframes sweep {
          0% {
            transform: translateX(-20%) skewX(-10deg);
          }
          100% {
            transform: translateX(20%) skewX(10deg);
          }
        }
      `}</style>
    </div>
  );
};
