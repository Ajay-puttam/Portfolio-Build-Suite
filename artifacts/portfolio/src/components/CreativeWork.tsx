import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CARDS = [
  {
    title: "DevCatalyst Event Series",
    category: "Poster Design",
    gradient: "from-violet-900 via-purple-900 to-slate-900",
    accent: "#F5A623",
    size: "large",
  },
  {
    title: "Ammonium_Cyanide Content",
    category: "Social Media",
    gradient: "from-indigo-900 via-violet-900 to-slate-950",
    accent: "#F7BC58",
    size: "tall",
  },
  {
    title: "Tech Fest Banner Collection",
    category: "Event Branding",
    gradient: "from-slate-900 via-purple-950 to-violet-900",
    accent: "#F5A623",
    size: "medium",
  },
  {
    title: "AI-Generated Campaign Visual",
    category: "AI Visual",
    gradient: "from-violet-950 via-fuchsia-950 to-slate-900",
    accent: "#F7BC58",
    size: "medium",
  },
  {
    title: "Club Social Media Pack",
    category: "Brand Identity",
    gradient: "from-slate-950 via-indigo-950 to-violet-900",
    accent: "#F5A623",
    size: "wide",
  },
];

function CategoryPill({ label, accent }: { label: string; accent: string }) {
  return (
    <span
      className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium"
      style={{
        fontFamily: "var(--app-font-body)",
        backgroundColor: `${accent}18`,
        border: `1px solid ${accent}40`,
        color: accent,
      }}
    >
      {label}
    </span>
  );
}

function WorkCard({
  card,
  className = "",
  delay = 0,
  isInView,
}: {
  card: (typeof CARDS)[number];
  className?: string;
  delay?: number;
  isInView: boolean;
}) {
  const placeholderHeight =
    card.size === "tall" ? "h-64 sm:h-80" : card.size === "large" ? "h-52 sm:h-64" : "h-44 sm:h-52";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative rounded-2xl overflow-hidden flex flex-col transition-all duration-300 ${className}`}
      style={{
        backgroundColor: "var(--surface-card)",
        border: "1px solid var(--surface-border)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.border = `1px solid ${card.accent}80`;
        (e.currentTarget as HTMLDivElement).style.transform = "scale(1.02)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.border = "1px solid var(--surface-border)";
        (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
      }}
    >
      {/* Gradient placeholder */}
      <div
        className={`w-full ${placeholderHeight} bg-gradient-to-br ${card.gradient} flex items-center justify-center relative overflow-hidden`}
      >
        {/* Subtle noise overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.08) 0%, transparent 60%)",
          }}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(245,166,35,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(245,166,35,0.2) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <span
          className="text-xs tracking-widest uppercase opacity-40"
          style={{ fontFamily: "var(--app-font-body)", color: "#fff" }}
        >
          Preview
        </span>
      </div>

      {/* Card footer */}
      <div className="flex items-center justify-between gap-3 p-4">
        <div className="flex flex-col gap-1.5">
          <h3
            className="text-sm font-semibold leading-tight"
            style={{ fontFamily: "var(--app-font-display)", color: "var(--text-primary)" }}
          >
            {card.title}
          </h3>
          <CategoryPill label={card.category} accent={card.accent} />
        </div>
        <a
          href="#work"
          className="text-lg flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1"
          style={{ color: card.accent }}
          aria-label={`View ${card.title}`}
        >
          →
        </a>
      </div>
    </motion.div>
  );
}

export default function CreativeWork() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const [card1, card2, card3, card4, card5] = CARDS;

  return (
    <section
      id="work"
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
            Creative Work
          </p>
          <h2
            className="text-3xl sm:text-5xl font-extrabold"
            style={{
              fontFamily: "var(--app-font-display)",
              color: "var(--text-primary)",
              lineHeight: 1.1,
            }}
          >
            Visuals that stop the scroll.
          </h2>
          <p
            className="text-base max-w-lg"
            style={{
              fontFamily: "var(--app-font-body)",
              color: "var(--text-secondary)",
              fontWeight: 300,
            }}
          >
            Posters, social creatives, brand content and AI-generated visuals.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="flex flex-col gap-4">
          {/* Row 1: large + tall */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <WorkCard card={card1} className="sm:col-span-2" delay={0.05} isInView={isInView} />
            <WorkCard card={card2} className="sm:col-span-1" delay={0.12} isInView={isInView} />
          </div>
          {/* Row 2: medium + medium + wide */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <WorkCard card={card3} className="sm:col-span-1" delay={0.18} isInView={isInView} />
            <WorkCard card={card4} className="sm:col-span-1" delay={0.24} isInView={isInView} />
            <WorkCard card={card5} className="sm:col-span-1" delay={0.30} isInView={isInView} />
          </div>
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 group"
            style={{
              fontFamily: "var(--app-font-body)",
              color: "var(--brand-light)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--brand)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--brand-light)";
            }}
          >
            View all work
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
