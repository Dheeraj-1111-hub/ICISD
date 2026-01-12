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
  {
    name: "Paper Submission (CMT)",
    href: "https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICAICS2026",
  },
  { name: "Committee", href: "#patrons" },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-conference pt-20 pb-10">

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 mb-14">

          
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-wide">ICISD’26</h3>

            <p className="text-white/70 text-sm leading-relaxed">
              International Conference on Intelligent Systems and Digital
              Transformation (ICISD’26), organized by the Department of Computer
              Science & Engineering, SRM Institute of Science and Technology.
            </p>

            <p className="text-white/60 text-xs">
              6<sup>th</sup> & 7<sup>th</sup> April 2026 · Hybrid Mode
            </p>
          </div>

          {/*Links*/}
          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-emerald-400 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase mb-5">
              Resources
            </h4>

            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-emerald-400 transition"
                  >
                    {link.name}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase mb-5">
              Contact
            </h4>

            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                <span className="leading-relaxed">
                  Department of Computer Science & Engineering<br />
                  SRM Institute of Science and Technology<br />
                  Vadapalani Campus, Chennai – 26
                </span>
              </li>

              <li className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+91 80561 25082</span>
              </li>

              <li className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>For queries: Dr. H. Mary Shyni</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Microsoft CMT Acknowledgment */}
        <p className="text-white/50 text-xs leading-relaxed max-w-6xl mb-8">
          The{" "}
          <a
            href="https://cmt3.research.microsoft.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:underline inline-flex items-center gap-1"
          >
            Microsoft CMT service <ExternalLink className="w-3 h-3" />
          </a>{" "}
          was used for managing the peer-reviewing process for this conference.
          This service was provided for free by Microsoft, and they bore all
          expenses, including costs for Azure cloud services as well as for
          software development and support.
        </p>

        {/* Bottom Bar */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6">

          <p className="text-white/50 text-sm text-center md:text-left">
            © 2026 ICISD’26 · All accepted papers will be published in
            Scopus-indexed conference proceedings with DOI (as per publisher
            norms).
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="
              w-11 h-11 rounded-md
              bg-emerald-500 text-slate-900
              flex items-center justify-center
              hover:bg-emerald-400
              transition
            "
          >
            <ArrowUp className="w-4.5 h-4.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
