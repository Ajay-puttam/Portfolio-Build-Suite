import { motion, useInView } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";

const TIMELINE_ACCENT = "#F5A623";
const META_COLOR = "rgba(240, 240, 236, 0.5)";
const TIMELINE_LINE_COLOR = "rgba(255, 255, 255, 0.24)";

interface ExperienceStat {
  value: string;
  label: string;
}

interface Experience {
  period: string;
  title: string;
  organization: string;
  description: string;
  stats: ExperienceStat[];
  logoSrc: string;
  logoAlt: string;
  instagramUrl: string | null;
}

const EXPERIENCES: Experience[] = [
  {
    period: "2025 — Present",
    title: "Design & Video Lead",
    organization:
      "DevCatalyst · Student Innovation & Technical Club · Matrusri Engineering College",
    description:
      "Led the graphic design and video editing team for DevCatalyst, creating event visuals, promotional content, social media creatives, and digital assets that shaped the club's visual presence both on campus and online. Worked across multiple technical events, coordinating creative direction and content execution for the community's growing identity.",
    stats: [
      { value: "1 Year", label: "Tenure" },
      { value: "Creative Lead", label: "Role" },
      { value: "11+ Events", label: "Executed" },
    ],
    logoSrc: "/logos/devcatalyst.png",
    logoAlt: "DevCatalyst",
    instagramUrl: "https://www.instagram.com/devcatalystt/",
  },
  {
    period: "2024 — Present",
    title: "Co-Admin & Creative Lead",
    organization: "Ammonium_Cyanide · Education + Entertainment Meme Page",
    description:
      "Co-created and grew an education and entertainment content platform centered around science, internet culture, and short-form storytelling. Worked on content strategy, editing, visual direction, and audience engagement across platforms, helping the page grow to 40K+ followers and produce 32+ viral reels crossing 1M+ views. The experience helped me develop a strong understanding of audience psychology, pacing, timing, and how digital content earns attention at scale.",
    stats: [
      { value: "40K+", label: "Followers" },
      { value: "32+", label: "Viral Reels" },
      { value: "Audience Psychology", label: "Focus" },
    ],
    logoSrc: "/logos/ammoniumcyanide.png",
    logoAlt: "Ammonium Cyanide",
    instagramUrl: "https://www.instagram.com/ammonium_cyanide/",
  },
  {
    period: "2025",
    title: "AI Developer Intern",
    organization: "Summer of AI 2025 · VISWAM.AI & Swecha",
    description:
      "Selected as an AI Developer Intern for Summer of AI 2025, a large-scale open-source AI internship initiative by VISWAM.AI and Swecha. Worked on practical AI and NLP workflows, collaborative development, and real-world machine learning applications while exploring multilingual AI systems, LLM-based tools, and open-source engineering practices in a community-driven environment.",
    stats: [
      { value: "AI / NLP", label: "Focus" },
      { value: "Open Source", label: "Environment" },
      { value: "Collaborative", label: "Development" },
    ],
    logoSrc: "/logos/viswam.png",
    logoAlt: "VISWAM.AI",
    instagramUrl: null,
  },
];

function ExperienceLogo({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className="flex h-full w-full items-center justify-center"
        style={{
          fontFamily: "var(--app-font-mono)",
          fontSize: "14px",
          fontWeight: 600,
          color: TIMELINE_ACCENT,
        }}
      >
        {alt.charAt(0)}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-cover"
      onError={() => setFailed(true)}
    />
  );
}

