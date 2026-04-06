"use client";

interface AvatarSVGProps {
  pupilX: number;
  pupilY: number;
  sunglasses?: boolean;
}

export default function AvatarSVG({
  pupilX,
  pupilY,
  sunglasses = false,
}: AvatarSVGProps) {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        {/* Gradient background */}
        <linearGradient id="bgGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient id="hairGrad" x1="16" y1="4" x2="48" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1E1B4B" />
          <stop offset="100%" stopColor="#312E81" />
        </linearGradient>
        <linearGradient id="shirtGrad" x1="16" y1="52" x2="48" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
      </defs>

      {/* Background circle */}
      <circle cx="32" cy="32" r="31" fill="url(#bgGrad)" />

      {/* Shirt / collar at bottom */}
      <path
        d="M12 56C12 48 20 44 32 44C44 44 52 48 52 56"
        fill="url(#shirtGrad)"
      />
      {/* Shirt collar V */}
      <path
        d="M28 44L32 50L36 44"
        stroke="white"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />

      {/* Neck */}
      <rect x="28" y="40" width="8" height="6" rx="2" fill="#D4A574" />

      {/* Head — warmer skin tone */}
      <ellipse cx="32" cy="26" rx="17" ry="18" fill="#E8B888" />

      {/* Hair — modern swept style */}
      <path
        d="M14 22C14 12 22 5 32 5C42 5 50 12 50 22C50 18 48 12 42 10C36 8 28 9 22 12C16 15 14 19 14 22Z"
        fill="url(#hairGrad)"
      />
      {/* Side swept fringe */}
      <path
        d="M18 18C20 10 28 6 36 7C42 8 47 12 48 18C46 14 40 9 32 9C24 9 20 13 18 18Z"
        fill="#1E1B4B"
      />
      {/* Hair volume on top */}
      <path
        d="M20 14Q26 4 38 5Q46 6 49 14Q44 8 36 7Q26 6 20 14Z"
        fill="#252262"
      />

      {sunglasses ? (
        <>
          {/* Cool sunglasses — aviator style */}
          <path
            d="M14 24C14 21 17 19 21 19C25 19 28 21 28 24C28 28 25 30 21 30C17 30 14 28 14 24Z"
            fill="#1E1B4B"
          />
          <path
            d="M36 24C36 21 39 19 43 19C47 19 50 21 50 24C50 28 47 30 43 30C39 30 36 28 36 24Z"
            fill="#1E1B4B"
          />
          <line x1="28" y1="23" x2="36" y2="23" stroke="#1E1B4B" strokeWidth="2" />
          <line x1="14" y1="23" x2="10" y2="21" stroke="#1E1B4B" strokeWidth="1.5" />
          <line x1="50" y1="23" x2="54" y2="21" stroke="#1E1B4B" strokeWidth="1.5" />
          {/* Lens glare */}
          <path d="M17 22Q19 20 22 22" stroke="white" strokeWidth="1" opacity="0.3" fill="none" />
          <path d="M39 22Q41 20 44 22" stroke="white" strokeWidth="1" opacity="0.3" fill="none" />
        </>
      ) : (
        <>
          {/* Modern round glasses — thinner, stylish */}
          <circle cx="22" cy="25" r="7" stroke="#6366F1" strokeWidth="1.8" fill="none" />
          <circle cx="42" cy="25" r="7" stroke="#6366F1" strokeWidth="1.8" fill="none" />
          {/* Bridge */}
          <path d="M29 24Q32 22 35 24" stroke="#6366F1" strokeWidth="1.5" fill="none" />
          {/* Temple arms */}
          <line x1="15" y1="24" x2="10" y2="22" stroke="#6366F1" strokeWidth="1.5" />
          <line x1="49" y1="24" x2="54" y2="22" stroke="#6366F1" strokeWidth="1.5" />

          {/* Eyes — larger, more expressive */}
          <ellipse cx="22" cy="25" rx="4" ry="3.5" fill="white" />
          <ellipse cx="42" cy="25" rx="4" ry="3.5" fill="white" />

          {/* Iris with color */}
          <circle
            cx={22 + pupilX * 0.8}
            cy={25 + pupilY * 0.8}
            r="2.5"
            fill="#4F46E5"
            style={{ transition: "cx 100ms ease-out, cy 100ms ease-out" }}
          />
          <circle
            cx={42 + pupilX * 0.8}
            cy={25 + pupilY * 0.8}
            r="2.5"
            fill="#4F46E5"
            style={{ transition: "cx 100ms ease-out, cy 100ms ease-out" }}
          />

          {/* Pupils */}
          <circle
            cx={22 + pupilX}
            cy={25 + pupilY}
            r="1.2"
            fill="#1E1B4B"
            style={{ transition: "cx 100ms ease-out, cy 100ms ease-out" }}
          />
          <circle
            cx={42 + pupilX}
            cy={25 + pupilY}
            r="1.2"
            fill="#1E1B4B"
            style={{ transition: "cx 100ms ease-out, cy 100ms ease-out" }}
          />

          {/* Eye highlights */}
          <circle cx="23.5" cy="24" r="0.8" fill="white" opacity="0.9" />
          <circle cx="43.5" cy="24" r="0.8" fill="white" opacity="0.9" />
        </>
      )}

      {/* Eyebrows — expressive */}
      <path d="M16 18Q19 15 26 17" stroke="#1E1B4B" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M38 17Q45 15 48 18" stroke="#1E1B4B" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Nose — subtle */}
      <path d="M31 29Q32 32 33 29" stroke="#D4A574" strokeWidth="1.2" strokeLinecap="round" fill="none" />

      {/* Smile — confident, slightly asymmetric for character */}
      <path
        d="M24 35Q28 40 32 39Q36 38 39 35"
        stroke="#1E1B4B"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Smile dimple */}
      <path d="M24 35Q23 36 24 37" stroke="#D4A574" strokeWidth="0.8" fill="none" />

      {/* Ears */}
      <ellipse cx="14" cy="26" rx="2.5" ry="4" fill="#E8B888" />
      <ellipse cx="50" cy="26" rx="2.5" ry="4" fill="#E8B888" />
      {/* Inner ear */}
      <ellipse cx="14" cy="26" rx="1.2" ry="2.5" fill="#D4A574" opacity="0.5" />
      <ellipse cx="50" cy="26" rx="1.2" ry="2.5" fill="#D4A574" opacity="0.5" />

      {/* Tiny code badge on shirt */}
      <rect x="27" y="50" width="10" height="5" rx="2" fill="white" opacity="0.2" />
      <text x="32" y="54" fontSize="4" fill="white" textAnchor="middle" fontFamily="monospace" opacity="0.6">{"</>"}</text>
    </svg>
  );
}
