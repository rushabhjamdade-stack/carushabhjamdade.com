"use client";

import { motion, AnimatePresence } from "framer-motion";

interface SpeechBubbleProps {
  message: string | null;
  visible: boolean;
}

export default function SpeechBubble({ message, visible }: SpeechBubbleProps) {
  return (
    <AnimatePresence>
      {visible && message && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          role="status"
          aria-live="polite"
          className="fixed bottom-20 right-6 mb-3 w-max max-w-[360px] bg-white border border-gray-200 rounded-lg px-4 py-2.5 shadow-md text-sm text-gray-700 leading-relaxed whitespace-nowrap"
        >
          {message}
          {/* Pointer triangle */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-gray-200 rotate-45" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
