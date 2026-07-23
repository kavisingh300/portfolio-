import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";

const socials = [
  { icon: <FiGithub size={17} />, href: "https://github.com/kavikumarsingh", label: "GitHub" },
  { icon: <FiLinkedin size={17} />, href: "https://linkedin.com/in/kavikumarsingh", label: "LinkedIn" },
  { icon: <FiTwitter size={17} />, href: "https://twitter.com/kavikumarsingh", label: "Twitter" },
  { icon: <FiMail size={17} />, href: "mailto:kavikumarsingh@example.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 pb-10 pt-6">
      <div className="glass flex flex-col items-center gap-5 rounded-2xl px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-lg font-semibold">
            Kavi<span className="text-gradient">.dev</span>
          </p>
          <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
            Built with React, Vite &amp; Tailwind CSS
          </p>
        </div>

        <div className="flex gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="grid h-10 w-10 place-items-center rounded-full glass hover:text-[var(--accent)] hover:-translate-y-1 transition-all"
            >
              {s.icon}
            </a>
          ))}
        </div>

        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
          © {new Date().getFullYear()} Kavi Kumar Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
