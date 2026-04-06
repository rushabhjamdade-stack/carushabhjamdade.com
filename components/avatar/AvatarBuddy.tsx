"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import AvatarSVG from "./AvatarSVG";
import SpeechBubble from "./SpeechBubble";
import { useEyeTracking } from "./useEyeTracking";
import { useSectionObserver } from "./useSectionObserver";
import {
  avatarStates,
  bonusQuips,
  easterEggs,
  getTimeOfDayMessage,
  getReturnVisitorMessage,
} from "./avatarData";

export default function AvatarBuddy() {
  const avatarRef = useRef<HTMLDivElement>(null);
  const pupilOffset = useEyeTracking(avatarRef);
  const currentSection = useSectionObserver();

  const [message, setMessage] = useState<string | null>(null);
  const [bubbleVisible, setBubbleVisible] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [quipIndex, setQuipIndex] = useState(0);
  const [sunglasses, setSunglasses] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const [bouncing, setBouncing] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const hideTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const lastSectionRef = useRef("");
  const collapseTimerRef = useRef<ReturnType<typeof setTimeout>>();

  // Show message with auto-dismiss
  const showMessage = useCallback((msg: string, duration = 6000) => {
    setMessage(msg);
    setBubbleVisible(true);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => setBubbleVisible(false), duration);
  }, []);

  // Check mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mobile auto-collapse
  useEffect(() => {
    if (isMobile) {
      collapseTimerRef.current = setTimeout(() => setCollapsed(true), 5000);
      return () => {
        if (collapseTimerRef.current) clearTimeout(collapseTimerRef.current);
      };
    } else {
      setCollapsed(false);
    }
  }, [isMobile]);

  // Initial message (time-of-day or return visitor)
  useEffect(() => {
    const returnMsg = getReturnVisitorMessage();
    if (returnMsg) {
      showMessage(returnMsg);
    } else {
      showMessage(getTimeOfDayMessage());
    }
  }, [showMessage]);

  // Section-aware messages
  useEffect(() => {
    if (currentSection && currentSection !== lastSectionRef.current) {
      lastSectionRef.current = currentSection;
      const state = avatarStates[currentSection];
      if (state) {
        showMessage(state.message);
      }
    }
  }, [currentSection, showMessage]);

  // Handle click
  const handleClick = () => {
    if (collapsed) {
      setCollapsed(false);
      if (isMobile) {
        // Reset auto-collapse timer
        if (collapseTimerRef.current) clearTimeout(collapseTimerRef.current);
        collapseTimerRef.current = setTimeout(() => setCollapsed(true), 8000);
      }
      return;
    }

    const newCount = clickCount + 1;
    setClickCount(newCount);

    // Easter eggs
    if (easterEggs[newCount]) {
      showMessage(easterEggs[newCount], 8000);

      if (newCount === 5) {
        setSpinning(true);
        setTimeout(() => setSpinning(false), 500);
      } else if (newCount === 10) {
        setBouncing(true);
        setTimeout(() => setBouncing(false), 1000);
      } else if (newCount === 20) {
        setSunglasses(true);
      }
      return;
    }

    // Cycle through bonus quips
    showMessage(bonusQuips[quipIndex]);
    setQuipIndex((prev) => (prev + 1) % bonusQuips.length);
  };

  // Collapsed state (mobile dot)
  if (collapsed) {
    return (
      <button
        onClick={handleClick}
        className="fixed bottom-4 right-4 z-50 w-6 h-6 rounded-full bg-indigo-500 shadow-md animate-avatar-glow"
        aria-label="Show avatar buddy"
      />
    );
  }

  return (
    <div
      ref={avatarRef}
      className="fixed bottom-6 right-6 z-50"
      aria-hidden="true"
    >
      {/* Speech Bubble */}
      <SpeechBubble message={message} visible={bubbleVisible} />

      {/* Avatar container */}
      <button
        onClick={handleClick}
        aria-label="Fun facts about Rushabh"
        className={`relative w-16 h-16 md:w-16 md:h-16 rounded-full border-[3px] border-white shadow-avatar cursor-pointer transition-transform hover:scale-110
          ${spinning ? "animate-spin" : ""}
          ${bouncing ? "animate-bounce" : ""}
          ${!spinning && !bouncing ? "animate-avatar-float" : ""}
        `}
        style={{ animationDuration: spinning ? "0.5s" : undefined }}
      >
        {/* Glow ring */}
        <div className="absolute inset-0 rounded-full animate-avatar-glow" />

        {/* Avatar SVG */}
        <div className="w-full h-full rounded-full overflow-hidden">
          <AvatarSVG
            pupilX={pupilOffset.x}
            pupilY={pupilOffset.y}
            sunglasses={sunglasses}
          />
        </div>

        {/* Green status dot */}
        <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-white animate-pulse-green" />
      </button>
    </div>
  );
}
