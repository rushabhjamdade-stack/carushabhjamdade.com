"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "newsletter" }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong.");
      } else {
        setStatus("success");
        setMessage("Subscribed. You're on the list.");
        setEmail("");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Try again.");
    }
  }

  return (
    <section
      id="newsletter"
      data-screen-label="06 Newsletter"
      className="border-t border-line bg-bg-1 px-6 pb-14 pt-20 md:pl-[calc(var(--col-w)+56px)] md:pr-14"
    >
      <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-[1.4fr_1fr] md:gap-14">
        <div>
          <div className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-4">
            <span className="text-accent">§ 06</span> · Newsletter
          </div>
          <h2
            className="mb-3.5 font-serif font-normal leading-[1.05] tracking-[-0.03em]"
            style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
          >
            Get the next tool <em className="italic text-accent">first.</em>
          </h2>
          <p className="max-w-[460px] text-[15px] text-ink-2">
            I ship a new tool every few weeks. Subscribe to get it before LinkedIn sees it.
          </p>
        </div>

        <div>
          <form
            onSubmit={onSubmit}
            className="flex overflow-hidden rounded-chip border border-line-2"
          >
            <input
              type="email"
              required
              placeholder="you@firm.in"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading"}
              className="flex-1 border-none bg-bg px-4 py-3.5 font-mono text-[13px] text-ink outline-none placeholder:text-ink-4 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-accent px-6 font-mono text-[13px] font-semibold text-[#0b0d0c] transition-colors hover:bg-[#84efb6] disabled:opacity-60"
            >
              {status === "loading" ? "..." : "Subscribe →"}
            </button>
          </form>
          {message && (
            <div
              className={`mt-2 font-mono text-[11px] ${
                status === "success" ? "text-accent" : "text-danger"
              }`}
              role="status"
            >
              {message}
            </div>
          )}
          <div className="mt-3.5 flex flex-wrap gap-4 font-mono text-[11px] text-ink-4">
            <span>● Weekly-ish</span>
            <span>● No spam</span>
            <span>● Unsubscribe anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
