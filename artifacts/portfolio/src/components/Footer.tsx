import { Github, Linkedin, Instagram } from "lucide-react";

const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/yourprofile", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/yourhandle", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer
      className="w-full px-6 py-8"
      style={{
        borderTop: "1px solid var(--surface-border)",
        backgroundColor: "var(--surface)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left */}
        <p
          className="text-xs text-center sm:text-left"
          style={{
            fontFamily: "var(--app-font-body)",
            color: "var(--text-muted)",
          }}
        >
          © 2025 Varun. Built with React &amp; Framer Motion.
        </p>

        {/* Center */}
        <p
          className="text-xs text-center"
          style={{
            fontFamily: "var(--app-font-body)",
            color: "var(--text-muted)",
          }}
        >
          Creative AI Technologist · Hyderabad, India
        </p>

        {/* Right: social icons */}
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="transition-colors duration-200"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "var(--brand-light)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)")
              }
            >
              <Icon size={16} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
