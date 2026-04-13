"use client";

import { useEffect, useState } from "react";

interface EyePosition {
  x: number;
  y: number;
}

export function useEyeTracking(
  avatarRef: React.RefObject<HTMLDivElement | null>
) {
  const [pupilOffset, setPupilOffset] = useState<EyePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
      // Track scroll position on mobile
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? scrollY / docHeight : 0;
        // Eyes look up when at top, down when scrolled
        setPupilOffset({ x: 0, y: (progress - 0.5) * 6 });
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      // Track cursor on desktop
      const handleMouseMove = (e: MouseEvent) => {
        if (!avatarRef.current) return;
        const rect = avatarRef.current.getBoundingClientRect();
        const avatarCenterX = rect.left + rect.width / 2;
        const avatarCenterY = rect.top + rect.height / 2;

        const dx = e.clientX - avatarCenterX;
        const dy = e.clientY - avatarCenterY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxOffset = 3;

        if (distance > 0) {
          setPupilOffset({
            x: (dx / distance) * Math.min(maxOffset, distance / 100),
            y: (dy / distance) * Math.min(maxOffset, distance / 100),
          });
        }
      };
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [avatarRef]);

  return pupilOffset;
}