export default function Leadership() {
  const ref = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineEndRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  useLayoutEffect(() => {
    const updateLineHeight = () => {
      if (!timelineRef.current || !lineEndRef.current) return;
      const timelineTop = timelineRef.current.getBoundingClientRect().top;
      const endBottom = lineEndRef.current.getBoundingClientRect().bottom;
      setLineHeight(Math.max(0, endBottom - timelineTop));
    };

    updateLineHeight();
    window.addEventListener("resize", updateLineHeight);
    return () => window.removeEventListener("resize", updateLineHeight);
  }, [isInView]);

  return (
    <section
      id="leadership"
      ref={ref}
      className="w-full py-28 px-6"
      style={{ backgroundColor: "var(--surface)" }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        {/* Header */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.6, delay: 0, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            className="text-xs font-medium uppercase tracking-widest"
            style={{
              fontFamily: "var(--app-font-body)",
              color: "var(--brand)",
              letterSpacing: "0.2em",
            }}
          >
            Experience & Leadership
          </p>
          <h2
            className="text-3xl font-extrabold sm:text-5xl"
            style={{
              fontFamily: "var(--app-font-display)",
              color: "var(--text-primary)",
              lineHeight: 1.1,
            }}
          >
            Experiences that shaped the way I build.
          </h2>
          <p
            className="max-w-2xl text-sm leading-relaxed sm:text-base"
            style={{
              fontFamily: "var(--app-font-body)",
              fontWeight: 300,
              color: "var(--text-secondary)",
              lineHeight: 1.75,
            }}
          >
            From leading creative teams to working on open-source AI initiatives, these experiences
            helped shape both my technical thinking and creative approach.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative flex w-full flex-col md:-ml-12">
          {EXPERIENCES.map((item, index) => (
            <motion.div
              key={item.title}
              className={`relative pl-10 md:pr-28 ${index < EXPERIENCES.length - 1 ? "pb-10" : "pb-8"}`}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Timeline segment line */}
              <div
                className="absolute left-[6px] top-[16px] bottom-0 w-[2px]"
                style={{
                  backgroundColor: "var(--surface-border)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.2) 100%)",
                  maskImage: "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.2) 100%)",
                }}
                aria-hidden
              />

              {/* Timeline dot */}
              <div
                className="absolute left-0 top-[2px] h-[14px] w-[14px] rounded-full"
                style={{
                  background: TIMELINE_ACCENT,
                  boxShadow: "0 0 0 4px rgba(245, 166, 35, 0.08)",
                }}
                aria-hidden
              />

              {/* Desktop Right Side (Logo + Instagram) */}
              <div className="hidden md:flex absolute right-0 top-7 flex-col items-center gap-3">
                <div
                  className="flex h-16 w-16 overflow-hidden rounded-2xl"
                  style={{
                    border: "1px solid var(--surface-border)",
                    background: "rgba(255,255,255,0.04)",
                  }}
                >
                  <ExperienceLogo src={item.logoSrc} alt={item.logoAlt} />
                </div>
                {item.instagramUrl && (
                  <motion.a
                    href={item.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-1.5 rounded-lg px-3 py-1.5"
                    style={{
                      fontFamily: "var(--app-font-mono)",
                      fontSize: "10px",
                      letterSpacing: "0.08em",
                      color: "rgba(255, 255, 255, 0.75)",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                      border: "1px solid var(--surface-border)",
                      background: "rgba(255,255,255,0.04)",
                    }}
                    whileHover={{ y: -1, backgroundColor: "rgba(255,255,255,0.08)" }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <span className="transition-colors duration-200 group-hover:text-[#F5A623]">↗</span>
                    <span className="transition-colors duration-200 group-hover:text-white">Instagram</span>
                  </motion.a>
                )}
              </div>

              {/* Period */}
              <p
                style={{
                  fontFamily: "var(--app-font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: META_COLOR,
                  marginBottom: "10px",
                }}
              >
                {item.period}
              </p>

              {/* Logo + title */}
              <div className="mb-1 flex flex-row items-center gap-3">
                <div
                  className="md:hidden flex h-9 w-9 flex-shrink-0 overflow-hidden rounded-xl"
                  style={{
                    border: "1px solid var(--surface-border)",
                    background: "rgba(255,255,255,0.04)",
                  }}
                >
                  <ExperienceLogo src={item.logoSrc} alt={item.logoAlt} />
                </div>
                <h3
                  className="text-lg font-extrabold tracking-tight sm:text-xl"
                  style={{
                    fontFamily: "var(--app-font-display)",
                    color: "var(--text-primary)",
                    lineHeight: 1.15,
                  }}
                >
                  {item.title}
                </h3>
              </div>

              {/* Organization + Instagram */}
              <div className="mb-4 flex flex-row flex-wrap items-center gap-3">
                <p
                  className="text-sm"
                  style={{
                    fontFamily: "var(--app-font-body)",
                    color: TIMELINE_ACCENT,
                    fontWeight: 400,
                  }}
                >
                  {item.organization}
                </p>
                {item.instagramUrl && (
                  <motion.a
                    href={item.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:hidden transition-colors hover:underline"
                    style={{
                      fontFamily: "var(--app-font-mono)",
                      fontSize: "10px",
                      letterSpacing: "0.1em",
                      color: "var(--text-muted)",
                      opacity: 0.7,
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    whileHover={{ x: 2, opacity: 1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)";
                    }}
                    onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)";
                    }}
                  >
                    ↗ Instagram
                  </motion.a>
                )}
              </div>

              {/* Description */}
              <p
                className="text-sm sm:text-base"
                style={{
                  fontFamily: "var(--app-font-body)",
                  fontWeight: 300,
                  color: "var(--text-secondary)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                {item.description}
              </p>

              {/* Stats */}
              <div
                ref={index === EXPERIENCES.length - 1 ? lineEndRef : undefined}
                className="flex flex-row flex-wrap items-end gap-x-8 gap-y-3"
                style={{
                  borderTop: `1px solid ${TIMELINE_LINE_COLOR}`,
                  paddingTop: "14px",
                }}
              >
                {item.stats.map((stat) => (
                  <div key={stat.label} className="flex min-w-[72px] flex-col gap-px">
                    <span
                      className="text-sm font-bold leading-none"
                      style={{
                        fontFamily: "var(--app-font-display)",
                        color: TIMELINE_ACCENT,
                      }}
                    >
                      {stat.value}
                    </span>
                    <span
                      className="leading-snug"
                      style={{
                        fontFamily: "var(--app-font-body)",
                        fontSize: "11px",
                        color: META_COLOR,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {stat.label}
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
