"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Download, Mail, Loader2 } from "lucide-react";

interface DownloadGateProps {
  open: boolean;
  toolTitle: string;
  filename: string;
  onClose: () => void;
}

const EMAIL_KEY = "rj_download_email";

function getSavedEmail(): string {
  if (typeof window === "undefined") return "";
  return localStorage.getItem(EMAIL_KEY) || "";
}

function saveEmail(email: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(EMAIL_KEY, email);
}

export default function DownloadGate({
  open,
  toolTitle,
  filename,
  onClose,
}: DownloadGateProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  // Pre-fill saved email
  useEffect(() => {
    if (open) {
      const saved = getSavedEmail();
      if (saved) {
        setEmail(saved);
      }
      setStatus("idle");
    }
  }, [open]);

  const triggerDownload = () => {
    const a = document.createElement("a");
    a.href = `/downloads/${filename}`;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: `download:${toolTitle}` }),
      });
      if (res.ok) {
        saveEmail(email);
        setStatus("success");
        // Start download after brief success feedback
        setTimeout(() => {
          triggerDownload();
          setTimeout(onClose, 1200);
        }, 600);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[70] bg-[rgba(0,0,0,0.7)] backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          >
            <div
              className="relative w-full max-w-md rounded-2xl border border-[rgba(255,153,51,0.2)] bg-[rgba(12,12,18,0.97)] backdrop-blur-xl shadow-2xl p-7"
              style={{
                boxShadow:
                  "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,153,51,0.08), 0 0 80px rgba(255,153,51,0.1)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute top-4 right-4 p-1.5 rounded-full text-[#555] hover:text-[#FAFAFA] hover:bg-[rgba(255,255,255,0.05)] transition-colors"
              >
                <X size={18} />
              </button>

              {status === "success" ? (
                <div className="py-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-[rgba(40,202,65,0.1)] border border-[rgba(40,202,65,0.25)] flex items-center justify-center mx-auto mb-4">
                    <Download size={24} className="text-[#28CA41]" />
                  </div>
                  <p className="font-display font-bold text-xl text-[#FAFAFA]">
                    Downloading...
                  </p>
                  <p className="text-sm text-[#8A8A9A] mt-2">
                    {toolTitle} is on its way. Check your downloads folder.
                  </p>
                </div>
              ) : (
                <>
                  {/* Icon */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[rgba(255,153,51,0.1)] border border-[rgba(255,153,51,0.2)] flex items-center justify-center">
                      <Mail size={18} className="text-[#FF9933]" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-lg text-[#FAFAFA] leading-tight">
                        Get {toolTitle}
                      </p>
                      <p className="text-[11px] text-[#8A8A9A] font-mono uppercase tracking-wider mt-0.5">
                        Free download
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-[#8A8A9A] leading-relaxed mb-5">
                    Enter your email and the download starts instantly.
                    I&apos;ll also send you future tools when I ship them — no
                    spam, unsubscribe anytime.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoFocus
                      className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] focus:border-[rgba(255,153,51,0.4)] rounded-xl px-4 py-3 text-sm text-[#FAFAFA] placeholder-[#555] outline-none focus:ring-2 focus:ring-[rgba(255,153,51,0.15)] transition-all"
                    />
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-[#0A0A0F] transition-all hover:-translate-y-0.5 disabled:opacity-60"
                      style={{
                        backgroundImage:
                          "linear-gradient(135deg, #FF9933 0%, #FFB366 50%, #FFD700 100%)",
                      }}
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Download size={16} />
                          Download Now
                        </>
                      )}
                    </button>
                  </form>

                  {status === "error" && (
                    <p className="text-xs text-red-400 mt-3 text-center">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  {/* Trust line */}
                  <p className="text-[10px] text-[#555] text-center mt-4 font-mono uppercase tracking-wider">
                    No spam · Unsubscribe anytime · Your email stays private
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
