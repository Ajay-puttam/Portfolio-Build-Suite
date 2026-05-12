import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CARDS = [
  {
    gradient: "from-amber-600 via-orange-500 to-brand",
    accentStart: "#F5A623",
    accentEnd: "#FFCA6B",
    title: "Design & Video Head, DevCatalyst",
    subtitle: "Student Technical Club, Matrusri Engineering College",
    body: "Led the graphic design and video editing team through two years of technical events. Produced event visuals, promotional content, and brand identity materials that defined the club's presence on campus and online.",
    stats: [
      { value: "2 Years", label: "Tenure" },
      { value: "Team Lead", label: "Role" },
      { value: "15+ Events", label: "Covered" },
    ],
    glowColor: "rgba(245,166,35,0.15)",
    borderHover: "rgba(245,166,35,0.5)",
  },
  {
    gradient: "from-teal-500 via-emerald-500 to-cyan-400",
    accentStart: "#14b8a6",
    accentEnd: "#34d399",
    title: "Co-Admin & Creative Lead",
    subtitle: "Ammonium_Cyanide — Education + Entertainment Meme Page",
    body: "Built and grew a cross-platform content brand to 40K+ followers. Created viral educational content blending internet culture with real value. Developed an intuitive sense for what makes content land — timing, format, and tone. Multiple videos crossing 1M+ views.",
    stats: [
      { value: "40K+", label: "Followers" },
      { value: "5M+", label: "Views" },
      { value: "Viral Content", label: "Specialty" },
    ],
    glowColor: "rgba(20,184,166,0.12)",
    borderHover: "rgba(20,184,166,0.45)",
  },
];

export default function Leadership() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="leadership"
      ref={ref}
      className="w-full py-28 px-6"
      style={{ backgroundColor: "var(--surface)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-xs font-medium tracking-widest uppercase"
            style={{
              fontFamily: "var(--app-font-body)",
              color: "var(--brand)",
              letterSpacing: "0.2em",
            }}
          >
            Leadership
          </p>
          <h2
            className="text-3xl sm:text-5xl font-extrabold"
            style={{
              fontFamily: "var(--app-font-display)",
              color: "var(--text-primary)",
              lineHeight: 1.1,
            }}
          >
            Leading from the front.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{
                duration: 0.6,
                delay: i * 0.14,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative rounded-2xl p-6 sm:p-8 flex flex-col gap-6 transition-all duration-300 overflow-hidden"
              style={{
                backgroundColor: "rgba(17,17,24,0.75)",
                border: "1px solid var(--surface-border)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 40px ${card.glowColor}`;
                (e.currentTarget as HTMLDivElement).style.borderColor = card.borderHover;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--surface-border)";
              }}
            >
              {/* Accent gradient line at top */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                style={{
                  background: `linear-gradient(to right, ${card.accentStart}, ${card.accentEnd}, transparent)`,
                }}
              />

              {/* Content */}
              <div className="flex flex-col gap-1">
                <h3
                  className="text-lg sm:text-xl font-bold leading-snug"
                  style={{
                    fontFamily: "var(--app-font-display)",
                    color: "var(--text-primary)",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-sm"
                  style={{
                    fontFamily: "var(--app-font-body)",
                    color: "var(--text-muted)",
                    fontWeight: 400,
                  }}
                >
                  {card.subtitle}
                </p>
              </div>

              <p
                className="text-sm leading-relaxed flex-1"
                style={{
                  fontFamily: "var(--app-font-body)",
                  color: "var(--text-secondary)",
                  fontWeight: 300,
                  lineHeight: 1.75,
                }}
              >
                {card.body}
              </p>

              {/* Stats */}
              <div
                className="flex flex-wrap gap-3 pt-4"
                style={{ borderTop: "1px solid var(--surface-border)" }}
              >
                {card.stats.map(({ value, label }) => (
                  <div key={label} className="flex flex-col gap-0.5">
                    <span
                      className="text-sm font-bold"
                      style={{
                        fontFamily: "var(--app-font-display)",
                        color: card.accentStart,
                      }}
                    >
                      {value}
                    </span>
                    <span
                      className="text-xs"
                      style={{
                        fontFamily: "var(--app-font-body)",
                        color: "var(--text-muted)",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
