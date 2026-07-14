import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiMail, FiMapPin, FiSend, FiUser, FiTag, FiEdit2, FiCheck } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const ease = [0.16, 1, 0.3, 1];

/* ── GitHub SVG icon ─────────────────────────────────────────── */
const GitHubIcon = ({ size = 16, className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={`fill-current ${className}`}
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

/* ── LinkedIn SVG icon ───────────────────────────────────────── */
const LinkedInIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="#0A66C2">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.065-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

/* ── Contact link data ───────────────────────────────────────── */
const contactLinks = [
  {
    iconEl: <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Gmail" width="28" height="28" />,
    label: "Email",
    value: "avinas9934@gmail.com",
    href: "mailto:avinas9934@gmail.com",
  },
  {
    iconEl: <LinkedInIcon size={28} />,
    label: "LinkedIn",
    value: "linkedin.com/in/avinash-kumar-dev1",
    href: "https://linkedin.com/in/avinash-kumar-dev1",
  },
  {
    iconEl: <GitHubIcon size={28} className="text-[#111827]" />,
    label: "GitHub",
    value: "github.com/avinash-kumar-101",
    href: "https://github.com/avinash-kumar-101",
  },
  {
    iconEl: <img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg" alt="Location" width="28" height="28" />,
    label: "Location",
    value: "India",
    href: null,
  },
];

/* ── Large Envelope Illustration ────────────────────────────── */
const EnvelopeIllustration = () => (
  <div className="relative flex items-center justify-center" style={{ width: 380, height: 380 }}>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="absolute inset-0 rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(234,219,201,0.55) 0%, rgba(248,244,238,0.2) 65%, transparent 100%)",
      }}
    />

    <motion.div
      className="absolute inset-0 rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 22, ease: "linear", repeat: Infinity }}
      style={{
        border: "1.5px dashed rgba(139,87,39,0.22)",
      }}
    />

    {[
      { top: "12%", left: "20%", size: 14 },
      { top: "25%", left: "85%", size: 10 },
      { top: "50%", right: "6%", size: 12 },
      { top: "85%", left: "80%", size: 9 },
      { top: "80%", left: "15%", size: 10 },
      { top: "45%", left: "6%", size: 12 },
    ].map((s, i) => (
      <motion.span
        key={i}
        animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.15, 1] }}
        transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.24 }}
        style={{
          position: "absolute",
          top: s.top,
          left: s.left,
          right: s.right,
          color: "#c0642a",
          fontSize: s.size,
          lineHeight: 1,
        }}
      >
        ✦
      </motion.span>
    ))}

    <motion.svg
      viewBox="0 0 320 320"
      style={{ width: 290, height: 290, filter: "drop-shadow(0 20px 30px rgba(139,87,39,0.12))" }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <defs>
        <filter id="paper-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#8b5727" floodOpacity="0.08" />
        </filter>
        <filter id="flap-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="-4" stdDeviation="8" floodColor="#8b5727" floodOpacity="0.1" />
        </filter>

        <linearGradient id="backGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ebd6c5" />
          <stop offset="100%" stopColor="#cbae98" />
        </linearGradient>

        <linearGradient id="paperGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#fdfaf6" />
        </linearGradient>

        <linearGradient id="leftFlapGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fdf8f4" />
          <stop offset="100%" stopColor="#e6d5c6" />
        </linearGradient>

        <linearGradient id="rightFlapGrad" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#faf2ea" />
          <stop offset="100%" stopColor="#e1cdba" />
        </linearGradient>

        <linearGradient id="bottomFlapGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fcf6f1" />
          <stop offset="100%" stopColor="#dcbfa7" />
        </linearGradient>
      </defs>

      <g transform="translate(160, 160) rotate(8) translate(-160, -160)">

        <rect x="35" y="110" width="250" height="150" rx="14" fill="url(#backGrad)" />

        <g filter="url(#paper-shadow)">
          <rect x="60" y="25" width="200" height="200" rx="16" fill="url(#paperGrad)" />

          <rect x="95" y="150" width="130" height="6" rx="3" fill="#efdfd1" />
          <rect x="95" y="170" width="80" height="6" rx="3" fill="#efdfd1" />

          <g transform="translate(112, 65)">
            <path
              d="M 5 35 L 55 5 L 42 55 L 25 38 L 14 50 L 14 34 Z"
              fill="none"
              stroke="#d95d39"
              strokeWidth="4"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <path
              d="M 55 5 L 25 38"
              fill="none"
              stroke="#d95d39"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </g>
        </g>

        <path
          d="M 35 110 L 160 185 L 160 260 L 35 260 Z"
          fill="url(#leftFlapGrad)"
          stroke="url(#leftFlapGrad)"
          strokeWidth="6"
          strokeLinejoin="round"
        />

        <path
          d="M 285 110 L 160 185 L 160 260 L 285 260 Z"
          fill="url(#rightFlapGrad)"
          stroke="url(#rightFlapGrad)"
          strokeWidth="6"
          strokeLinejoin="round"
        />

        <g filter="url(#flap-shadow)">
          <path
            d="M 35 260 L 160 170 L 285 260 Z"
            fill="url(#bottomFlapGrad)"
            stroke="url(#bottomFlapGrad)"
            strokeWidth="10"
            strokeLinejoin="round"
          />
        </g>

      </g>
    </motion.svg>
  </div>
);

