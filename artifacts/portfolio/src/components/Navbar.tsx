import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollPosition } from "@/hooks/useScrollPosition";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Navbar() {
  const scrollY = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isScrolled = scrollY > 20;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? "rgba(10, 10, 15, 0.85)" : "transparent",
        backdropFilter: isScrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(16px)" : "none",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="text-3xl font-extrabold tracking-tight select-none"
          style={{
            fontFamily: "var(--app-font-display)",
            color: "var(--brand)",
            lineHeight: 1,
          }}
        >
          V.
        </a>

        {/* Center: Open to work badge */}
        <div
          className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium"
          style={{
            backgroundColor: "rgba(30, 30, 46, 0.8)",
            border: "1px solid rgba(124, 58, 237, 0.25)",
            color: "var(--text-secondary)",
            fontFamily: "var(--app-font-body)",
          }}
        >
          <span
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{
              backgroundColor: "#22c55e",
              animation: "greenPulse 2s ease-in-out infinite",
            }}
          />
          Open to work
        </div>

        {/* Right: Nav links (desktop) */}
        <ul className="hidden sm:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href} label={link.label} />
            </li>
          ))}
        </ul>

        {/* Hamburger (mobile) */}
        <button
          className="sm:hidden flex flex-col gap-1.5 p-2 rounded-md transition-colors"
          style={{ color: "var(--text-secondary)" }}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className="block h-px w-6 transition-all duration-300 origin-center"
            style={{
              backgroundColor: "currentColor",
              transform: mobileOpen ? "translateY(4px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block h-px w-6 transition-all duration-300"
            style={{
              backgroundColor: "currentColor",
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            className="block h-px w-6 transition-all duration-300 origin-center"
            style={{
              backgroundColor: "currentColor",
              transform: mobileOpen ? "translateY(-4px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden sm:hidden"
            style={{
              backgroundColor: "rgba(10, 10, 15, 0.95)",
              borderTop: "1px solid var(--surface-border)",
            }}
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {/* Open to work badge on mobile */}
              <li>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-2"
                  style={{
                    backgroundColor: "rgba(30, 30, 46, 0.8)",
                    border: "1px solid rgba(124, 58, 237, 0.25)",
                    color: "var(--text-secondary)",
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: "#22c55e",
                      animation: "greenPulse 2s ease-in-out infinite",
                    }}
                  />
                  Open to work
                </div>
              </li>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-base transition-colors duration-200"
                    style={{
                      fontFamily: "var(--app-font-body)",
                      color: "var(--text-secondary)",
                    }}
                    onClick={() => setMobileOpen(false)}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="relative text-sm transition-colors duration-200 group"
      style={{
        fontFamily: "var(--app-font-body)",
        fontWeight: 400,
        color: "var(--text-secondary)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)";
      }}
    >
      {label}
      {/* Smooth underline */}
      <span
        className="absolute left-0 bottom-[-3px] h-px w-0 group-hover:w-full transition-all duration-300"
        style={{ backgroundColor: "var(--brand)" }}
      />
    </a>
  );
}
