import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  const scrollToProjects = () =>
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── Ambient blobs ───────────────────────────────────── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        {/* Top-center purple blob */}
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(ellipse, #7c3aed 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Bottom-right cyan blob */}
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(ellipse, #0ea5e9 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        {/* Left violet blob */}
        <div
          className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(ellipse, #4f46e5 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      {/* ── Dot grid ────────────────────────────────────────── */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: "radial-gradient(rgba(167,139,250,0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-32 md:py-40 w-full">
        <motion.div variants={container} initial="hidden" animate="visible">

          {/* Eyebrow pill */}
          <motion.div variants={item} className="mb-10">
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-sm font-medium text-violet-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-400" />
              </span>
              Open to internships & projects
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={item}
            className="text-6xl md:text-8xl lg:text-[96px] font-bold leading-[1.0] tracking-tight mb-7"
          >
            <span className="gradient-text">Hi, I'm</span>
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #a78bfa 0%, #818cf8 35%, #38bdf8 70%, #a78bfa 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "shimmer 4s linear infinite",
              }}
            >
              Nahom.
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-white/45 max-w-lg leading-relaxed mb-12 font-light"
          >
            CS student at Berea College — building{" "}
            <span className="text-white/70 font-normal">clean, purposeful software</span>{" "}
            from web apps to AI-powered tools.
          </motion.p>

          {/* CTA row */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-3 mb-20">
            <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToProjects}
              className="relative px-7 py-3 text-sm font-semibold text-white rounded-xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #4f46e5, #0ea5e9)",
                boxShadow: "0 0 32px rgba(124,58,237,0.35)",
              }}
            >
              View my work
            </motion.button>
            <motion.button
              whileHover={{ y: -2, borderColor: "rgba(167,139,250,0.5)" }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToContact}
              className="px-7 py-3 text-sm font-medium text-white/70 hover:text-white rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-200"
            >
              Get in touch
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-8 pt-8 border-t border-white/6"
          >
            {[
              { value: "4.0", label: "GPA — Berea College" },
              { value: "2+", label: "Projects shipped" },
              { value: "2029", label: "Expected graduation" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <p
                  className="text-3xl font-bold"
                  style={{
                    background: "linear-gradient(135deg, #a78bfa, #38bdf8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </p>
                <p className="text-xs text-white/30 tracking-wide">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-white/20 tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8"
          style={{ background: "linear-gradient(to bottom, rgba(167,139,250,0.4), transparent)" }}
        />
      </motion.div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
}
