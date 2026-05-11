import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";

function LinkedInIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.848 3.37-1.848 3.601 0 4.267 2.37 4.267 5.455v6.284zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative border-t border-[rgba(255,255,255,0.05)] bg-[#0A0A0F] text-[#FAFAFA]">
      {/* Prominent contact strip */}
      <div className="border-b border-[rgba(255,255,255,0.05)] bg-[rgba(255,153,51,0.025)]">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-8 md:py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#FF9933] mb-1.5">
                Get in touch
              </div>
              <div className="font-display font-black text-[#FAFAFA] text-[22px] md:text-[28px] leading-tight">
                Pick the channel that suits you.
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="https://wa.me/918805155767?text=Hi%20Rushabh%2C%20I%20found%20your%20website%20and%20wanted%20to%20chat."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[rgba(40,202,65,0.3)] bg-[rgba(40,202,65,0.04)] px-4 py-2.5 text-sm font-semibold text-[#28CA41] transition-all hover:bg-[rgba(40,202,65,0.1)] hover:border-[rgba(40,202,65,0.5)]"
              >
                <MessageCircle size={15} strokeWidth={2.5} />
                WhatsApp
              </a>
              <a
                href="mailto:rushabh.jamdade@mail.ca.in"
                className="inline-flex items-center gap-2 rounded-xl border border-[rgba(255,153,51,0.3)] bg-[rgba(255,153,51,0.05)] px-4 py-2.5 text-sm font-semibold text-[#FF9933] transition-all hover:bg-[rgba(255,153,51,0.12)] hover:border-[rgba(255,153,51,0.5)]"
              >
                <Mail size={15} strokeWidth={2.5} />
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/rushabhjamdade/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.03)] px-4 py-2.5 text-sm font-semibold text-[#FAFAFA] transition-all hover:bg-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.25)]"
              >
                <LinkedInIcon size={15} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Col 1 — Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center shadow-md"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #FF9933 0%, #E68A2E 100%)",
                }}
              >
                <span className="text-[#0A0A0F] font-bold text-sm tracking-tight">
                  RJ
                </span>
              </div>
              <span className="font-display font-bold text-[#FAFAFA]">
                CA Rushabh Jamdade
              </span>
            </div>
            <p className="text-sm text-[#8A8A9A] leading-relaxed max-w-xs">
              Chartered Accountant × AI Product Builder.
              <br />
              Pune, India.
            </p>
          </div>

          {/* Col 2 — Links */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#555] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Excel Toolkits", href: "#workbook-toolkits" },
                { label: "Softwares", href: "#workbook-softwares" },
                { label: "Services", href: "#services" },
                { label: "Premium Toolkits", href: "#premium-toolkits" },
                { label: "About", href: "#about" },
                { label: "Newsletter", href: "#newsletter" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#8A8A9A] hover:text-[#FF9933] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Connect */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#555] mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://wa.me/918805155767?text=Hi%20Rushabh%2C%20I%20found%20your%20website%20and%20wanted%20to%20chat."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#8A8A9A] hover:text-[#28CA41] transition-colors"
                >
                  <MessageCircle size={14} />
                  WhatsApp · +91 88051 55767
                </a>
              </li>
              <li>
                <a
                  href="mailto:rushabh.jamdade@mail.ca.in"
                  className="inline-flex items-center gap-2 text-sm text-[#8A8A9A] hover:text-[#FF9933] transition-colors"
                >
                  <Mail size={14} />
                  rushabh.jamdade@mail.ca.in
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/rushabhjamdade/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#8A8A9A] hover:text-[#FF9933] transition-colors"
                >
                  <LinkedInIcon size={14} />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[rgba(255,255,255,0.04)] flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#555] font-mono">
            © 2026 CA Rushabh Jamdade. Built with Next.js, Claude & a lot of
            Claude.
          </p>
          <p className="text-xs text-[#555] font-mono uppercase tracking-widest">
            Debit · Credit · Deploy
          </p>
        </div>
      </div>
    </footer>
  );
}
