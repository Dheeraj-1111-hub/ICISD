import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Tracks", href: "#tracks" },
  { name: "Speakers", href: "#speakers" },
  { name: "Schedule", href: "#schedule" },
  { name: "Registration", href: "#registration" },
  { name: "Committee", href: "#committee" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card shadow-md py-3" : "bg-transparent py-4"
      }`}
    >
      <div className="container-conference">
        <div className="flex items-center justify-between">

          {/* === Custom Logo Here === */}
          <a href="#hero" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="ICISD Logo"
              className="w-16 h-16 object-contain"
            />
            <span
              className={`font-bold text-lg ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              ICISD 2025
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isScrolled
                    ? "text-foreground hover:bg-muted hover:text-primary"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href="#registration"
              className={`px-5 py-2 rounded-md text-sm font-semibold transition-colors ${
                isScrolled
                  ? "bg-primary text-primary-foreground hover:bg-primary-dark"
                  : "bg-white text-primary hover:bg-white/90"
              }`}
            >
              Register Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-md ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <div className="container-conference py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-foreground font-medium hover:bg-muted transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#registration"
                className="block w-full mt-3 px-4 py-2.5 rounded-md bg-primary text-primary-foreground text-center font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Register Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
