import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Tracks", href: "#tracks" },
  { name: "Schedule", href: "#schedule" },
  { name: "Registration", href: "#registration" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    if (!href.startsWith("#")) return;
    const el = document.getElementById(href.substring(1));
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur shadow-md py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-conference">
        <div className="flex items-center justify-between min-h-[88px]">
          {/* ================= LOGOS ================= */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
            className="flex items-center"
          >
            {/* Shared logo container */}
            <div className="flex items-center gap-4 h-16">
              {/* SRM Logo */}
              <img
                src="/logo.png"
                alt="SRM Logo"
                className="
                  max-h-full
                  w-auto
                  object-contain
                  flex-shrink-0
                "
              />

              {/* ICISD Logo */}
              <img
                src="/logo_icisd_main.jpg"
                alt="ICISD Logo"
                className="
                  max-h-[80%]
                  w-auto
                  object-contain
                  flex-shrink-0
                "
              />
            </div>
          </a>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
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

          {/* ================= DESKTOP RIGHT ================= */}
          <div className="hidden lg:flex items-center gap-4">
            <SignedOut>
              <a
                href="#registration"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#registration");
                }}
                className={`px-5 py-2 rounded-md text-sm font-semibold transition-colors ${
                  isScrolled
                    ? "bg-emerald-600 text-primary-foreground hover:bg-emerald-600"
                    : "bg-white text-primary hover:bg-white/90"
                }`}
              >
                Apply Now
              </a>
            </SignedOut>

            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox:
                      "w-9 h-9 rounded-full ring-2 ring-white/20",
                  },
                }}
                afterSignOutUrl="/"
              />
            </SignedIn>
          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            className={`lg:hidden p-2 rounded-md ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen((p) => !p)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
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
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  {link.name}
                </a>
              ))}

              <SignedOut>
                <a
                  href="#registration"
                  className="block w-full mt-3 px-4 py-2.5 rounded-md bg-primary text-primary-foreground text-center font-semibold"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#registration");
                  }}
                >
                  Apply Now
                </a>
              </SignedOut>

              <SignedIn>
                <div className="flex justify-center pt-4">
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "w-10 h-10",
                      },
                    }}
                    afterSignOutUrl="/"
                  />
                </div>
              </SignedIn>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
