import { FiAward } from "react-icons/fi";
import { certificates } from "../data/education";
import Reveal from "./Reveal";

export default function Certificates() {
  return (
    <section id="certificates" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="font-mono-tag text-sm text-[var(--accent)]">05. Credentials</p>
        <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
          Certificates
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, i) => (
          <Reveal key={cert.id} delay={i * 0.1}>
            <div className="glass flex flex-col items-start gap-4 rounded-2xl p-6 transition-transform hover:-translate-y-1">
              <div
                className="grid h-12 w-12 place-items-center rounded-xl text-white"
                style={{
                  background: "linear-gradient(135deg, var(--secondary), var(--accent))",
                }}
              >
                <FiAward size={20} />
              </div>
              <div>
                <h3 className="font-display font-semibold">{cert.title}</h3>
                <p className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>
                  {cert.issuer} · {cert.year}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
