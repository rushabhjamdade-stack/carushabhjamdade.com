import { ExternalLink, Camera, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-navy to-gray-950 text-white">
      <div className="max-w-site mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Col 1 - Logo */}
          <div>
            <h3 className="font-semibold text-lg mb-2">
              CA Rushabh Jamdade
            </h3>
            <p className="text-gray-400 text-sm">
              Chartered Accountant × AI Product Builder
            </p>
            <p className="text-gray-500 text-sm mt-1">Pune, India</p>
          </div>

          {/* Col 2 - Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["About", "Products", "Blog", "Resources", "Book a Call"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(/ /g, "")}`}
                      className="text-gray-300 hover:text-white text-sm transition-colors"
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
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">
              Products
            </h4>
            <ul className="space-y-2">
              {["LockedPDFs", "Money Smart Kids", "TaxPilot", "SplitEasy"].map(
                (item) => (
                  <li key={item}>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Col 4 - Connect */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">
              Connect
            </h4>
            <div className="space-y-3">
              <a
                href="https://linkedin.com/in/carushabhjamdade"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors"
              >
                <ExternalLink size={16} />
                LinkedIn
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-500 text-sm cursor-default"
              >
                <Camera size={16} />
                Instagram (Coming Soon)
              </a>
              <a
                href="mailto:rushabh@carushabhjamdade.com"
                className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors"
              >
                <Mail size={16} />
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2026 CA Rushabh Jamdade. Built with Next.js, Claude & a lot
            of chai.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
