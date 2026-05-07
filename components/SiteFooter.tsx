export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      data-screen-label="07 Footer"
      className="px-6 pb-20 pt-14 md:pl-[calc(var(--col-w)+56px)] md:pr-14"
    >
      <div className="mb-14 grid grid-cols-1 gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-1.5 font-serif text-[22px] font-normal tracking-[-0.01em]">
            CA Rushabh Jamdade
          </div>
          <div className="font-mono text-[11.5px] leading-[1.6] text-ink-3">
            Chartered Accountant × AI Product Builder
            <br />
            Pune, India
          </div>
          <div className="mt-4 inline-block rounded-chip border border-line bg-bg-2 px-2.5 py-1.5 font-mono text-[11px] text-ink-3">
            ● <span className="text-accent">Available</span> · accepting 2 audits / month
          </div>
        </div>
        <div>
          <h5 className="mb-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-ink-4">
            {"// Sheets"}
          </h5>
          <ul className="list-none">
            {[
              ["Hero", "#hero"],
              ["Workbook", "#workbook"],
              ["Services", "#services"],
              ["Premium Toolkits", "#premium"],
              ["About", "#about"],
              ["Newsletter", "#newsletter"],
            ].map(([label, href]) => (
              <li key={href} className="py-1 text-[13.5px] text-ink-2">
                <a href={href} className="hover:text-accent">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="mb-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-ink-4">
            {"// Connect"}
          </h5>
          <ul className="list-none">
            <li className="py-1 text-[13.5px] text-ink-2">
              <a href="https://wa.me/918805155767" className="hover:text-accent">
                WhatsApp · +91 88051 55767
              </a>
            </li>
            <li className="py-1 text-[13.5px] text-ink-2">
              <a href="mailto:rushabh.jamdade@mail.ca.in" className="hover:text-accent">
                rushabh.jamdade@mail.ca.in
              </a>
            </li>
            <li className="py-1 text-[13.5px] text-ink-2">
              <a
                href="https://www.linkedin.com/in/rushabhjamdade/"
                className="hover:text-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="mb-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-ink-4">
            {"// Built with"}
          </h5>
          <ul className="list-none">
            <li className="py-1 text-[13.5px] text-ink-2">Next.js</li>
            <li className="py-1 text-[13.5px] text-ink-2">Claude</li>
            <li className="py-1 text-[13.5px] text-ink-2">A lot of Claude</li>
            <li className="py-1 text-[13.5px] text-ink-2">Excel (obv.)</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6 font-mono text-[11px] text-ink-4">
        <span>© {year} CA Rushabh Jamdade. All rights reserved.</span>
        <span className="font-serif text-[14px] italic text-ink-3">
          Debit · Credit · <span className="text-accent">Deploy</span>
        </span>
        <span>v2.1 · Built in Pune</span>
      </div>
    </footer>
  );
}
