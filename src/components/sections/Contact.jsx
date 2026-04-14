import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "../ui/AnimatedSection";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/nahom70",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "https://twitter.com/nahom70",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nahommesfin/",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "Dribbble",
    href: "https://dribbble.com",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 6.628 5.374 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12zm7.974 5.4a10.07 10.07 0 012.02 5.64c-.295-.063-3.252-.661-6.23-.286-.063-.155-.12-.317-.192-.478-.186-.432-.385-.865-.6-1.285 3.273-1.334 4.762-3.257 5.002-3.59zM12 2.043c2.36 0 4.517.864 6.17 2.28-.21.305-1.545 2.1-4.713 3.284-1.473-2.707-3.107-4.932-3.356-5.26A10.07 10.07 0 0112 2.043zm-4.48.845c.238.314 1.843 2.544 3.33 5.194C6.742 9.3 3.18 9.268 2.83 9.256A10.056 10.056 0 017.52 2.888zM1.977 12.01v-.264c.34.008 4.51.065 8.722-1.208.244.478.47.966.68 1.458-.108.03-.218.062-.325.097-4.353 1.403-6.668 5.234-6.854 5.547A10.027 10.027 0 011.977 12.01zm10.023 9.97a10.03 10.03 0 01-6.018-2c.15-.306 1.868-3.591 6.66-5.265.02-.008.04-.015.06-.022a38.93 38.93 0 011.7 6.01 10.038 10.038 0 01-2.402.277zm4.247-1.08a40.894 40.894 0 00-1.585-5.59c2.768-.44 5.19.284 5.494.38a10.063 10.063 0 01-3.91 5.21z"/>
      </svg>
    ),
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate send
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 1400);
  };

  return (
    <section id="contact" className="py-32 relative">
      {/* Background glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(14,165,233,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — copy */}
          <div>
            <AnimatedSection>
              <p className="text-xs font-medium tracking-[0.25em] text-sky-400 uppercase mb-4">
                Contact
              </p>
            </AnimatedSection>
            <AnimatedSection delay={1}>
              <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight mb-6">
                Let's build something{" "}
                <span className="accent-gradient-text">great together.</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={2}>
              <p className="text-sm text-white/45 leading-relaxed mb-10">
                I'm currently open to new opportunities. Whether you have a
                project in mind, want to collaborate, or just want to say hi —
                my inbox is always open.
              </p>
            </AnimatedSection>

            {/* Email */}
            <AnimatedSection delay={3}>
              <a
                href="mailto:nahommesfin70@gmail.com"
                className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-200 mb-10"
              >
                <div className="w-10 h-10 glass rounded-xl flex items-center justify-center border border-white/8 group-hover:border-sky-400/30 transition-colors duration-300">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <span className="text-sm">nahommesfin70@gmail.com</span>
              </a>
            </AnimatedSection>

            {/* Socials */}
            <AnimatedSection delay={4}>
              <div className="flex items-center gap-3">
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 glass rounded-xl flex items-center justify-center border border-white/8 text-white/40 hover:text-white hover:border-sky-400/30 transition-colors duration-200"
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right — form */}
          <AnimatedSection delay={2}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-7 md:p-8 flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-white/35 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Smith"
                    className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-sky-400/50 focus:bg-white/6 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/35 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="jane@company.com"
                    className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-sky-400/50 focus:bg-white/6 transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/35 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-sky-400/50 focus:bg-white/6 transition-all duration-200 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status !== "idle"}
                whileHover={status === "idle" ? { y: -1, boxShadow: "0 12px 32px rgba(14,165,233,0.25)" } : {}}
                whileTap={status === "idle" ? { scale: 0.98 } : {}}
                className={`w-full py-3 rounded-xl text-sm font-semibold transition-all duration-300 text-white disabled:opacity-60`}
              style={
                status === "sent"
                  ? { background: "#10b981" }
                  : { background: "linear-gradient(135deg,#7c3aed,#4f46e5)", boxShadow: "0 0 24px rgba(124,58,237,0.3)" }
              }
              >
                <AnimatePresence mode="wait">
                  {status === "idle" && (
                    <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      Send message
                    </motion.span>
                  )}
                  {status === "sending" && (
                    <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="60" strokeDashoffset="20" />
                      </svg>
                      Sending...
                    </motion.span>
                  )}
                  {status === "sent" && (
                    <motion.span key="sent" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center justify-center gap-2">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                      Message sent!
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </AnimatedSection>
        </div>

        {/* Footer */}
        <AnimatedSection className="mt-24 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} · Built with React, Tailwind, Framer Motion
          </p>
          <p className="text-xs text-white/20">
            Designed & developed with care ✦
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
