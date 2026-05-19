import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconMail,
  IconArrowUpRight,
} from "@tabler/icons-react";

interface Channel {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
}

const channels: Channel[] = [
  {
    icon: IconMail,
    label: "Email",
    value: "ajay.puttam3@gmail.com",
    href: "mailto:ajay.puttam3@gmail.com",
  },
  {
    icon: IconBrandLinkedin,
    label: "LinkedIn",
    value: "/in/ajay-puttam",
    href: "https://linkedin.com/in/ajay-puttam",
  },
  {
    icon: IconBrandGithub,
    label: "GitHub",
    value: "@Ajay-puttam",
    href: "https://github.com/Ajay-puttam",
  },
  {
    icon: IconBrandInstagram,
    label: "Instagram",
    value: "@oye__ajayyyy._",
    href: "https://instagram.com/oye__ajayyyy._",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "var(--surface)" }}
    >
      <div
        aria-hidden
        className="absolute inset-x-0 -top-40 h-[480px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(245,166,35,0.10) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-28">
        {/* Header - Step 1 */}
        <motion.p
          className="text-xs font-medium uppercase tracking-widest mb-12"
          style={{
            fontFamily: "var(--app-font-body)",
            color: "var(--brand)",
            letterSpacing: "0.2em",
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0}
        >
          Contact
        </motion.p>

        {/* Main Heading - Step 2 */}
        <motion.h2
          style={{
            fontFamily: "var(--app-font-display)",
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            color: "var(--text-primary)",
            maxWidth: "900px",
            fontWeight: 700,
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0.05}
        >
          Got an idea?
          <br />
          Let's make it{" "}
          <em
            style={{
              fontStyle: "italic",
              fontWeight: 300,
              color: "var(--brand)",
            }}
          >
            real.
          </em>
        </motion.h2>

        {/* Subtext - Step 3 */}
        <motion.p
          className="mt-6"
          style={{
            maxWidth: "650px",
            fontFamily: "var(--app-font-body)",
            fontSize: "17px",
            fontWeight: 300,
            color: "var(--text-secondary)",
            lineHeight: 1.75,
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0.1}
        >
          Open to placement opportunities, creative collaborations, and projects that blend technology, design, and storytelling
        </motion.p>

        {/* Cards Grid */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2"
          style={{
            gap: "1px",
            backgroundColor: "var(--surface-border)",
            borderRadius: "14px",
            overflow: "hidden",
            border: "1px solid var(--surface-border)",
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0.15}
        >
          {channels.map((channel, i) => {
            const IconComponent = channel.icon;
            return (
              <motion.a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith("mailto") ? undefined : "_blank"}
                rel={channel.href.startsWith("mailto") ? undefined : "noreferrer"}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeUp}
                custom={0.15 + i * 0.04}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "28px",
                  backgroundColor: hoveredIndex === i ? "#111115" : "#050505",
                  transition: "background-color 0.4s ease",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                {/* Left side */}
                <div className="flex flex-row items-center gap-[20px]">
                  <IconComponent
                    size={20}
                    strokeWidth={1.5}
                    color={hoveredIndex === i ? "var(--brand)" : "rgba(255,255,255,0.75)"}
                    style={{ transition: "color 0.3s ease" }}
                  />
                  <div className="flex flex-col gap-1">
                    <span
                      style={{
                        fontFamily: "var(--app-font-mono)",
                        fontSize: "10px",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.6)",
                        marginBottom: "2px",
                      }}
                    >
                      {channel.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--app-font-body)",
                        fontSize: "15px",
                        color: "#ffffff",
                        fontWeight: 400,
                      }}
                    >
                      {channel.value}
                    </span>
                  </div>
                </div>

                {/* Right side */}
                <IconArrowUpRight
                  size={18}
                  strokeWidth={1.5}
                  color={hoveredIndex === i ? "var(--brand)" : "rgba(255,255,255,0.5)"}
                  style={{
                    transition: "color 0.3s ease, transform 0.3s ease",
                    transform: hoveredIndex === i ? "translate(2px, -2px)" : "translate(0, 0)",
                  }}
                />
              </motion.a>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
