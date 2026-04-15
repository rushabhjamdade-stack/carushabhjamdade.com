export default function ComingSoon() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0A0A0F] text-[#FAFAFA]">
      {/* Ambient gradient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(255,153,51,0.18), transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(255,215,0,0.08), transparent 55%)",
        }}
      />

      <section className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center">
        {/* Monogram */}
        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-[rgba(255,153,51,0.25)] bg-[rgba(255,153,51,0.08)] font-display text-2xl font-bold text-[#FF9933] shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
          RJ
        </div>

        {/* Status pill */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(255,153,51,0.2)] bg-[rgba(255,153,51,0.06)] px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-[#FF9933]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF9933] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF9933]" />
          </span>
          Under Construction
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Something new is{" "}
          <span className="bg-gradient-to-r from-[#FF9933] via-[#FFB366] to-[#FFD700] bg-clip-text text-transparent">
            brewing
          </span>
          .
        </h1>

        {/* Subcopy */}
        <p className="mt-6 max-w-xl text-base leading-relaxed text-[#8A8A9A] sm:text-lg">
          CA Rushabh Jamdade — Chartered Accountant turned AI product builder.
          The new site is coming soon. In the meantime, you can find my work
          and writing on LinkedIn.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://www.linkedin.com/in/rushabhjamdade/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#FF9933] px-6 py-3 text-sm font-semibold text-[#0A0A0F] transition hover:bg-[#FFB366]"
          >
            Connect on LinkedIn
            <span aria-hidden>→</span>
          </a>
          <a
            href="mailto:hello@carushabhjamdade.com"
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.03)] px-6 py-3 text-sm font-semibold text-[#FAFAFA] transition hover:border-[rgba(255,153,51,0.4)] hover:text-[#FF9933]"
          >
            Say hello
          </a>
        </div>

        {/* Footer tag */}
        <div className="mt-16 text-xs uppercase tracking-[0.2em] text-[#8A8A9A]">
          Pune · India · {new Date().getFullYear()}
        </div>
      </section>
    </main>
  );
}
