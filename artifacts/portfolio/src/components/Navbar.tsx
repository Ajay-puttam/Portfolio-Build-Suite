import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#creative-work" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Tools", href: "#tools" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location !== "/") {
      setLocation("/");
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    if (location !== "/") {
      setLocation("/");
      // Wait for React to render the homepage before scrolling
      setTimeout(() => {
        const el = document.getElementById(hash.replace("#", ""));
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(10, 10, 15, 0.70)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.07)"
          : "1px solid transparent",
      }}
    >
      <nav
        className="mx-auto flex items-center justify-between"
        style={{
          maxWidth: "1400px",
          paddingLeft: "clamp(24px, 3vw, 48px)",
          paddingRight: "clamp(24px, 3vw, 48px)",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        {/* Brand */}
        <a
          href="/"
          onClick={handleLogoClick}
          style={{
            fontFamily: "var(--app-font-display)",
            fontWeight: 500,
            fontSize: "1rem",
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          Ajay Puttam
          <span style={{ color: "var(--brand)" }}>.</span>
        </a>

        {/* Nav links — desktop only */}
        <ul className="hidden md:flex items-center" style={{ gap: "32px", listStyle: "none", margin: 0, padding: 0 }}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={`/${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  fontFamily: "var(--app-font-mono)",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  transition: "color 200ms",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)")
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:ajay.puttam3@gmail.com"
          className="nav-cta"
          style={{
            fontFamily: "var(--app-font-mono)",
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingTop: "10px",
            paddingBottom: "10px",
            borderRadius: "9999px",
            border: "1px solid var(--surface-border)",
            color: "var(--text-primary)",
            textDecoration: "none",
            transition: "background-color 250ms, color 250ms, border-color 250ms",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.backgroundColor = "var(--text-primary)";
            el.style.color = "var(--surface)";
            el.style.borderColor = "var(--text-primary)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.backgroundColor = "transparent";
            el.style.color = "var(--text-primary)";
            el.style.borderColor = "var(--surface-border)";
          }}
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
