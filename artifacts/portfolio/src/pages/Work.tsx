import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";

interface MediaItem {
  type: "image" | "video";
  url: string;
  instagram?: string;
}

interface ArchiveSection {
  title: string;
  items: MediaItem[];
}

const devCatalystBanners: MediaItem[] = [
  { type: "image", url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779177719/April4_GPT_AWS_banner_rlbgzm.png" },
  { type: "image", url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779177721/mecs_ff_banner_ovup8r.png" },
  { type: "image", url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779177719/AgenticAI_banner_exbjjt.png" },
];

const posters: MediaItem[] = [
  { type: "image", url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779190596/Freefire_Max_BGMI_Tournament_pzweqn.png" },
  { type: "image", url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779190320/IMG-20250913-WA0001_qi9fxd.jpg" },
  { type: "image", url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779190317/Devcatalyst_introposter_1_d9qaky.png" },
];

const certificates: MediaItem[] = [
  { type: "image", url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779170366/SIH_coordinators_uilosr.png" },
  { type: "image", url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779170366/Freefire_Esports_obh4yz.png" },
  { type: "image", url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779170365/KeyBoard_Challenge_yyfx3y.png" },
  { type: "image", url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779170361/AIESECxMECS_gv3xer.png" },
  { type: "image", url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779170360/Agentic_Ai_Workshop_kcg9te.png" },
  { type: "image", url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779212162/Class10th_Certificates_alursx.png" },
];

const instagramPosts: MediaItem[] = [
  { type: "image", url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779178159/1_iugboi.png", instagram: "https://www.instagram.com/p/DXjgjQvCQG6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { type: "image", url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779178185/1_ggduzq.png", instagram: "https://www.instagram.com/p/DXi4PDzEcCC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { type: "image", url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779178041/1_gerv8k.png", instagram: "https://www.instagram.com/p/DX1H3WAkQEM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { type: "image", url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779178182/8_tbeywg.png", instagram: "https://www.instagram.com/p/DXzW030CeJj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { type: "image", url: "https://res.cloudinary.com/dzvysgyz0/image/upload/v1779177765/smart_india_hack_20260222_120809_0000_nmtrks.png", instagram: "https://www.instagram.com/p/DPq5rHnCX8d/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { type: "image", url: "https://res.cloudinary.com/dzvysgyz0/image/upload/v1779178164/2_gu6mr1.png", instagram: "https://www.instagram.com/p/DXZd0AMiQzd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
];

const videoEdits: MediaItem[] = [
  { type: "video", url: "https://res.cloudinary.com/dzvysgyz0/video/upload/f_auto,q_auto/v1779186219/DC_FreshersInduction_Intro_g0miy8.mp4", instagram: "https://www.instagram.com/reel/DOc1WFoES4b/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { type: "video", url: "https://res.cloudinary.com/dzvysgyz0/video/upload/f_auto,q_auto/v1779193011/Lewin_26mil_dbtmca.mp4", instagram: "https://www.instagram.com/reel/DBY8K3ZPj3h/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { type: "video", url: "https://res.cloudinary.com/dzvysgyz0/video/upload/f_auto,q_auto/v1779213987/MetalsInWater_viesbb.mp4", instagram: "https://www.instagram.com/reel/DB9Dd2tv6dI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { type: "video", url: "https://res.cloudinary.com/dzvysgyz0/video/upload/f_auto,q_auto/v1779212644/VedukaVarnam_Intro_bqihsm.mp4", instagram: "https://www.instagram.com/reel/DIk_0yASqD0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { type: "video", url: "https://res.cloudinary.com/dzvysgyz0/video/upload/f_auto,q_auto/v1779206553/PartyReel_ypam8m.mp4", instagram: "https://www.instagram.com/reel/DLtsUJfS87o/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },


];

const creativeAiVisuals: MediaItem[] = [
  { type: "video", url: "https://res.cloudinary.com/dzvysgyz0/video/upload/f_auto,q_auto/v1779184756/Corruption_AI_faypo4.mp4", instagram: "https://www.instagram.com/reel/DUlQAw6D9Vr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { type: "video", url: "https://res.cloudinary.com/dzvysgyz0/video/upload/f_auto,q_auto/v1779184883/DC_Motor_AI_dpcinv.mp4" },
  { type: "video", url: "https://res.cloudinary.com/dzvysgyz0/video/upload/f_auto,q_auto/v1779183579/OnionScience_AI_rdybhm.mp4", instagram: "https://www.instagram.com/reel/DUnz4E1j5zk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { type: "video", url: "https://res.cloudinary.com/dzvysgyz0/video/upload/f_auto,q_auto/v1779183557/DopplerEffect_AI_w4i8do.mp4", instagram: "https://www.instagram.com/reel/DU_AJRDj2co/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { type: "image", url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779183606/YD_Scientist_AI_kvxdhf.png" },
  { type: "image", url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779183613/YD_Cricket_AI_bqzhor.jpg" },
  { type: "image", url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779183623/YD_Anime_AI_a0n87l.jpg" },
  { type: "image", url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779183603/YD_Games_AI_yzplys.png" },
  { type: "image", url: "https://res.cloudinary.com/dzvysgyz0/image/upload/f_auto,q_auto/v1779183605/YD_Inventions_AI_klxlsw.png" },
];

const archiveSections: ArchiveSection[] = [
  { title: "DevCatalyst Event Banners", items: devCatalystBanners },
  { title: "Posters", items: posters },
  { title: "Certificates", items: certificates },
  { title: "Instagram Event Posts", items: instagramPosts },
  { title: "Video Edits", items: videoEdits },
  { title: "Creative AI Visuals", items: creativeAiVisuals },
];

export default function Work() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeMedia, setActiveMedia] = useState<{ sectionIndex: number; mediaIndex: number } | null>(null);

  const [, setLocation] = useLocation();

  // Scroll to top instantly on mount (no animated smooth scroll-up)
  useEffect(() => {
    const html = document.documentElement;
    const prevBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      html.style.scrollBehavior = prevBehavior;
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const handleBackToHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const html = document.documentElement;
    const prevBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto"; // Instant jump
    
    setLocation("/");
    
    setTimeout(() => {
      const el = document.getElementById("projects");
      if (el) el.scrollIntoView({ behavior: "auto" });
      
      setTimeout(() => {
        html.style.scrollBehavior = prevBehavior;
      }, 50);
    }, 100);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen || !activeMedia) return;

      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, activeMedia]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [lightboxOpen]);

  const openLightbox = (sectionIndex: number, mediaIndex: number) => {
    setActiveMedia({ sectionIndex, mediaIndex });
    setLightboxOpen(true);
  };

  const handleNext = () => {
    if (!activeMedia) return;
    const currentSection = archiveSections[activeMedia.sectionIndex];
    if (activeMedia.mediaIndex < currentSection.items.length - 1) {
      setActiveMedia({ ...activeMedia, mediaIndex: activeMedia.mediaIndex + 1 });
    } else if (activeMedia.sectionIndex < archiveSections.length - 1) {
      setActiveMedia({ sectionIndex: activeMedia.sectionIndex + 1, mediaIndex: 0 });
    }
  };

  const handlePrev = () => {
    if (!activeMedia) return;
    if (activeMedia.mediaIndex > 0) {
      setActiveMedia({ ...activeMedia, mediaIndex: activeMedia.mediaIndex - 1 });
    } else if (activeMedia.sectionIndex > 0) {
      const prevSection = archiveSections[activeMedia.sectionIndex - 1];
      setActiveMedia({ sectionIndex: activeMedia.sectionIndex - 1, mediaIndex: prevSection.items.length - 1 });
    }
  };

  return (
    <main className="min-h-screen w-full bg-[var(--surface)] text-[#F0F0EC] pt-32 pb-24 px-6">
      {/* Header */}
      <div className="max-w-4xl mx-auto flex flex-col gap-6 mb-24">
        <p
          className="text-xs tracking-[0.2em] uppercase"
          style={{ color: "var(--brand)", fontFamily: "var(--app-font-mono)" }}
        >
          Archive
        </p>
        <h1
          className="text-4xl md:text-6xl leading-tight"
          style={{ fontFamily: "var(--app-font-display)" }}
        >
          A broader look at the work.
        </h1>
        <p
          className="text-base md:text-lg max-w-2xl leading-relaxed"
          style={{ color: "#8A8A88", fontFamily: "var(--app-font-body)" }}
        >
          A collection of posters, edits, social campaigns, AI visuals, and creative experiments across design, content, and digital storytelling.
        </p>
      </div>

      {/* Grid Sections */}
      <div className="max-w-7xl mx-auto flex flex-col gap-32">
        {archiveSections.map((section, sIndex) => (
          <div key={section.title} className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 border-b border-white/5 pb-4">
              <h2
                className="text-2xl"
                style={{ fontFamily: "var(--app-font-display)" }}
              >
                {section.title}
              </h2>
            </div>

            <div className="columns-1 md:columns-2 xl:columns-3 gap-5 space-y-5">
              {section.items.map((item, mIndex) => (
                <div key={item.url} className="break-inside-avoid mb-5 flex flex-col gap-3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="relative overflow-hidden rounded-2xl border border-white/5 bg-[#111111] group cursor-pointer transition-all duration-300 hover:scale-[1.01] hover:border-white/10"
                    onClick={() => openLightbox(sIndex, mIndex)}
                  >
                    {item.type === "image" ? (
                      <img
                        src={item.url}
                        alt={`${section.title} Media`}
                        className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <video
                        src={item.url}
                        className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                        style={{ maxHeight: "480px" }}
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />
                  </motion.div>

                  {item.instagram && (
                    <div className="flex justify-end px-2">
                      <a
                        href={item.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs uppercase tracking-wider text-[#F5A623] hover:opacity-70 transition-opacity"
                        style={{ fontFamily: "var(--app-font-mono)" }}
                      >
                        View on Instagram ↗
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Back to Home Button */}
      <div className="pt-20 flex justify-center">
        <Link href="/#projects">
          <a
            onClick={handleBackToHome}
            className="group flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-[#111111] text-[#F0F0EC] hover:bg-white hover:text-black transition-all duration-300"
            style={{ fontFamily: "var(--app-font-body)" }}
          >
            <span className="group-hover:-translate-x-1 transition-transform">
              ←
            </span>
            <span className="text-sm font-medium tracking-wide">
              Back to Home
            </span>
          </a>
        </Link>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && activeMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              onClick={() => setLightboxOpen(false)}
            >
              ✕
            </button>

            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>

            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
            </button>

            <div
              className="relative w-full max-w-6xl max-h-[90vh] p-4 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {archiveSections[activeMedia.sectionIndex].items[activeMedia.mediaIndex].type === "image" ? (
                <img
                  src={archiveSections[activeMedia.sectionIndex].items[activeMedia.mediaIndex].url}
                  alt="Archive Media"
                  className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                />
              ) : (
                <video
                  src={archiveSections[activeMedia.sectionIndex].items[activeMedia.mediaIndex].url}
                  className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                  autoPlay
                  loop
                  controls
                  playsInline
                />
              )}
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-widest" style={{ fontFamily: "var(--app-font-mono)" }}>
              {archiveSections[activeMedia.sectionIndex].title} • {activeMedia.mediaIndex + 1} / {archiveSections[activeMedia.sectionIndex].items.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
