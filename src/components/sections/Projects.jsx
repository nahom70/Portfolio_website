import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection, AnimatedGroup, AnimatedItem } from "../ui/AnimatedSection";
import ProjectModal from "../ui/ProjectModal";
import { projects } from "../../data/projects";

const ICONS = {
  "Web App": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="url(#g1)" strokeWidth="1.6">
      <defs>
        <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a78bfa"/>
          <stop offset="100%" stopColor="#38bdf8"/>
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
    </svg>
  ),
  Game: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="url(#g2)" strokeWidth="1.6">
      <defs>
        <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a78bfa"/>
          <stop offset="100%" stopColor="#38bdf8"/>
        </linearGradient>
      </defs>
      <rect x="2" y="6" width="20" height="12" rx="3"/>
      <path d="M6 12h4M8 10v4M15 11h2M15 13h2"/>
    </svg>
  ),
};

function ProjectCard({ project, onClick }) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      onClick={() => onClick(project)}
      className="group relative rounded-2xl p-6 cursor-pointer overflow-hidden h-full"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
      data-cursor="pointer"
    >
      {/* Hover glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 0%, rgba(124,58,237,0.12) 0%, transparent 70%)",
          boxShadow: "inset 0 0 0 1px rgba(124,58,237,0.25)",
        }}
      />

      {/* Top row */}
      <div className="flex items-start justify-between mb-5">
        <span
          className="text-[10px] font-semibold tracking-[0.18em] uppercase"
          style={{ color: "#a78bfa" }}
        >
          {project.category}
        </span>
        <span className="text-[10px] text-white/25">{project.year}</span>
      </div>

      {/* Icon */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
        style={{
          background: "rgba(124,58,237,0.1)",
          border: "1px solid rgba(124,58,237,0.2)",
        }}
      >
        {ICONS[project.category] ?? ICONS["Web App"]}
      </div>

      <h3 className="text-base font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors duration-200">
        {project.title}
      </h3>

      <p className="text-sm text-white/45 leading-relaxed mb-5 line-clamp-3">
        {project.description}
      </p>

      {/* Tech chips */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.slice(0, 3).map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 text-[10px] font-medium rounded-md"
            style={{
              color: "rgba(167,139,250,0.8)",
              background: "rgba(124,58,237,0.08)",
              border: "1px solid rgba(124,58,237,0.2)",
            }}
          >
            {t}
          </span>
        ))}
        {project.tech.length > 3 && (
          <span className="px-2 py-0.5 text-[10px] text-white/25">
            +{project.tech.length - 3}
          </span>
        )}
      </div>

      {/* Arrow */}
      <div
        className="flex items-center gap-1.5 text-xs transition-colors duration-200 text-white/30 group-hover:text-violet-400"
      >
        <span>View project</span>
        <svg
          width="12" height="12" viewBox="0 0 12 12" fill="none"
          className="group-hover:translate-x-0.5 transition-transform duration-200"
        >
          <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-32 relative">
      {/* Background blob */}
      <div
        aria-hidden
        className="absolute right-0 top-1/3 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <AnimatedSection>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: "#a78bfa" }}>
                Work
              </p>
            </AnimatedSection>
            <AnimatedSection delay={1}>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Selected projects
              </h2>
            </AnimatedSection>
          </div>

          {/* Filter pills */}
          <AnimatedSection delay={2}>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className="px-3.5 py-1.5 text-xs font-medium rounded-lg border transition-all duration-200"
                  style={
                    filter === cat
                      ? {
                          background: "linear-gradient(135deg,#7c3aed,#4f46e5)",
                          borderColor: "transparent",
                          color: "#fff",
                          boxShadow: "0 0 16px rgba(124,58,237,0.3)",
                        }
                      : {
                          background: "rgba(255,255,255,0.03)",
                          borderColor: "rgba(255,255,255,0.08)",
                          color: "rgba(255,255,255,0.5)",
                        }
                  }
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Grid */}
        <AnimatedGroup
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          staggerDelay={0.1}
        >
          {filtered.map((project) => (
            <AnimatedItem key={project.id}>
              <ProjectCard project={project} onClick={setSelected} />
            </AnimatedItem>
          ))}
        </AnimatedGroup>

        {/* View all */}
        <AnimatedSection className="mt-12 text-center">
          <a
            href="https://github.com/nahom70"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-violet-300 transition-colors duration-200 group"
          >
            View all on GitHub
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="group-hover:translate-x-0.5 transition-transform duration-200">
              <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </AnimatedSection>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
