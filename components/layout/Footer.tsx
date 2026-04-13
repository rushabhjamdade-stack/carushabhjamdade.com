import { ExternalLink, Camera, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0A0A0F] to-[#0A0A0F] text-white">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Col 1 - Logo */}
          <div>
            <h3 className="font-semibold text-lg mb-2">
              CA Rushabh Jamdade
            </h3>
            <p className="text-[#555] text-sm">
              Chartered Accountant × AI Product Builder
            </p>
            <p className="text-[#444] text-sm mt-1">Pune, India</p>
          </div>

          {/* Col 2 - Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-[#555] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["About", "Products", "Blog", "Resources", "Book a Call"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(/ /g, "")}`}
                      className="text-[#555] hover:text-white text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Col 3 - Products */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-[#555] mb-4">
              Products
            </h4>
            <ul className="space-y-2">
              {["LockedPDFs", "Money Smart Kids", "TaxPilot", "SplitEasy"].map(
                (item) => (
                  <li key={item}>
                    <span className="text-[#555] text-sm">{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Col 4 - Connect */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-[#555] mb-4">
              Connect
            </h4>
            <div className="space-y-3">
              <a
                href="https://linkedin.com/in/carushabhjamdade"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#555] hover:text-white text-sm transition-colors"
              >
                <ExternalLink size={16} />
                LinkedIn
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-[#333] text-sm cursor-default"
              >
                <Camera size={16} />
                Instagram (Coming Soon)
              </a>
              <a
                href="mailto:rushabh@carushabhjamdade.com"
                className="flex items-center gap-2 text-[#555] hover:text-white text-sm transition-colors"
              >
                <Mail size={16} />
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(255,255,255,0.04)] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#444] text-sm">
            &copy; 2026 CA Rushabh Jamdade. Built with AI & a lot of chai.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-[#444] hover:text-[#555] text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-[#444] hover:text-[#555] text-sm">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
