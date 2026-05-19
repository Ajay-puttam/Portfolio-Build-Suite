import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ROLE_TAGS = [
  { label: "Visual Design", color: "var(--brand)" },
  { label: "Cinematic Editing", color: "var(--brand-light)" },
  { label: "AI Systems", color: "var(--brand)" },
  { label: "Creative Technology", color: "var(--brand-light)" },
];

const STATS = [
  { value: "CSE", label: "Engineering + Creative Thinking" },
  { value: "32+", label: "Viral Reels · 1M+ Views" },
  { value: "3+", label: "Years of Creative Exploration" }];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full py-28 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--surface)" }}
    >
      {/* Editorial background number */}
      <div
        className="pointer-events-none select-none absolute"
        aria-hidden
        style={{
          fontFamily: "var(--app-font-display)",
          fontSize: "clamp(140px, 16vw, 200px)",
          fontWeight: 700,
          color: "rgba(255,255,255,0.03)",
          right: "-20px",
          top: "50%",
          transform: "translateY(-50%)",
          lineHeight: 1,
          letterSpacing: "-0.04em",
          userSelect: "none",
        }}
      >
        02
      </div>

      {/* Metadata row */}
      <motion.p
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto mb-10 text-[11px] tracking-[0.22em] uppercase"
        style={{
          fontFamily: "var(--app-font-mono)",
          color: "#656565",
          opacity: 0.45,
        }}
      >
        Creative Technologist · Visual Storytelling · AI Systems
      </motion.p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20 items-start">

        {/* ── LEFT COLUMN — 3/5 ── */}
        <motion.div
          className="lg:col-span-3 flex flex-col gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >

          {/* Section label */}
          <motion.p
            variants={itemVariants}
            className="text-xs font-medium tracking-widest uppercase"
            style={{
              fontFamily: "var(--app-font-body)",
              color: "var(--brand)",
              letterSpacing: "0.2em",
            }}
          >
            About me
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight"
            style={{
              fontFamily: "var(--app-font-display)",
              color: "var(--text-primary)",
              lineHeight: 1.1,
            }}
          >
            Not just an engineer.{" "}
            <span style={{ color: "var(--brand-light)" }}>
              A builder of digital experiences.
            </span>
          </motion.h2>

          {/* Body paragraph 1 */}
          <motion.p
            variants={itemVariants}
            className="text-base leading-relaxed"
            style={{
              fontFamily: "var(--app-font-body)",
              fontWeight: 300,
              color: "var(--text-secondary)",
              lineHeight: 1.75,
            }}
          >
            I'm Ajay, a final-year CSE student building at the intersection of{" "}
            <span style={{ color: "var(--brand-light)", fontWeight: 400 }}>
              technology, storytelling, and visual design
            </span>
            . What started as curiosity about video editing gradually evolved into
            content creation, graphic design, AI development, and frontend experiences,
            driven largely by self-learning and the excitement of creating things people
            genuinely connect with.
          </motion.p>

          {/* Body paragraph 2 */}
          <motion.p
            variants={itemVariants}
            className="text-base leading-relaxed"
            style={{
              fontFamily: "var(--app-font-body)",
              fontWeight: 300,
              color: "var(--text-secondary)",
              lineHeight: 1.75,
            }}
          >
            At DevCatalyst, a student-led innovation and tech community, I led the
            graphic design and video editing team, working on event visuals, social
            content, visual assets, and creative direction for the club's digital
            presence. Alongside that, I co-created Ammonium_Cyanide, an educational meme
            and content platform that grew to 40K+ followers and produced{" "}
            <span style={{ color: "var(--brand-light)", fontWeight: 400 }}>
              32+ viral reels
            </span>{" "}
            crossing 1M+ views.
          </motion.p>

          {/* Body paragraph 3 */}
          <motion.p
            variants={itemVariants}
            className="text-base leading-relaxed"
            style={{
              fontFamily: "var(--app-font-body)",
              fontWeight: 300,
              color: "var(--text-secondary)",
              lineHeight: 1.75,
            }}
          >
            On the technical side, I enjoy building practical AI-driven systems and
            interfaces. I’ve worked on projects ranging from an AI-based traffic
            management system focused on solving real-world congestion problems to
            recommendation systems, NLP tools, and interactive frontend experiences using
            Python, Streamlit, and Hugging Face. I’m calm, detail-oriented, and slightly
            perfectionistic about the things I create, and I’ve spent the last few years{" "}
            <span style={{ color: "var(--brand-light)", fontWeight: 400 }}>
              deliberately developing both my technical and creative instincts together
            </span>
            .
          </motion.p>

          {/* Stats */}
          <motion.div variants={itemVariants} className="flex gap-4 mt-2">
            {STATS.map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col gap-1 px-5 py-4 rounded-xl"
                style={{
                  backgroundColor: "var(--surface-card)",
                  border: "1px solid var(--surface-border)",
                  boxShadow: "0 0 24px rgba(245, 166, 35, 0.08) inset",
                }}
              >
                <span
                  className="text-2xl font-extrabold"
                  style={{
                    fontFamily: "var(--app-font-display)",
                    color: "var(--brand-light)",
                  }}
                >
                  {value}
                </span>
                <span
                  className="text-[10px] tracking-[0.18em] uppercase"
                  style={{
                    fontFamily: "var(--app-font-mono)",
                    color: "var(--text-muted)",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── RIGHT COLUMN — 2/5 ── */}
        <motion.div
          className="lg:col-span-2 lg:pl-8 lg:border-l flex flex-col gap-8"
          style={{ borderColor: "rgba(255,255,255,0.05)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Portrait — editorial, cinematic */}
          <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "3/4" }}>
            <img
              src="/ajay-portrait.png"
              alt="Ajay Puttam"
              className="w-full h-full object-cover object-top"
              style={{
                filter: "saturate(0.82) contrast(0.96) brightness(0.95)",
              }}
            />
            {/* Bottom fade — blends into dark background */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 55%, rgba(10,10,15,0.55) 80%, rgba(10,10,15,0.9) 100%)",
              }}
            />
            {/* Subtle left-edge vignette to match the image's own light */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, transparent 70%, rgba(10,10,15,0.3) 100%)",
              }}
            />
          </div>

          <div
            className="rounded-2xl p-6 flex flex-col gap-6"
            style={{
              backgroundColor: "rgba(17, 17, 24, 0.7)",
              border: "1px solid var(--surface-border)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              boxShadow:
                "0 0 40px rgba(245, 166, 35, 0.07), inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            {/* Role tags */}
            <div>
              <p
                className="text-xs mb-3 tracking-widest uppercase"
                style={{
                  fontFamily: "var(--app-font-mono)",
                  color: "var(--text-muted)",
                  letterSpacing: "0.18em",
                  fontSize: "10px",
                }}
              >
                Roles
              </p>
              <div className="flex flex-wrap gap-2">
                {ROLE_TAGS.map(({ label, color }, i) => (
                  <span
                    key={label}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      fontFamily: "var(--app-font-body)",
                      backgroundColor:
                        i % 2 === 0
                          ? "rgba(245, 166, 35, 0.15)"
                          : "rgba(247, 188, 88, 0.1)",
                      border: `1px solid ${color}40`,
                      color: color,
                    }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
