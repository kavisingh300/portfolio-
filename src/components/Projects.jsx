import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects, filterCategories } from "../data/projects";
import Reveal from "./Reveal";

function initials(title) {
  return title
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function ProjectCard({ project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="glass group flex flex-col overflow-hidden rounded-2xl transition-transform hover:-translate-y-1.5"
    >
      <div className="flex items-center gap-2 border-b px-4 py-2.5" style={{ borderColor: "var(--surface-border)" }}>
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
      </div>

      <div
        className="flex h-40 items-center justify-center font-display text-3xl font-bold text-white/90"
        style={{
          background:
            "linear-gradient(135deg, var(--primary), var(--secondary))",
        }}
      >
        {initials(project.title)}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="font-mono-tag rounded-full px-2.5 py-1 text-[11px]"
              style={{ background: "var(--surface)", border: "1px solid var(--surface-border)" }}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-full glass py-2.5 text-sm font-medium transition-transform hover:scale-105"
          >
            <FiGithub size={15} /> Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-full py-2.5 text-sm font-medium text-white transition-transform hover:scale-105"
            style={{
              background:
                "linear-gradient(135deg, var(--primary), var(--accent))",
            }}
          >
            <FiExternalLink size={15} /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="font-mono-tag text-sm text-[var(--accent)]">03. Work</p>
        <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
          Featured Projects
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-wrap gap-3">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                active === cat ? "text-white" : "glass"
              }`}
              style={
                active === cat
                  ? {
                      background:
                        "linear-gradient(135deg, var(--primary), var(--secondary))",
                    }
                  : {}
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </Reveal>

      <motion.div layout className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
