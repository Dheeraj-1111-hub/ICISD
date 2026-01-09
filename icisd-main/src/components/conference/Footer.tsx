import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  ExternalLink,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#hero" },
  { name: "About Conference", href: "#about" },
  { name: "Conference Tracks", href: "#tracks" },
  { name: "Important Dates", href: "#dates" },
  { name: "Registration", href: "#registration" },
];

const resourceLinks = [
  { name: "Paper Submission (CMT)", href: "https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICAICS2026" },
  { name: "Committee", href: "#patrons" },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-conference pt-16 pb-8">

        {/* Top Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Conference Identity */}
          <div>
            <h3 className="text-lg font-bold mb-3">
              ICISD’26
            </h3>

            <p className="text-white/70 text-sm leading-relaxed mb-4">
              International Conference on Intelligent Systems and Digital
              Transformation (ICISD’26), organized by the Department of Computer
              Science & Engineering, SRM Institute of Science and Technology.
            </p>

            <p className="text-white/60 text-xs">
              6<sup>th</sup> & 7<sup>th</sup> April 2026 · Hybrid Mode
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 text-sm hover:text-emerald-400 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-white/70 text-sm hover:text-emerald-400 transition"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">

              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5" />
                <span>
                  Department of Computer Science & Engineering<br />
                  SRM Institute of Science and Technology<br />
                  Vadapalani Campus, Chennai – 26
                </span>
              </li>

              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+91 80561 25082</span>
              </li>

              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>For queries: Dr. H. Mary Shyni</span>
              </li>

            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-white/50 text-sm text-center md:text-left">
            © 2026 ICISD’26 · All accepted papers will be published in
            Scopus-indexed conference proceedings with DOI (as per publisher
            norms).
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="
              w-10 h-10 rounded-md
              bg-emerald-500
              text-slate-900
              flex items-center justify-center
              hover:bg-emerald-400
              transition
            "
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>
      </div>
    </footer>
  );
};
