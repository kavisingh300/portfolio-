import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown } from "react-icons/fi";
import { stats } from "../data/skills";

const roles = [
  "Frontend Developer",
  "React.js Enthusiast",
  "B.Tech CSE Student",
  "UI Craftsman",
];

function useTypewriter(words, speed = 90, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 2);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

function StatCounter({ value, suffix, delay }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let start = 0;
      const duration = 1200;
      const stepTime = 16;
      const steps = duration / stepTime;
      const increment = value / steps;
      const id = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(id);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);
      return () => clearInterval(id);
    }, delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return (
    <span className="font-display text-2xl font-bold">
      {count}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-28 pb-16"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono-tag text-sm text-[var(--accent)]">
            Hi, my name is
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
            Kavi Kumar Singh
          </h1>
          <div className="mt-3 h-9 font-display text-xl font-medium sm:text-2xl">
            <span className="text-gradient">{typed}</span>
            <span className="animate-pulse text-[var(--accent)]">|</span>
          </div>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
            B.Tech CSE student (2022–2026) at Uttaranchal University, passionate
            about building responsive, user-friendly websites and solving
            real-world problems through code.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition-transform hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg, var(--primary), var(--secondary))",
              }}
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold transition-transform hover:scale-105"
            >
              <FiDownload /> Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            {[
              { icon: <FiGithub />, href: "https://github.com/kavikumarsingh" },
              { icon: <FiLinkedin />, href: "https://linkedin.com/in/kavikumarsingh" },
              { icon: <FiMail />, href: "mailto:kavikumarsingh@example.com" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full glass hover:text-[var(--accent)] hover:-translate-y-1 transition-all"
              >
                {s.icon}
              </a>
            ))}
          </div>

          <div className="mt-12 grid max-w-md grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div key={s.label}>
                <StatCounter value={s.value} suffix={s.suffix} delay={i * 150} />
                <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="glass mx-auto w-full max-w-md rounded-2xl p-0 shadow-2xl shadow-black/20 overflow-hidden">
            <div className="flex items-center gap-2 border-b px-4 py-3" style={{ borderColor: "var(--surface-border)" }}>
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-2 font-mono-tag text-xs" style={{ color: "var(--text-muted)" }}>
                kavi.dev — profile.js
              </span>
            </div>
            <pre className="font-mono-tag overflow-x-auto p-5 text-[13px] leading-relaxed">
<code>
<span style={{ color: "var(--accent)" }}>const</span> developer = {"{"}
{"\n  "}name: <span style={{ color: "#a5d6ff" }}>"Kavi Kumar Singh"</span>,
{"\n  "}role: <span style={{ color: "#a5d6ff" }}>"Frontend Developer"</span>,
{"\n  "}stack: [<span style={{ color: "#a5d6ff" }}>"React"</span>, <span style={{ color: "#a5d6ff" }}>"Vite"</span>, <span style={{ color: "#a5d6ff" }}>"Tailwind"</span>],
{"\n  "}status: <span style={{ color: "#a5d6ff" }}>"open to opportunities"</span>,
{"\n"}{"}"};
</code>
            </pre>
          </div>
          <motion.div
            className="absolute -bottom-6 -right-4 glass rounded-xl px-4 py-3 text-xs font-mono-tag"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-[var(--accent)]">●</span> Fresher · Ready to build
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-70"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
        aria-label="Scroll to About section"
      >
        <FiArrowDown size={20} />
      </motion.a>
    </section>
  );
}
