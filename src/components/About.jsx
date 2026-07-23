import { FiCode, FiLayout, FiTarget } from "react-icons/fi";
import Reveal from "./Reveal";

const points = [
  {
    icon: <FiCode />,
    title: "Clean Code",
    text: "I write readable, maintainable code with reusable components and modern best practices.",
  },
  {
    icon: <FiLayout />,
    title: "Responsive Design",
    text: "Every interface I build works beautifully across mobile, tablet, and desktop.",
  },
  {
    icon: <FiTarget />,
    title: "Problem Solver",
    text: "I enjoy breaking down real-world problems and translating them into functional web solutions.",
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="font-mono-tag text-sm text-[var(--accent)]">01. About Me</p>
        <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
          Getting to know me
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-12 md:grid-cols-2 md:items-start">
        <Reveal delay={0.05}>
          <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
            I'm <span style={{ color: "var(--text)" }} className="font-semibold">Kavi Kumar Singh</span>,
            a B.Tech Computer Science student (2022–2026) at Uttaranchal
            University. I'm passionate about web development and continuously
            learning modern frontend technologies.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
            I enjoy building responsive, user-friendly websites and solving
            real-world problems through code. As a fresher entering the
            industry, I'm focused on turning curiosity into craft — one
            project at a time.
          </p>
        </Reveal>

        <div className="grid gap-4">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={0.1 + i * 0.08}>
              <div className="glass flex items-start gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-1">
                <div
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--primary), var(--accent))",
                  }}
                >
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>
                    {p.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
