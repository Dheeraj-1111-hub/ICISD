import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  ArrowUp,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Tracks", href: "#tracks" },
  { name: "Schedule", href: "#schedule" },
  { name: "Registration", href: "#registration" },
];

const resourceLinks = [
  { name: "Submission Guidelines", href: "#submission" },
  { name: "Committee", href: "#patrons" }, // ✅ Updated
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy pt-16 pb-8">
      <div className="container-conference">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <span className="text-white font-bold">IC</span>
              </div>
              <span className="text-white font-bold text-lg">ICISD 2026</span>
            </div>

            <p className="text-white/70 text-sm leading-relaxed mb-4">
              International Conference on Innovations in Sustainable Development
              - Bringing together global minds for a greener future.
            </p>

            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center text-white/80 hover:bg-white/20 transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 text-sm hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 text-sm hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-accent mt-0.5" />
                <div className="text-white/70 text-sm">
                  <p>info@icisd2025.org</p>
                  <p>submissions@icisd2025.org</p>
                </div>
              </li>

              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-accent mt-0.5" />
                <div className="text-white/70 text-sm">
                  <p>+1 (555) 123-4567</p>
                  <p>+44 20 7946 0958</p>
                </div>
              </li>

              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <p className="text-white/70 text-sm">
                  Global Convention Center
                  <br />
                  Innovation District, Tech City
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm text-center md:text-left">
            © 2026 ICISD. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-md bg-accent flex items-center justify-center text-accent-foreground hover:opacity-90 transition-opacity"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
