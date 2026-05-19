const SKILLS = [
  "AI Visual Design",
  "Video Editing",
  "Graphic Design",
  "NLP",
  "Branding",
  "Social Media",
  "Reels",
  "Creative AI",
  "Streamlit",
  "HuggingFace",
  "Adobe Firefly",
  "CapCut",
  "Canva",
  "ElevenLabs",
  "Alight Motion",
  "Viral Content",
  "Digital Storytelling",
];

function SkillItem({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-3 whitespace-nowrap flex-shrink-0">
      <span
        style={{
          fontFamily: "var(--app-font-body)",
          fontSize: "0.8125rem",
          fontWeight: 400,
          color: "var(--text-secondary)",
          letterSpacing: "0.01em",
        }}
      >
        {label}
      </span>
      <span
        className="inline-block w-1 h-1 rounded-full flex-shrink-0"
        style={{ backgroundColor: "var(--brand)", opacity: 0.7 }}
        aria-hidden
      />
    </span>
  );
}

export default function SkillsStrip() {
  return (
    <div
      className="relative w-full overflow-hidden py-4"
      style={{
        backgroundColor: "var(--surface-card)",
        borderTop: "1px solid var(--surface-border)",
        borderBottom: "1px solid var(--surface-border)",
      }}
    >
      {/* Fade edges */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24"
        style={{
          background: "linear-gradient(to right, var(--surface-card), transparent)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24"
        style={{
          background: "linear-gradient(to left, var(--surface-card), transparent)",
        }}
        aria-hidden
      />

      {/* Marquee track */}
      <div
        className="flex gap-6"
        style={{
          width: "max-content",
          animation: "marquee 28s linear infinite",
        }}
      >
        {/* Doubled for seamless loop */}
        {[...SKILLS, ...SKILLS].map((skill, i) => (
          <SkillItem key={`${skill}-${i}`} label={skill} />
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
