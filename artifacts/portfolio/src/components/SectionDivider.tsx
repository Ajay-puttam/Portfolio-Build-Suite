export default function SectionDivider() {
  return (
    <div className="relative flex items-center justify-center w-full py-1">
      <div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--surface-border) 20%, var(--surface-border) 80%, transparent)",
        }}
      />
      <span
        className="relative z-10 w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: "var(--brand)", opacity: 0.7 }}
        aria-hidden
      />
    </div>
  );
}
