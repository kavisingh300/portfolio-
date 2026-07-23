import { FiBookOpen, FiBriefcase } from "react-icons/fi";
import { education, experience } from "../data/education";
import Reveal from "./Reveal";

function Timeline({ items, icon }) {
  return (
    <div className="relative border-l pl-8" style={{ borderColor: "var(--surface-border)" }}>
      {items.map((item, i) => (
        <Reveal key={item.id} delay={i * 0.12} className="relative mb-10 last:mb-0">
          <span
            className="absolute -left-[41px] top-0 grid h-8 w-8 place-items-center rounded-full text-white"
            style={{
              background: "linear-gradient(135deg, var(--primary), var(--accent))",
            }}
          >
            {icon}
          </span>
          <div className="glass rounded-2xl p-5">
            <p className="font-mono-tag text-xs text-[var(--accent)]">{item.period}</p>
            <h3 className="mt-1 font-display font-semibold">{item.title}</h3>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>{item.place}</p>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {item.description}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="font-mono-tag text-sm text-[var(--accent)]">04. Journey</p>
        <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
          Education &amp; Experience
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-14 md:grid-cols-2">
        <div>
          <Reveal>
            <h3 className="mb-6 font-display text-lg font-semibold">Education</h3>
          </Reveal>
          <Timeline items={education} icon={<FiBookOpen size={15} />} />
        </div>
        <div>
          <Reveal>
            <h3 className="mb-6 font-display text-lg font-semibold">Experience</h3>
          </Reveal>
          <Timeline items={experience} icon={<FiBriefcase size={15} />} />
        </div>
      </div>
    </section>
  );
}
