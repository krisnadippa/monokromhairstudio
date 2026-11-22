"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface SmoothTitleProps {
  className?: string;
}

export default function SmoothTitle({ className = "" }: SmoothTitleProps) {
  const containerRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chars = containerRef.current.querySelectorAll(".char-item");

    gsap.set(chars, {
      opacity: 0,
      y: 45,
      filter: "blur(8px)",
      scale: 0.95,
    });

    gsap.to(chars, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      duration: 1.4,
      stagger: 0.05,
      ease: "power3.out",
      delay: 0.15,
    });
  }, []);

  const line1 = "COMING".split("");
  const line2 = "SOON".split("");

  return (
    <h1
      ref={containerRef}
      className={`${className} select-none overflow-hidden`}
    >
      {/* Line 1: COMING */}
      <span className="block leading-[0.82] overflow-hidden py-1">
        {line1.map((char, index) => (
          <span
            key={`l1-${index}`}
            className="char-item inline-block will-change-transform"
          >
            {char}
          </span>
        ))}
      </span>

      {/* Line 2: SOON */}
      <span className="block leading-[0.82] overflow-hidden py-1">
        {line2.map((char, index) => (
          <span
            key={`l2-${index}`}
            className="char-item inline-block will-change-transform"
          >
            {char}
          </span>
        ))}
      </span>
    </h1>
  );
}
