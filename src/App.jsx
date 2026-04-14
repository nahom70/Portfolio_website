import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import CustomCursor from "./components/ui/CustomCursor";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import { useDarkMode } from "./hooks/useDarkMode";

export default function App() {
  const { isDark, toggle } = useDarkMode();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div
      className="relative min-h-screen transition-colors duration-500"
      style={{
        background: isDark ? "#05050a" : "#f3f0ff",
        color: isDark ? "#e2e2f0" : "#0a0a14",
      }}
    >
      {/* Custom cursor — desktop only */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>

      {/* Noise texture overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[9990] opacity-[0.35]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      <AnimatePresence>
        <motion.div
          key="page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar isDark={isDark} onToggleDark={toggle} />

          <main>
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Contact />
          </main>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
