import { motion } from "framer-motion";
import { AnimatedSection, AnimatedGroup, AnimatedItem } from "../ui/AnimatedSection";

const tools = [
  "Python", "JavaScript", "TypeScript", "C++",
  "React.js", "Tailwind CSS", "Flask", "HTML5/CSS3",
  "Pandas", "Numpy", "Scikit-learn", "Supabase",
  "Firebase", "Git", "Vercel", "Linux CLI",
];

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      {/* Subtle side gradient */}
      <div
        aria-hidden
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(14,165,233,0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <AnimatedSection>
          <p className="text-xs font-medium tracking-[0.25em] text-sky-400 uppercase mb-4">
            About
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left col — bio */}
          <div>
            <AnimatedSection delay={1}>
              <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-white mb-6">
                I love turning ideas into{" "}
                <span className="accent-gradient-text">real things.</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <p className="text-white/55 leading-[1.85] mb-5 text-[15px]">
                I'm Nahom — a Computer Science student at Berea College (GPA 4.0,
                Full Tuition Scholar) with a genuine passion for building software
                that matters. Whether it's a web app, a game, or an AI-powered
                tool, I care about writing clean code and solving real problems.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={3}>
              <p className="text-white/55 leading-[1.85] mb-10 text-[15px]">
                I've interned as a Junior Software Engineer at Genesis AI Labs,
                been selected for elite programs like Ethiopian AI Institute and
                AddisCoder, and built projects that earned recognition. I'm always
                looking to grow, collaborate, and ship things I'm proud of.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={4}>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="group flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200"
                >
                  Download CV
                  <motion.span whileHover={{ x: 3 }} className="inline-flex">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1v8M3 7l4 4 4-4M2 13h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.span>
                </a>
                <span className="w-px h-4 bg-white/15" />
                <a
                  href="https://www.linkedin.com/in/nahommesfin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/nahom70"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                >
                  GitHub
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Right col — tools */}
          <div>
            <AnimatedSection delay={2}>
              <p className="text-xs font-medium tracking-[0.2em] text-white/25 uppercase mb-5">
                Tools & Technologies
              </p>
            </AnimatedSection>

            <AnimatedGroup className="flex flex-wrap gap-2" staggerDelay={0.04}>
              {tools.map((tool) => (
                <AnimatedItem key={tool}>
                  <motion.span
                    whileHover={{ scale: 1.05, borderColor: "rgba(14,165,233,0.5)" }}
                    className="inline-block px-3.5 py-1.5 text-sm text-white/60 hover:text-white bg-white/[0.03] border border-white/8 rounded-lg transition-colors duration-150"
                  >
                    {tool}
                  </motion.span>
                </AnimatedItem>
              ))}
            </AnimatedGroup>

            {/* Quick facts */}
            <AnimatedSection delay={4} className="mt-10">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Location", value: "Berea, KY" },
                  { label: "Focus", value: "Full Stack & AI" },
                  { label: "Availability", value: "Open to work" },
                  { label: "Education", value: "CS, Berea College" },
                ].map((fact) => (
                  <div key={fact.label} className="glass rounded-xl p-4">
                    <p className="text-[10px] font-medium text-white/25 tracking-widest uppercase mb-1">
                      {fact.label}
                    </p>
                    <p className="text-sm font-medium text-white/80">{fact.value}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
