import { motion, useReducedMotion } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";
import logoo from "../assets/logoo.webp";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Certifications", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/avinash-kumar-dev1",
    iconBg: "#0A66C2",
    icon: "in",
  },
  {
    label: "GitHub",
    href: "https://github.com/avinash-kumar-101",
    iconBg: "#111827",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current text-white">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
];

const Footer = () => {
  const shouldReduceMotion = useReducedMotion();
  const yOffset = (val) => (shouldReduceMotion ? 0 : val);

  return (
    <footer className="mt-[100px] relative isolate -mx-4 overflow-hidden bg-[#faf7f3] text-[#111827] sm:-mx-6 lg:left-1/2 lg:mx-0 lg:w-screen lg:-translate-x-1/2">
      
      {/* 1. & 2. PREMIUM HORIZONTAL DIVIDER & ANIMATION */}
      <motion.div
        initial={{ width: shouldReduceMotion ? "100%" : "0%" }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true, margin: "50px" }}
        transition={{ duration: 0.72, ease: "easeOut" }}
        className="h-px bg-[rgba(15,23,42,0.08)] w-full origin-left"
      />

      {/* 3. FOOTER REVEAL */}
      <motion.div
        initial={{ opacity: 0, y: yOffset(60) }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pt-[80px]"
      >
        <div className="mx-auto max-w-[1240px] px-6 pb-16 lg:px-10 xl:px-12">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:gap-16">

            {/* Col 1: Brand + tagline */}
            {/* 4. STAGGER COLUMN ANIMATION */}
            <motion.div
              initial={{ opacity: 0, y: yOffset(30) }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
            >
              {/* 5. LOGO MICRO INTERACTION */}
              <motion.a
                href="#hero"
                className="inline-flex items-center group"
                aria-label="Avinash home"
                whileHover={shouldReduceMotion ? {} : { scale: 1.04, rotate: 1.5 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <img src={logoo} alt="Avinash" className="h-28 w-auto max-w-[320px] object-contain sm:h-32" />
              </motion.a>

              <p className="mt-5 max-w-[260px] text-sm leading-6 text-[#4b5563]">
                Building modern web experiences with clean design and meaningful solutions.
              </p>

              {/* 9. DECORATIVE STARS */}
              <div className="mt-8 flex items-center gap-3">
                <motion.span
                  animate={{ 
                    opacity: shouldReduceMotion ? 0.9 : [0.4, 0.9, 0.4], 
                    scale: shouldReduceMotion ? 1 : [1, 1.12, 1] 
                  }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="text-xl text-[#8b5727]"
                >
                  ✦
                </motion.span>
                <div className="h-px w-12 rounded-full bg-[#8b5727]/40" />
              </div>
            </motion.div>

            {/* Col 2: Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: yOffset(30) }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.5, delay: 0.07, ease: "easeOut" }}
              className="border-l border-[#111827]/8 pl-10 lg:pl-12"
            >
              <h3 className="text-base font-bold text-[#111827]">Quick Links</h3>
              <div className="mt-2 h-0.5 w-6 rounded-full bg-[#8b5727]" />
              <div className="mt-1.5 h-1 w-1 rounded-full bg-[#8b5727]/40 ml-0.5" />

              <ul className="mt-5 space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    {/* 6. QUICK LINKS */}
                    <motion.a
                      href={link.href}
                      initial="rest"
                      whileHover="hover"
                      className="relative inline-flex items-center text-sm text-[#374151] hover:text-[#8b5727] cursor-pointer group"
                    >
                      {!shouldReduceMotion ? (
                        <>
                          <motion.span
                            variants={{
                              rest: { x: -18, y: "-50%", opacity: 0 },
                              hover: { x: -12, y: "-50%", opacity: 1 }
                            }}
                            transition={{ duration: 0.22, ease: "easeOut" }}
                            className="absolute left-0 top-1/2 flex items-center"
                          >
                            <FiChevronRight size={14} className="text-[#8b5727]" />
                          </motion.span>
                          
                          <motion.span
                            variants={{
                              rest: { x: 0 },
                              hover: { x: 4 }
                            }}
                            transition={{ duration: 0.22, ease: "easeOut" }}
                            className="relative block"
                          >
                            {link.label}
                            <motion.span
                              variants={{
                                rest: { scaleX: 0 },
                                hover: { scaleX: 1 }
                              }}
                              transition={{ duration: 0.22, ease: "easeOut" }}
                              className="absolute -bottom-0.5 left-0 right-0 h-px bg-[#8b5727] origin-left"
                            />
                          </motion.span>
                        </>
                      ) : (
                        <span className="flex items-center gap-2">
                          <FiChevronRight size={13} className="text-[#8b5727]/50" />
                          {link.label}
                        </span>
                      )}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Col 3: Let's Connect */}
            <motion.div
              initial={{ opacity: 0, y: yOffset(30) }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.5, delay: 0.14, ease: "easeOut" }}
            >
              <h3 className="text-base font-bold text-[#111827]">Let's Connect</h3>
              <div className="mt-2 h-0.5 w-6 rounded-full bg-[#8b5727]" />
              <div className="mt-1.5 h-1 w-1 rounded-full bg-[#8b5727]/40 ml-0.5" />

              <p className="mt-5 max-w-[240px] text-sm leading-6 text-[#4b5563]">
                I'm always open to new opportunities and collaborations.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {socials.map((s) => (
                  /* 7. SOCIAL CARDS */
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial="rest"
                    whileHover="hover"
                    variants={
                      shouldReduceMotion
                        ? { rest: { opacity: 1 }, hover: { opacity: 0.8 } }
                        : {
                            rest: { y: 0, scale: 1 },
                            hover: { y: -8, scale: 1.03 }
                          }
                    }
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="relative flex flex-col items-center gap-2 rounded-2xl border border-[#111827]/8 bg-white px-5 py-4 shadow-sm"
                  >
                    {/* Premium GPU shadow & border layer */}
                    <motion.div 
                      className="pointer-events-none absolute inset-0 rounded-2xl border border-[#8b5727]/30 shadow-[0_16px_32px_rgba(17,24,39,0.1)]"
                      variants={shouldReduceMotion ? {} : { rest: { opacity: 0 }, hover: { opacity: 1 } }}
                      transition={{ duration: 0.2 }}
                    />
                    
                    <motion.div
                      className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl text-sm font-bold text-white will-change-transform"
                      style={{ backgroundColor: s.iconBg }}
                      /* 8. ICON MICRO ANIMATIONS */
                      variants={
                        shouldReduceMotion
                          ? {}
                          : {
                              rest: { scale: 1, rotate: 0 },
                              hover: s.label === "LinkedIn" 
                                ? { scale: [1, 1.10, 1], transition: { duration: 0.54, ease: "easeOut" } }
                                : { rotate: [0, 10, 0], transition: { duration: 0.54, ease: "easeOut" } }
                            }
                      }
                    >
                      {s.icon}
                    </motion.div>
                    <span className="relative z-10 text-xs font-semibold text-[#374151]">{s.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* 10. COPYRIGHT SECTION */}
        <div className="border-t border-[#111827]/6">
          <motion.div
            initial={{ opacity: 0, y: yOffset(15) }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "50px" }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-4 px-6 py-5 sm:flex-row lg:px-10 xl:px-12"
          >
            <p className="text-sm text-[#6b7280]">
              © 2026 Avinash Kumar. All rights reserved.
            </p>

            <motion.span
              animate={{ 
                opacity: shouldReduceMotion ? 0.9 : [0.4, 0.9, 0.4],
                scale: shouldReduceMotion ? 1 : [1, 1.12, 1]
              }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-lg text-[#8b5727]"
            >
              ✦
            </motion.span>

            <p className="text-sm text-[#6b7280]">
              Designed &amp; Developed by{" "}
              <a
                href="https://github.com/avinash-kumar-101"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#8b5727] transition-opacity hover:opacity-80"
              >
                Avinash Kumar
              </a>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
