import { useState } from "react";
import { FiMail, FiMapPin, FiSend, FiCheckCircle } from "react-icons/fi";
import Reveal from "./Reveal";

const initialState = { name: "", email: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Name is required";
  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address";
  }
  if (!values.message.trim()) {
    errors.message = "Message is required";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters";
  }
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setValues(initialState);
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="font-mono-tag text-sm text-[var(--accent)]">06. Contact</p>
        <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
          Let's build something together
        </h2>
        <p className="mt-3 max-w-lg text-[15px]" style={{ color: "var(--text-muted)" }}>
          Have an opportunity, a project idea, or just want to say hi? My
          inbox is always open.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-10 md:grid-cols-5">
        <Reveal delay={0.05} className="md:col-span-2">
          <div className="glass flex flex-col gap-6 rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <span
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white"
                style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
              >
                <FiMail size={16} />
              </span>
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  kavikumarsingh@example.com
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white"
                style={{ background: "linear-gradient(135deg, var(--secondary), var(--accent))" }}
              >
                <FiMapPin size={16} />
              </span>
              <div>
                <p className="text-sm font-medium">Location</p>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  Dehradun, Uttarakhand, India
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-3">
          <form onSubmit={handleSubmit} noValidate className="glass flex flex-col gap-5 rounded-2xl p-6">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                style={{
                  background: "var(--surface)",
                  border: `1px solid ${errors.name ? "#f87171" : "var(--surface-border)"}`,
                  color: "var(--text)",
                }}
              />
              {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                style={{
                  background: "var(--surface)",
                  border: `1px solid ${errors.email ? "#f87171" : "var(--surface-border)"}`,
                  color: "var(--text)",
                }}
              />
              {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={values.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                className="w-full resize-none rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                style={{
                  background: "var(--surface)",
                  border: `1px solid ${errors.message ? "#f87171" : "var(--surface-border)"}`,
                  color: "var(--text)",
                }}
              />
              {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, var(--primary), var(--secondary))",
              }}
            >
              {submitted ? (
                <>
                  <FiCheckCircle /> Message Sent
                </>
              ) : (
                <>
                  <FiSend /> Send Message
                </>
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
