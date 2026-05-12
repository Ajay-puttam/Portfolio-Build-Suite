import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, Download } from "lucide-react";

const CONTACT_CARDS = [
  {
    icon: Mail,
    label: "Mail me",
    value: "hello@varun.dev",
    href: "mailto:hello@varun.dev",
    accent: "#F5A623",
  },
  {
    icon: Linkedin,
    label: "Connect",
    value: "linkedin.com/in/yourprofile",
    href: "https://linkedin.com/in/yourprofile",
    accent: "#FFCA6B",
  },
  {
    icon: Github,
    label: "See Code",
    value: "github.com/yourusername",
    href: "https://github.com/yourusername",
    accent: "#F5A623",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="w-full py-28 px-6"
      style={{ backgroundColor: "var(--surface-card)" }}
    >
      <motion.div
        className="max-w-2xl mx-auto flex flex-col items-center gap-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header */}
        <div className="flex flex-col items-center gap-4">
          <motion.p
            variants={itemVariants}
            className="text-xs font-medium tracking-widest uppercase"
            style={{
              fontFamily: "var(--app-font-body)",
              color: "var(--brand)",
              letterSpacing: "0.2em",
            }}
          >
            Let's Build
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-5xl font-extrabold leading-tight"
            style={{
              fontFamily: "var(--app-font-display)",
              color: "var(--text-primary)",
              lineHeight: 1.1,
            }}
          >
            Have a project in mind?{" "}
            <span style={{ color: "var(--brand-light)" }}>I'm available.</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-base max-w-md"
            style={{
              fontFamily: "var(--app-font-body)",
              color: "var(--text-secondary)",
              fontWeight: 300,
              lineHeight: 1.7,
            }}
          >
            Reach out for creative AI roles, design collaborations, or just to connect.
          </motion.p>
        </div>

        {/* Contact cards */}
        <motion.div
          variants={itemVariants}
          className="w-full flex flex-col sm:flex-row gap-4"
        >
          {CONTACT_CARDS.map(({ icon: Icon, label, value, href, accent }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex flex-col items-center gap-3 p-5 rounded-xl text-center transition-all duration-300 group"
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--surface-border)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = `${accent}80`;
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 8px 30px ${accent}18`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--surface-border)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              }}
            >
              <span
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${accent}18`, color: accent }}
              >
                <Icon size={18} strokeWidth={1.5} />
              </span>
              <span
                className="text-xs font-medium tracking-wide uppercase"
                style={{
                  fontFamily: "var(--app-font-body)",
                  color: accent,
                  letterSpacing: "0.1em",
                }}
              >
                {label}
              </span>
              <span
                className="text-xs"
                style={{
                  fontFamily: "var(--app-font-body)",
                  color: "var(--text-muted)",
                  wordBreak: "break-all",
                }}
              >
                {value}
              </span>
            </a>
          ))}
        </motion.div>

        {/* Resume CTA */}
        <motion.div variants={itemVariants}>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-medium transition-all duration-300"
            style={{
              fontFamily: "var(--app-font-body)",
              backgroundColor: "transparent",
              color: "var(--brand-light)",
              border: "1px solid var(--brand)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "rgba(245,166,35,0.1)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 24px rgba(245,166,35,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
            }}
          >
            <Download size={15} strokeWidth={1.5} />
            Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
