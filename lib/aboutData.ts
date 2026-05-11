export const storyParagraphs: string[] = [
  "I can't code. But I've learned how to use AI to build the tools finance professionals actually need — and that turns out to be enough.",
  "I spent time in technology consulting at <strong>PwC</strong> and FP&amp;A at <strong>Thermo Fisher Scientific</strong>. Two very different vantage points, same takeaway — even at the top of the profession, most of the work still ran on manual spreadsheets and PDFs nobody had bothered to question.",
  "In <strong>2023</strong>, I stopped waiting for someone else to fix it.",
  "Now I ship AI-powered tools for finance — Excel toolkits that circle through LinkedIn, and full products like LockedPDFs. A few more are shipping soon.",
  "I also guest lecture at <strong>SIBM Pune, MIT WPU</strong> and a few others, and take the occasional corporate training gig. Mostly I'm heads-down, building.",
  "The future of finance isn't CAs getting replaced by AI. It's CAs who learn to <strong>build with it.</strong>",
];

export const trackRecord = [
  { label: "Hours of training", value: "300+", accent: true },
  { label: "Students trained", value: "1,200+", accent: true },
  { label: "Top B-Schools", value: "3" },
  { label: "Products shipped", value: "6+" },
  { label: "Downloads", value: "850+", accent: true },
  { label: "Based in", value: "Pune" },
];

export const credentialLogos = [
  { name: "PwC", caption: "Big 4 Audit" },
  { name: "Thermo", caption: "Fortune 500" },
  { name: "ICAI", caption: "Chartered" },
];

export type SpecRow = { k: string; v: React.ReactNode };

export const specRows: { k: string; html: string }[] = [
  { k: "Name", html: "CA Rushabh Jamdade" },
  { k: "Role", html: 'Chartered Accountant <span class="text-accent">×</span> AI Product Builder' },
  { k: "Located", html: "Pune, India · UTC+5:30" },
  {
    k: "Past",
    html: '<div class="flex flex-wrap gap-1.5"><span class="rounded-[2px] border border-line-2 bg-bg-3 px-2 py-0.5 text-[11px] text-ink-2">PwC · Tech Consulting</span><span class="rounded-[2px] border border-line-2 bg-bg-3 px-2 py-0.5 text-[11px] text-ink-2">Thermo Fisher · FP&amp;A</span></div>',
  },
  { k: "Now", html: "Shipping AI-powered tools for finance, solo." },
  {
    k: "Stack",
    html:
      '<div class="flex flex-wrap gap-1.5">' +
      ["Excel", "VBA", "TypeScript", "Next.js", "Claude", "Python", "Power Query"]
        .map(
          (s) =>
            `<span class="rounded-[2px] border border-line-2 bg-bg-3 px-2 py-0.5 text-[11px] text-ink-2">${s}</span>`
        )
        .join("") +
      "</div>",
  },
  {
    k: "Teaches",
    html:
      '<div class="flex flex-wrap gap-1.5">' +
      ["SIBM Pune", "MIT WPU", "DY Patil BS"]
        .map(
          (s) =>
            `<span class="rounded-[2px] border border-line-2 bg-bg-3 px-2 py-0.5 text-[11px] text-ink-2">${s}</span>`
        )
        .join("") +
      "</div>",
  },
  {
    k: "Shipped",
    html: '<span class="text-accent">3</span> Excel toolkits · <span class="text-accent">1</span> live SaaS · <span class="text-accent">3</span> in build',
  },
  {
    k: "Reach",
    html: '<span class="text-accent">850+</span> downloads · <span class="text-accent">1,200+</span> students · <span class="text-accent">300+</span> hours lectured',
  },
  { k: "Reply window", html: "WhatsApp &lt; 4h · Email &lt; 24h" },
  {
    k: "Contact",
    html: '<div class="flex flex-wrap gap-1.5"><span class="rounded-[2px] border border-line-2 bg-bg-3 px-2 py-0.5 text-[11px] text-ink-2">rushabh.jamdade@mail.ca.in</span><span class="rounded-[2px] border border-line-2 bg-bg-3 px-2 py-0.5 text-[11px] text-ink-2">+91 88051 55767</span></div>',
  },
];
