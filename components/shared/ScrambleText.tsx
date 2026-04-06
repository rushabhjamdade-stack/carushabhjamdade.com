"use client";

import { useEffect, useState, useCallback, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*";

interface ScrambleTextProps {
  words: string[];
}

export default function ScrambleText({ words }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState<"scrambling" | "resolved" | "unscrambling">("scrambling");
  const frameRef = useRef<number>(0);
  const iterationRef = useRef(0);

  const scramble = useCallback(
    (target: string, onComplete: () => void) => {
      const maxIterations = target.length * 3; // 3 scramble passes per char
      iterationRef.current = 0;

      const step = () => {
        iterationRef.current += 1;
        const progress = iterationRef.current / maxIterations;
        const resolvedCount = Math.floor(progress * target.length);

        let result = "";
        for (let i = 0; i < target.length; i++) {
          if (target[i] === " ") {
            result += " ";
          } else if (i < resolvedCount) {
            result += target[i];
          } else {
            result += CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        }

        setDisplayText(result);

        if (iterationRef.current < maxIterations) {
          frameRef.current = window.setTimeout(step, 30);
        } else {
          setDisplayText(target);
          onComplete();
        }
      };

      step();
    },
    []
  );

  const unscramble = useCallback(
    (current: string, onComplete: () => void) => {
      const maxIterations = current.length * 2;
      iterationRef.current = 0;

      const step = () => {
        iterationRef.current += 1;
        const progress = iterationRef.current / maxIterations;
        const scrambledCount = Math.floor(progress * current.length);

        let result = "";
        for (let i = 0; i < current.length; i++) {
          if (current[i] === " ") {
            result += " ";
          } else if (i < scrambledCount) {
            result += CHARS[Math.floor(Math.random() * CHARS.length)];
          } else {
            result += current[i];
          }
        }

        setDisplayText(result);

        if (iterationRef.current < maxIterations) {
          frameRef.current = window.setTimeout(step, 25);
        } else {
          onComplete();
        }
      };

      step();
    },
    []
  );

  useEffect(() => {
    const target = words[wordIndex];

    if (phase === "scrambling") {
      scramble(target, () => setPhase("resolved"));
    } else if (phase === "resolved") {
      const timeout = window.setTimeout(() => setPhase("unscrambling"), 2500);
      return () => clearTimeout(timeout);
    } else if (phase === "unscrambling") {
      unscramble(words[wordIndex], () => {
        setWordIndex((prev) => (prev + 1) % words.length);
        setPhase("scrambling");
      });
    }

    return () => {
      if (frameRef.current) clearTimeout(frameRef.current);
    };
  }, [phase, wordIndex, words, scramble, unscramble]);

  return (
    <span className="relative">
      <span className="text-indigo-600 font-semibold">{displayText}</span>
      <span className="animate-blink text-indigo-500 font-light ml-0.5">|</span>
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400/30 rounded" />
      {/* Hidden accessible text */}
      <span className="sr-only">{words.join(", ")}</span>
    </span>
  );
}
