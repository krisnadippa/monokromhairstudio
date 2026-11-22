"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

interface ScrambleTextProps {
  lines: string[];
  className?: string;
  duration?: number;
  delay?: number;
}

export default function ScrambleText({
  lines,
  className = "",
  duration = 2.0,
  delay = 0.2,
}: ScrambleTextProps) {
  const [displayLines, setDisplayLines] = useState<string[]>(lines);
  const containerRef = useRef<HTMLHeadingElement | null>(null);

  const runAnimation = () => {
    const totalChars = lines.join("").length;
    const progressObj = { progress: 0 };

    gsap.killTweensOf(progressObj);

    gsap.to(progressObj, {
      progress: 1,
      duration: duration,
      delay: delay,
      ease: "power2.out",
      onUpdate: () => {
        const currentProgress = progressObj.progress;
        // Total characters resolved so far
        const resolvedCount = Math.floor(currentProgress * totalChars);

        let counted = 0;
        const newLines = lines.map((targetLine) => {
          let lineResult = "";
          for (let i = 0; i < targetLine.length; i++) {
            const char = targetLine[i];
            if (char === " ") {
              lineResult += " ";
              continue;
            }

            if (counted < resolvedCount) {
              // Character is locked into place
              lineResult += char;
            } else {
              // Character is still actively scrambling
              const randomChar = CHARS[Math.floor(Math.random() * CHARS.length)];
              lineResult += randomChar;
            }
            counted++;
          }
          return lineResult;
        });

        setDisplayLines(newLines);
      },
      onComplete: () => {
        setDisplayLines(lines);
      },
    });
  };

  useEffect(() => {
    // Initial scramble on mount
    runAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <h1
      ref={containerRef}
      onMouseEnter={runAnimation}
      className={`${className} cursor-pointer select-none transition-opacity duration-300`}
      title="Klik atau hover untuk memutar animasi kembali"
    >
      {displayLines.map((line, idx) => (
        <span key={idx} className="block leading-[0.82]">
          {line}
        </span>
      ))}
    </h1>
  );
}
