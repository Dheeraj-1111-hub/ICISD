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
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
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
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${isScrolled
          ? "bg-card/95 backdrop-blur shadow-md"
          : "bg-transparent"}
      `}
    >
      <div className="container-conference px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">

          {/* ================= LOGOS ================= */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
            className="flex items-center gap-3 sm:gap-4"
          >
            <img
              src="/logo.png"
              alt="SRM Logo"
              className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
            />

            <img
              src="/logo_icisd_main.jpg"
              alt="ICISD Logo"
              className="h-7 sm:h-9 lg:h-11 w-auto object-contain"
            />
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
                className={`
                  px-4 py-2 rounded-md text-sm font-medium
                  transition-colors
                  ${
                    isScrolled
                      ? "text-foreground hover:bg-muted hover:text-primary"
                      : "text-white/90 hover:bg-white/10 hover:text-white"
                  }
                `}
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
                className={`
                  px-5 py-2 rounded-md text-sm font-semibold
                  transition-colors
                  ${
                    isScrolled
                      ? "bg-emerald-600 text-white hover:bg-emerald-500"
                      : "bg-white text-slate-900 hover:bg-white/90"
                  }
                `}
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

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            aria-label="Toggle menu"
            className={`
              lg:hidden p-2 rounded-md
              ${isScrolled ? "text-foreground" : "text-white"}
            `}
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
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <div className="container-conference px-4 sm:px-6 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 rounded-md text-foreground font-medium hover:bg-muted transition"
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
                  className="block w-full mt-3 px-4 py-3 rounded-md bg-emerald-600 text-white text-center font-semibold hover:bg-emerald-500 transition"
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
