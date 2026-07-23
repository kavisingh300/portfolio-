import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skillGroups } from "../data/skills";
import Reveal from "./Reveal";

function SkillBar({ name, level, delay }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <div ref={ref} className="mb-5">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="font-mono-tag" style={{ color: "var(--text-muted)" }}>
          {level}%
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full" style={{ background: "var(--surface)" }}>
        <motion.div
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, var(--primary), var(--accent))",
          }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="font-mono-tag text-sm text-[var(--accent)]">02. Skills</p>
        <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
          Tech I work with
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.label} delay={gi * 0.1}>
            <div className="glass rounded-2xl p-6">
              <h3 className="font-mono-tag mb-5 text-xs uppercase tracking-widest text-[var(--accent)]">
                {group.label}
              </h3>
              {group.skills.map((s, i) => (
                <SkillBar key={s.name} {...s} delay={i * 0.1} />
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
