"use client";

import { useRef, type ReactNode, type CSSProperties } from "react";
import { useInView } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  from?: "bottom" | "left" | "right" | "none";
  className?: string;
  style?: CSSProperties;
  distance?: number;
  duration?: number;
  /** How far below viewport edge to pre-trigger (positive = earlier) */
  margin?: number;
}

export default function Reveal({
  children,
  delay = 0,
  from = "bottom",
  className = "",
  style,
  distance = 28,
  duration = 0.65,
  margin = 80,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });

  const hidden: Record<string, string> = {
    bottom: `translateY(${distance}px)`,
    left: `translateX(-${distance}px)`,
    right: `translateX(${distance}px)`,
    none: "none",
  };

  const ease = "cubic-bezier(0.16, 1, 0.3, 1)";
  const transition = `opacity ${duration}s ${ease} ${delay}s, transform ${duration}s ${ease} ${delay}s`;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : hidden[from],
        transition,
        willChange: inView ? "auto" : "opacity, transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
