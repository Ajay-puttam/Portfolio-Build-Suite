import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "wouter";

interface MediaItem {
  url: string;
  instagram?: string;
}

interface MediaCard {
  title: string;
  category: string;
  type: "image" | "video";
  media: MediaItem[];
}

const creativeSections: MediaCard[] = [
  {
    title: "DevCatalyst Banners",
    category: "Event Branding",
    type: "image",
    media: [
      {
        url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779177719/April4_GPT_AWS_banner_rlbgzm.png",
      },
      {
        url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779177721/mecs_ff_banner_ovup8r.png",
      },
      {
        url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779177719/AgenticAI_banner_exbjjt.png",
      },
    ],
  },
  {
    title: "YouDecide Competition",
    category: "Creative AI",
    type: "image",
    media: [
      {
        url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779183606/YD_Scientist_AI_kvxdhf.png",
      },
      {
        url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779183613/YD_Cricket_AI_bqzhor.jpg",
      },
      {
        url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779183623/YD_Anime_AI_a0n87l.jpg",
      },
      {
        url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779183603/YD_Games_AI_yzplys.png",
      },
      {
        url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779183605/YD_Inventions_AI_klxlsw.png",
      },
    ],
  },
  {
    title: "Event Certificates",
    category: "Certificates",
    type: "image",
    media: [
      {
        url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779170366/SIH_coordinators_uilosr.png",
      },
      {
        url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779170366/Freefire_Esports_obh4yz.png",
      },
      {
        url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779170365/KeyBoard_Challenge_yyfx3y.png",
      },
      {
        url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779170361/AIESECxMECS_gv3xer.png",
      },
      {
        url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779170360/Agentic_Ai_Workshop_kcg9te.png",
      },
    ],
  },
  {
    title: "Instagram Event Posts",
    category: "Social Media",
    type: "image",
    media: [
      {
        url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779178159/1_iugboi.png",
        instagram: "https://www.instagram.com/p/DXjgjQvCQG6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
      {
        url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779178185/1_ggduzq.png",
        instagram: "https://www.instagram.com/p/DXi4PDzEcCC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
      {
        url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779178041/1_gerv8k.png",
        instagram: "https://www.instagram.com/p/DX1H3WAkQEM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
      {
        url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779178182/8_tbeywg.png",
        instagram: "https://www.instagram.com/p/DXzW030CeJj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
    ],
  },
  {
    title: "DevCatalyst Posters",
    category: "Poster Design",
    type: "image",
    media: [
      {
        url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779190596/Freefire_Max_BGMI_Tournament_pzweqn.png",
      },
      {
        url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779190320/IMG-20250913-WA0001_qi9fxd.jpg",
      },
      {
        url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779190317/Devcatalyst_introposter_1_d9qaky.png",
      },
    ],
  },
];

const aiVisuals = [
  {
    title: "Corruption Pink Bottles Science",
    video:
      "https://res.cloudinary.com/dzvysgyz0/video/upload/f_auto,q_auto/v1779184756/Corruption_AI_faypo4.mp4",
    image:
      "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779183493/Corruption_AI_Cover_vy78uf.png",
    instagram:
      "https://www.instagram.com/reel/DUlQAw6D9Vr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "How a DC Motor Works",
    video:
      "https://res.cloudinary.com/dzvysgyz0/video/upload/f_auto,q_auto/v1779184883/DC_Motor_AI_dpcinv.mp4",
    image:
      "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779183525/DC_Motor_AI_Cover_sintg3.jpg",
    instagram: "#",
  },
  {
    title: "Science Behind Tears",
    video:
      "https://res.cloudinary.com/dzvysgyz0/video/upload/f_auto,q_auto/v1779183579/OnionScience_AI_rdybhm.mp4",
    image:
      "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779183490/OnionScience_AI_Cover_n7sldj.png",
    instagram:
      "https://www.instagram.com/reel/DUnz4E1j5zk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "Doppler Effect",
    video:
      "https://res.cloudinary.com/dzvysgyz0/video/upload/f_auto,q_auto/v1779183557/DopplerEffect_AI_w4i8do.mp4",
    image:
      "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779183490/DopplerEffect_AI_Cover_oso1xn.png",
    instagram:
      "https://www.instagram.com/reel/DU_AJRDj2co/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
];

function MediaCarouselCard({ item }: { item: MediaCard }) {
  const [index, setIndex] = useState(0);
  const [manualMode, setManualMode] = useState(false);

  useEffect(() => {
    if (manualMode || item.media.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % item.media.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [manualMode, item.media.length]);

  const current = item.media[index];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group h-fit overflow-hidden rounded-2xl border border-white/10 bg-[#111111] flex flex-col"
    >
      <div className="relative">
        {item.type === "image" ? (
          <img
            src={current.url}
            alt={item.title}
            className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
          />
        ) : (
          <video
            src={current.url}
            className="w-full h-auto object-contain"
            autoPlay
            muted
            loop
            playsInline
          />
        )}

        {item.media.length > 1 && (
          <>
            <button
              onClick={() => {
                setManualMode(true);
                setIndex((prev) =>
                  prev === 0 ? item.media.length - 1 : prev - 1
                );
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white"
            >
              ←
            </button>

            <button
              onClick={() => {
                setManualMode(true);
                setIndex((prev) => (prev + 1) % item.media.length);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white"
            >
              →
            </button>
          </>
        )}
      </div>

      <div className="p-5 flex flex-col gap-2">
        <div>
          <h3
            className="text-lg"
            style={{
              fontFamily: "var(--app-font-display)",
              color: "#F0F0EC",
            }}
          >
            {item.title}
          </h3>

          <p
            className="text-xs uppercase tracking-[0.18em] mt-2"
            style={{
              color: "#7A7A78",
              fontFamily: "var(--app-font-mono)",
            }}
          >
            {item.category}
          </p>
        </div>

        {current.instagram && (
          <a
            href={current.instagram}
            target="_blank"
            className="text-sm text-[#F5A623] hover:opacity-80 transition-opacity"
          >
            View on Instagram
          </a>
        )}
      </div>
    </motion.div>
  );
}

/* ── Animated engagement stat pill ── */
function AnimatedStat({
  value,
  decimals = 0,
  suffix,
  label,
  icon,
  active,
  delay = 0,
}: {
  value: number;
  decimals?: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
  active: boolean;
  delay?: number;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) {
      setDisplay(0);
      return;
    }
    let raf: number;
    const duration = 1600;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start - delay;
      if (elapsed < 0) { raf = requestAnimationFrame(tick); return; }
      const t = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(parseFloat((eased * value).toFixed(decimals)));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, value, decimals, delay]);

  return (
    <div className="flex flex-col items-center gap-2">
      <div style={{ color: "#F0F0EC" }}>{icon}</div>
      <span
        className="text-xl font-semibold tabular-nums leading-none"
        style={{ fontFamily: "var(--app-font-display)", color: "#F0F0EC" }}
      >
        {display.toFixed(decimals)}{suffix}
      </span>
      <span
        className="text-[10px] uppercase tracking-[0.18em]"
        style={{ color: "#7A7A78", fontFamily: "var(--app-font-mono)" }}
      >
        {label}
      </span>
    </div>
  );
}

const featuredEdits = [
  {
    title: "DevCatalyst Freshers Introduction Film",
    subheading: "DevCatalyst",
    description:
      "This edit holds a special place in my journey. I created the official introduction video for the DevCatalyst Freshers Induction Program, designed to inspire and welcome new students into the club. The video was screened at MV Sridhar Hall, MECS, in front of 300+ freshers, and the response was unforgettable. The applause at the end and the enthusiastic student engagement made it one of my most meaningful projects. Beyond the visuals, it successfully encouraged many freshers to join the DevCatalyst community, making the edit impactful both creatively and personally.",
    video:
      "https://res.cloudinary.com/dzvysgyz0/video/upload/f_auto,q_auto/v1779186219/DC_FreshersInduction_Intro_g0miy8.mp4",
    instagram:
      "https://www.instagram.com/reel/DOc1WFoES4b/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "Walter Lewin — Viral Physics Edit",
    subheading: "Ammonium Cyanide",
    description:
      "One of the most impactful edits on Ammonium Cyanide, this Walter Lewin phonk-style reel became the page's biggest viral hit with 26.6M+ views, 3M+ likes, and 20K+ followers gained. The concept originated from my co-admin, and I took it from idea to full execution, combining trending phonk audio, fast-paced editing, and Walter Lewin's energetic personality to make physics feel cinematic, intense, and entertaining for mainstream audiences.",
    video:
      "https://res.cloudinary.com/dzvysgyz0/video/upload/f_auto,q_auto/v1779193011/Lewin_26mil_dbtmca.mp4",
    instagram:
      "https://www.instagram.com/reel/DBY8K3ZPj3h/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
];

export default function CreativeWork() {
  const [activeAiIndex, setActiveAiIndex] = useState(0);
  const [activeFeaturedIndex, setActiveFeaturedIndex] = useState(0);

  const featuredEdit = featuredEdits[activeFeaturedIndex];

  const goPrevFeatured = () =>
    setActiveFeaturedIndex((prev) =>
      prev === 0 ? featuredEdits.length - 1 : prev - 1
    );
  const goNextFeatured = () =>
    setActiveFeaturedIndex((prev) => (prev + 1) % featuredEdits.length);

  return (
    <section
      id="creative-work"
      className="w-full py-32 px-6"
      style={{ backgroundColor: "var(--surface)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        <div className="flex flex-col gap-5">
          <p
            className="text-xs tracking-[0.2em] uppercase"
            style={{
              color: "var(--brand)",
              fontFamily: "var(--app-font-mono)",
            }}
          >
            Creative Work
          </p>

          <h2
            className="text-4xl md:text-6xl leading-none"
            style={{
              fontFamily: "var(--app-font-display)",
              color: "#F0F0EC",
            }}
          >
            Visuals that stop the scroll.
          </h2>

          <p
            className="max-w-2xl text-base"
            style={{
              color: "#8A8A88",
              fontFamily: "var(--app-font-body)",
            }}
          >
            Posters, social creatives, video edits, and AI-generated visuals
            created across events, internet content, and experimental storytelling.
          </p>
        </div>

        <div className="columns-1 md:columns-2 xl:columns-3 gap-6">
          {creativeSections.map((item) => (
            <div key={item.title} className="break-inside-avoid mb-6">
              <MediaCarouselCard item={item} />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <p
              className="text-xs uppercase tracking-[0.2em]"
              style={{
                color: "var(--brand)",
                fontFamily: "var(--app-font-mono)",
              }}
            >
              Video Edits
            </p>

            <h2
              className="text-4xl md:text-5xl leading-none"
              style={{
                fontFamily: "var(--app-font-display)",
                color: "#F0F0EC",
              }}
            >
              Motion, pacing, and storytelling.
            </h2>
          </div>

          {/* ── Cinematic Featured Showcase Carousel ── */}
          <div className="flex items-center gap-4 lg:gap-6">
            {/* Prev button — outside video, left */}
            <button
              onClick={goPrevFeatured}
              aria-label="Previous featured edit"
              className="hidden lg:flex flex-shrink-0 w-11 h-11 items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:border-[#F5A623]/40 text-white transition-all duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Showcase grid */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center min-w-0">
              {/* Video — key forces remount so new video autoplays */}
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111111]">
                <div className="relative w-full flex items-center justify-center bg-black/40">
                  <AnimatePresence mode="wait">
                    <motion.video
                      key={featuredEdit.video}
                      src={featuredEdit.video}
                      className="w-full object-contain"
                      style={{ maxHeight: "75vh" }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls
                    />
                  </AnimatePresence>
                </div>
              </div>

              {/* Text — fades on change */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeaturedIndex}
                  className="flex flex-col gap-5"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-3">
                    <p
                      className="text-xs uppercase tracking-[0.2em]"
                      style={{
                        color: "#7A7A78",
                        fontFamily: "var(--app-font-mono)",
                      }}
                    >
                      Featured Edit
                    </p>
                    {/* Dot indicator */}
                    <div className="flex gap-1.5 items-center">
                      {featuredEdits.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveFeaturedIndex(i)}
                          aria-label={`Go to edit ${i + 1}`}
                          className="transition-all duration-300 rounded-full"
                          style={{
                            width: i === activeFeaturedIndex ? "20px" : "6px",
                            height: "6px",
                            backgroundColor:
                              i === activeFeaturedIndex
                                ? "#F5A623"
                                : "rgba(255,255,255,0.15)",
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <p
                    className="text-xs uppercase tracking-[0.18em]"
                    style={{
                      color: "#F5A623",
                      fontFamily: "var(--app-font-mono)",
                    }}
                  >
                    {featuredEdit.subheading}
                  </p>

                  <h3
                    className="text-3xl leading-tight"
                    style={{
                      fontFamily: "var(--app-font-display)",
                      color: "#F0F0EC",
                    }}
                  >
                    {featuredEdit.title}
                  </h3>

                  <p
                    className="text-base leading-relaxed"
                    style={{
                      color: "#8A8A88",
                      fontFamily: "var(--app-font-body)",
                    }}
                  >
                    {featuredEdit.description}
                  </p>

                  {/* Engagement stats — only for Lewin reel */}
                  {activeFeaturedIndex === 1 && (
                    <div className="flex items-center gap-6 px-5 py-4 rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm w-fit">
                      <AnimatedStat
                        value={26.6}
                        decimals={1}
                        suffix="M+"
                        label="Views"
                        active={activeFeaturedIndex === 1}
                        delay={0}
                        icon={
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        }
                      />
                      <div className="w-px h-10 bg-white/10" />
                      <AnimatedStat
                        value={3}
                        decimals={0}
                        suffix="M+"
                        label="Likes"
                        active={activeFeaturedIndex === 1}
                        delay={200}
                        icon={
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                        }
                      />
                      <div className="w-px h-10 bg-white/10" />
                      <AnimatedStat
                        value={20}
                        decimals={0}
                        suffix="K+"
                        label="Followers"
                        active={activeFeaturedIndex === 1}
                        delay={400}
                        icon={
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <line x1="19" y1="8" x2="19" y2="14" />
                            <line x1="22" y1="11" x2="16" y2="11" />
                          </svg>
                        }
                      />
                    </div>
                  )}

                  <a
                    href={featuredEdit.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F5A623] text-sm hover:opacity-80 transition-opacity w-fit"
                  >
                    Watch on Instagram
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next button — outside video, right */}
            <button
              onClick={goNextFeatured}
              aria-label="Next featured edit"
              className="hidden lg:flex flex-shrink-0 w-11 h-11 items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:border-[#F5A623]/40 text-white transition-all duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Mobile nav buttons — shown below on small screens */}
          <div className="flex lg:hidden justify-center gap-4 -mt-4">
            <button
              onClick={goPrevFeatured}
              aria-label="Previous featured edit"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:border-[#F5A623]/40 text-white transition-all duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={goNextFeatured}
              aria-label="Next featured edit"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:border-[#F5A623]/40 text-white transition-all duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <div>
              <p
                className="text-xs uppercase tracking-[0.2em]"
                style={{
                  color: "var(--brand)",
                  fontFamily: "var(--app-font-mono)",
                }}
              >
                Creative AI Visuals
              </p>

              <h2
                className="text-4xl md:text-5xl leading-none mt-3"
                style={{
                  fontFamily: "var(--app-font-display)",
                  color: "#F0F0EC",
                }}
              >
                AI-generated science storytelling.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#111111] flex flex-col">
              <div className="relative w-full flex items-center justify-center bg-black/40">
                <video
                  key={aiVisuals[activeAiIndex].video}
                  src={aiVisuals[activeAiIndex].video}
                  poster={aiVisuals[activeAiIndex].image}
                  className="w-full object-contain"
                  style={{ maxHeight: "75vh" }}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                />

                <button
                  onClick={() => setActiveAiIndex((prev) => (prev === 0 ? aiVisuals.length - 1 : prev - 1))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:border-[#F5A623]/40 text-white transition-all z-10"
                  aria-label="Previous video"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={() => setActiveAiIndex((prev) => (prev + 1) % aiVisuals.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:border-[#F5A623]/40 text-white transition-all z-10"
                  aria-label="Next video"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>

              <div className="p-5 flex flex-col gap-3 border-t border-white/5">
                <h3
                  className="text-2xl"
                  style={{
                    fontFamily: "var(--app-font-display)",
                    color: "#F0F0EC",
                  }}
                >
                  {aiVisuals[activeAiIndex].title}
                </h3>

                <a
                  href={aiVisuals[activeAiIndex].instagram}
                  target="_blank"
                  className="text-[#F5A623] text-sm hover:opacity-80 transition-opacity w-fit"
                >
                  View Reel
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111111] transition-all duration-300">
                <motion.img
                  key={aiVisuals[activeAiIndex].image}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  src={aiVisuals[activeAiIndex].image}
                  alt={aiVisuals[activeAiIndex].title}
                  className="w-full h-auto object-contain"
                />

                <div className="p-5">
                  <p
                    className="text-xs uppercase tracking-[0.18em] mb-2"
                    style={{
                      color: "#7A7A78",
                      fontFamily: "var(--app-font-mono)",
                    }}
                  >
                    Now Playing
                  </p>
                  <p
                    className="text-lg"
                    style={{
                      color: "#F0F0EC",
                      fontFamily: "var(--app-font-display)",
                    }}
                  >
                    {aiVisuals[activeAiIndex].title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 flex justify-center">
          <Link href="/work">
            <a
              className="group flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-[#111111] text-[#F0F0EC] hover:bg-white hover:text-black transition-all duration-300"
              style={{ fontFamily: "var(--app-font-body)" }}
            >
              <span className="text-sm font-medium tracking-wide">
                View All Work
              </span>
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
