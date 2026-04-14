import { motion } from "framer-motion";
import { AnimatedSection, AnimatedGroup, AnimatedItem } from "../ui/AnimatedSection";
import { experiences, skills } from "../../data/experience";

function ExperienceCard({ exp, index }) {
  return (
    <AnimatedItem>
      <motion.div
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
        className="group relative pl-6 border-l border-white/8 hover:border-sky-400/30 transition-colors duration-300 pb-10 last:pb-0"
      >
        {/* Timeline dot */}
        <div className="-left-1.25 absolute top-1 w-2.5 h-2.5 rounded-full border-2 border-white/20 bg-[#080808] group-hover:border-sky-400 transition-colors duration-300" />

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
          <div>
            <h3 className="text-base font-semibold text-white group-hover:text-sky-300 transition-colors duration-200">
              {exp.role}
            </h3>
            <p className="text-sm text-sky-400/80">{exp.company}</p>
          </div>
          <span className="text-xs text-white/30 sm:text-right shrink-0">{exp.period}</span>
        </div>

        <p className="text-sm text-white/50 leading-relaxed mb-4">{exp.description}</p>

        <div className="flex flex-wrap gap-1.5">
          {exp.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[10px] font-medium text-white/40 bg-white/4 border border-white/6 rounded"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </AnimatedItem>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div
        aria-hidden
        className="absolute left-1/2 bottom-0 -translate-x-1/2 w-150 h-48 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(14,165,233,0.04) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-xs font-medium tracking-[0.25em] text-sky-400 uppercase mb-4">
            Experience
          </p>
        </AnimatedSection>
        <AnimatedSection delay={1}>
          <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight mb-16">
            Where I've worked
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Timeline — left */}
          <div className="lg:col-span-3">
            <AnimatedGroup staggerDelay={0.12}>
              {experiences.map((exp, i) => (
                <ExperienceCard key={exp.id} exp={exp} index={i} />
              ))}
            </AnimatedGroup>
          </div>

          {/* Skills — right */}
          <div className="lg:col-span-2">
            <AnimatedSection delay={2}>
              <p className="text-xs font-medium tracking-[0.2em] text-white/25 uppercase mb-6">
                Skills
              </p>
            </AnimatedSection>

            <AnimatedGroup className="flex flex-col gap-6" staggerDelay={0.1}>
              {skills.map((group) => (
                <AnimatedItem key={group.category}>
                  <div>
                    <p className="text-xs font-semibold text-white/40 mb-3 uppercase tracking-widest">
                      {group.category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <motion.span
                          key={skill}
                          whileHover={{ scale: 1.05, borderColor: "rgba(14,165,233,0.4)" }}
                          className="px-3 py-1 text-xs text-white/60 hover:text-white bg-white/3 border border-white/8 rounded-lg transition-colors duration-150"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </AnimatedItem>
              ))}
            </AnimatedGroup>

            {/* Currently learning */}
            <AnimatedSection delay={5} className="mt-10 glass rounded-2xl p-5">
              <p className="text-[10px] font-medium text-white/25 uppercase tracking-widest mb-3">
                Currently exploring
              </p>
              <p className="text-sm text-white/60 leading-relaxed">
                Next.js for full-stack apps, deeper ML/AI engineering with
                PyTorch, and systems programming with C++.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