/* ── Main Component ─────────────────────────────────────────── */
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { 
          from_name: form.name, 
          from_email: form.email, 
          subject: form.subject,
          message: form.message 
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        setSent(true);
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSent(false), 5000);
      })
      .catch(() => {
        setLoading(false);
        alert("Error sending message. Please try again.");
      });
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease }}
      className="relative isolate -mx-4 scroll-mt-24 overflow-hidden bg-[#f8f4ee] px-5 pt-20 pb-24 text-[#111827] sm:-mx-6 sm:px-8 lg:left-1/2 lg:mx-0 lg:w-screen lg:-translate-x-1/2 lg:px-10 lg:pt-28 lg:pb-32 xl:px-12"
    >
      {/* Top fade to seamlessly blend with section above */}
      <div className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-[#f8f4ee] to-transparent pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-[1240px]">

        {/* ── HERO SECTION ───────────────────────────────────────── */}
        <div className="grid gap-6 lg:grid-cols-2 lg:items-center mb-12">
          <div className="pt-2">
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.5, ease, delay: 0.06 }}
              className="mb-3 text-[13px] font-bold uppercase tracking-[0.2em] text-[#8b5727]"
            >
              - Contact
            </motion.p>

            <h2 className="font-display text-5xl font-bold leading-[1.1] tracking-normal text-[#111827] sm:text-6xl lg:text-[3.5rem] xl:text-[4rem]">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{ duration: 0.5, ease, delay: 0.11 }}
                className="block"
              >
                Let's Create
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{ duration: 0.5, ease, delay: 0.16 }}
                className="block"
              >
                Something
              </motion.span>

              {/* "Together." script - slightly longer fade */}
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{ duration: 0.6, ease, delay: 0.25 }}
                className="relative mt-2 block w-fit font-script text-[4rem] font-normal leading-none text-[#8b5727] sm:text-[5rem] lg:text-[4.5rem] xl:text-[5rem]"
              >
                Together.
                <svg
                  viewBox="0 0 220 18"
                  className="absolute -bottom-4 left-0 h-[14px] w-[92%] text-[#8b5727]"
                  fill="none"
                  aria-hidden="true"
                >
                  <motion.path
                    d="M3 12C42 7 82 5 116 6C156 7 186 10 217 4"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "50px" }}
                    transition={{ duration: 0.72, ease: "easeInOut", delay: 0.34 }}
                  />
                </svg>
              </motion.span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.5, ease, delay: 0.2 }}
              className="mt-6 max-w-md text-sm leading-6 text-[#4b5563] sm:text-base sm:leading-7"
            >
              Have a project, opportunity, or idea in mind?<br />
              I'd love to hear from you.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "50px" }}
            transition={{ duration: 0.5, ease, delay: 0.12 }}
            className="hidden lg:flex lg:items-center lg:justify-center flex-shrink-0"
          >
            <EnvelopeIllustration />
          </motion.div>
        </div>

        {/* ── CONTACT CARDS ──────────────────────────────────────── */}
        <div className="grid gap-6 mb-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "50px" }}
            transition={{ duration: 0.5, ease, delay: 0.06 }}
            style={{
              background: "#fff",
              borderRadius: 18,
              border: "1px solid rgba(17,24,39,0.06)",
              padding: "32px",
              boxShadow: "0 4px 24px rgba(17,24,39,0.04)",
            }}
          >
            <h3 style={{ fontSize: 20, fontWeight: 700, color: "#111827", margin: 0, marginBottom: 8 }}>
              Get In Touch
            </h3>
            <div style={{ width: 28, height: 3, background: "#c0642a", borderRadius: 2, marginBottom: 16 }} />

            <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "#4b5563", marginBottom: 24 }}>
              I'm always open to discussing new projects, collaborations, internships, and opportunities.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {contactLinks.map((link, i) => {
                const inner = (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      padding: "16px 20px",
                      borderRadius: 12,
                      border: "1px solid rgba(17,24,39,0.06)",
                      background: "#fff",
                      cursor: link.href ? "pointer" : "default",
                    }}
                    className="contact-link-card"
                  >
                    <div className="icon-container" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 28, height: 28 }}>
                      {link.iconEl}
                    </div>
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 700, color: "#111827", margin: 0 }}>{link.label}</p>
                      <p style={{ fontSize: 12.5, color: "#6b7280", margin: 0, marginTop: 2 }}>{link.value}</p>
                    </div>
                  </div>
                );

                return link.href ? (
                  <a
                    key={i}
                    href={link.href}
                    target={link.href.startsWith("mailto") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", display: "block" }}
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={i}>{inner}</div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "50px" }}
            transition={{ duration: 0.5, ease, delay: 0.11 }}
            style={{
              background: "#fff",
              borderRadius: 18,
              border: "1px solid rgba(17,24,39,0.06)",
              padding: "32px",
              boxShadow: "0 4px 24px rgba(17,24,39,0.04)",
            }}
          >
            <h3 style={{ fontSize: 20, fontWeight: 700, color: "#111827", margin: 0, marginBottom: 8 }}>
              Send Me a Message
            </h3>
            <div style={{ width: 28, height: 3, background: "#c0642a", borderRadius: 2, marginBottom: 24 }} />

            <form onSubmit={sendEmail} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="input-group">
                  <FiUser
                    size={16}
                    className="input-icon"
                    style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: "#6b7280" }}
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />
                </div>
                <div className="input-group">
                  <FiMail
                    size={16}
                    className="input-icon"
                    style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: "#6b7280" }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />
                </div>
              </div>

              <div className="input-group">
                <FiTag
                  size={16}
                  className="input-icon"
                  style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: "#6b7280" }}
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>

              <div className="input-group">
                <FiEdit2
                  size={16}
                  className="input-icon"
                  style={{ position: "absolute", left: 16, top: 16, color: "#6b7280" }}
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                  style={{ ...inputStyle, paddingTop: 14, paddingBottom: 14, resize: "none", lineHeight: 1.6 }}
                />
              </div>

              <div className="relative mt-2">
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.98 }}
                  disabled={loading || sent}
                  className="submit-btn overflow-hidden relative"
                  style={{
                    width: "100%",
                    padding: "16px 0",
                    borderRadius: 8,
                    border: "none",
                    background: "linear-gradient(90deg, #c64611 0%, #d95d39 50%, #c64611 100%)",
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    cursor: loading || sent ? "default" : "pointer",
                    opacity: loading ? 0.8 : 1,
                  }}
                >
                  <AnimatePresence mode="wait">
                    {loading ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        style={{ display: "flex", gap: 6 }}
                      >
                        <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 0.6 }}>•</motion.span>
                        <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.12 }}>•</motion.span>
                        <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.24 }}>•</motion.span>
                      </motion.div>
                    ) : sent ? (
                      <motion.div
                        key="sent"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{ display: "flex", alignItems: "center", gap: 8 }}
                      >
                        <FiCheck size={18} /> Sent
                      </motion.div>
                    ) : (
                      <motion.div
                        key="default"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ display: "flex", alignItems: "center", gap: 8 }}
                      >
                        Send Message
                        <FiArrowRight size={16} className="arrow-icon" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* ── CONNECT WITH ME ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "50px" }}
          transition={{ duration: 0.5, delay: 0.06, ease }}
          style={{
            background: "#fff",
            borderRadius: 18,
            border: "1px solid rgba(17,24,39,0.06)",
            padding: "32px",
            boxShadow: "0 4px 24px rgba(17,24,39,0.03)",
            marginBottom: 24,
          }}
        >
          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#111827", margin: 0, marginBottom: 8 }}>
            Connect with Me
          </h3>
          <div style={{ width: 28, height: 3, background: "#c0642a", borderRadius: 2, marginBottom: 20 }} />

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                label: "LinkedIn",
                sub: "Let's connect professionally",
                href: "https://linkedin.com/in/avinash-kumar-dev1",
                iconEl: <LinkedInIcon size={28} />,
              },
              {
                label: "GitHub",
                sub: "Explore my repositories",
                href: "https://github.com/avinash-kumar-101",
                iconEl: <GitHubIcon size={28} className="text-[#111827]" />,
              },
            ].map((item, i) => (
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{ duration: 0.5, ease, delay: 0.1 + i * 0.1 }}
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 24px",
                  borderRadius: 12,
                  border: "1px solid rgba(17,24,39,0.06)",
                  background: "#fff",
                  textDecoration: "none",
                }}
                className="connect-card"
              >
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 28, height: 28 }}>
                    {item.iconEl}
                  </div>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: "#111827", margin: 0 }}>{item.label}</p>
                    <p style={{ fontSize: 13, color: "#6b7280", margin: 0, marginTop: 2 }}>{item.sub}</p>
                  </div>
                </div>
                <FiArrowRight size={18} style={{ color: "#c64611", flexShrink: 0 }} className="arrow-icon" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ── BOTTOM CTA STRIP ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "50px" }}
          transition={{ duration: 0.5, delay: 0.11, ease }}
          className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center relative overflow-hidden"
          style={{
            padding: "24px 32px",
            borderRadius: 16,
            background: "#fff0e6",
            boxShadow: "0 4px 24px rgba(192,100,42,0.04)",
          }}
        >
          {/* Subtle dotted pattern on right edge */}
          <div
            style={{
              position: "absolute",
              right: -10,
              bottom: -10,
              opacity: 0.4,
              pointerEvents: "none",
              width: 100,
              height: 100,
              backgroundImage: "radial-gradient(#d95d39 1px, transparent 1px)",
              backgroundSize: "10px 10px",
            }}
          />

          {/* Left: icon + heading */}
          <div style={{ display: "flex", alignItems: "center", gap: 20, flexShrink: 0 }}>
            <div
              style={{
                width: 68,
                height: 68,
                borderRadius: "50%",
                background: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 24px rgba(217,93,57,0.12)",
                flexShrink: 0,
              }}
            >
              <FiSend size={30} style={{ color: "#d95d39", transform: "translate(-1px, 2px)" }} />
            </div>

            <div>
              <p className="font-display" style={{ fontSize: 20, fontWeight: 700, color: "#111827", margin: 0, lineHeight: 1.2 }}>
                Looking forward to
              </p>
              <div style={{ position: "relative", display: "inline-block", marginTop: 4 }}>
                <span
                  style={{
                    fontFamily: "'Great Vibes', 'Allura', cursive",
                    fontSize: 34,
                    color: "#d95d39",
                    lineHeight: 1,
                    display: "block",
                  }}
                >
                  connecting and creating.
                </span>
                <svg
                  viewBox="0 0 220 12"
                  style={{ position: "absolute", bottom: -6, left: 0, width: "100%", color: "#d95d39" }}
                  fill="none"
                >
                  <path d="M2 10C50 4 150 2 218 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>

          <div className="hidden sm:block" style={{ width: 1, height: 50, background: "rgba(217,93,57,0.25)" }} />

          {/* Middle: short message */}
          <p
            style={{
              fontSize: 13,
              color: "#4b5563",
              lineHeight: 1.6,
              maxWidth: 200,
              flexShrink: 1,
              margin: 0,
            }}
          >
            I'm excited to connect and collaborate on something meaningful.
          </p>

          {/* Right: button */}
          <a
            href="mailto:avinas9934@gmail.com"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 24px",
              borderRadius: 6,
              border: "1px solid rgba(217,93,57,0.4)",
              background: "#fff",
              fontSize: 14,
              fontWeight: 700,
              color: "#d95d39",
              textDecoration: "none",
              whiteSpace: "nowrap",
              flexShrink: 0,
              zIndex: 1,
            }}
            className="lets-connect-btn"
          >
            Let's Connect
            <FiArrowRight size={16} className="arrow-icon" />
          </a>
        </motion.div>
      </div>

      <style>{`
        /* Contact Link Cards */
        .contact-link-card {
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease !important;
        }
        .contact-link-card:hover {
          transform: translateY(-6px);
          border-color: rgba(192,100,42,0.3) !important;
          box-shadow: 0 12px 24px rgba(192,100,42,0.08);
        }
        .contact-link-card .icon-container {
          transition: transform 0.25s ease !important;
        }
        .contact-link-card:hover .icon-container {
          transform: scale(1.08);
        }

        /* Connect Cards */
        .connect-card {
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease !important;
        }
        .connect-card:hover {
          transform: translateY(-4px);
          border-color: rgba(192,100,42,0.3) !important;
          background-color: #fff9f5 !important;
          box-shadow: 0 8px 20px rgba(192,100,42,0.06);
        }
        .connect-card .arrow-icon {
          transition: transform 0.25s ease !important;
        }
        .connect-card:hover .arrow-icon {
          transform: translateX(4px);
        }

        /* Submit Button */
        .submit-btn {
          transition: transform 0.25s ease, box-shadow 0.25s ease, background-position 0.4s ease !important;
          background-size: 200% auto !important;
        }
        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(192,100,42,0.25);
          background-position: right center !important;
        }
        .submit-btn .arrow-icon {
          transition: transform 0.25s ease !important;
        }
        .submit-btn:hover .arrow-icon {
          transform: translateX(8px);
        }

        /* Bottom CTA Button */
        .lets-connect-btn {
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease !important;
        }
        .lets-connect-btn:hover {
          transform: translateY(-2px);
          border-color: rgba(192,100,42,0.5) !important;
          box-shadow: 0 8px 20px rgba(192,100,42,0.12);
        }
        .lets-connect-btn .arrow-icon {
          transition: transform 0.25s ease !important;
        }
        .lets-connect-btn:hover .arrow-icon {
          transform: translateX(8px);
        }

        /* Form Inputs */
        input, textarea {
          transition: border-color 0.25s ease, box-shadow 0.25s ease !important;
        }
        input::placeholder, textarea::placeholder {
          color: #9ca3af;
        }
        .input-group {
          position: relative;
        }
        .input-icon {
          transition: color 0.25s ease !important;
        }
        input:focus, textarea:focus {
          outline: none;
          border-color: #d95d39 !important;
          box-shadow: 0 0 0 4px rgba(217,93,57,0.15) !important;
        }
        .input-group:focus-within .input-icon {
          color: #d95d39 !important;
        }
      `}</style>
    </motion.section>
  );
};

/* ── Shared input style ──────────────────────────────────────── */
const inputStyle = {
  width: "100%",
  padding: "11px 14px 11px 34px",
  borderRadius: 11,
  border: "1px solid rgba(17,24,39,0.1)",
  background: "#f9f6f2",
  fontSize: 13,
  color: "#111827",
  boxSizing: "border-box",
};

export default Contact;