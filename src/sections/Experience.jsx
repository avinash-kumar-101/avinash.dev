import { useEffect, useRef } from "react";
import { animate, motion, useInView } from "framer-motion";
import {
  FiBriefcase,
  FiCalendar,
  FiMapPin,
  FiMonitor,
} from "react-icons/fi";
import { FaRocket } from "react-icons/fa";

const ease = [0.16, 1, 0.3, 1];

const stats = [
  { value: "5+", label: "Experiences", icon: FiBriefcase },
  { value: "2022", label: "Started", icon: FiCalendar },
  { value: "Present", label: "Building", icon: FaRocket },
];

const experiences = [
  {
    role: "Information Technology Executive",
    company: "Viralstan",
    badge: "Current Position",
    duration: "Mar 2026 - Present",
    location: "Chandigarh, India",
    type: "On-site",
    logo: "/experience/viralstan.webp",
    logoAlt: "Viralstan logo",
    logoClass: "max-h-[68px] max-w-[158px]",
    points: [
      "Working on website building and contributing to engineering tasks.",
      "Collaborating with the team to deliver real-world solutions.",
    ],
  },
  {
    role: "MERN Stack Developer Intern",
    company: "WEBTECHFLY",
    badge: null,
    duration: "Jan 2026 - May 2026",
    location: "Sahibzada Ajit Singh Nagar, Punjab, India",
    type: "Hybrid",
    logo: "/experience/webtechfly.webp",
    logoAlt: "WEBTECHFLY logo",
    logoClass: "max-h-[106px] max-w-[136px]",
    points: [
      "Contributed to the system design, core development, and optimization of an enterprise-level College ERP platform.",
      "Developed modular and reusable UI components for efficient frontend.",
      "Built secure RESTful APIs and improved database performance through query optimization.",
      "Conducted testing and debugging to resolve issues and improve overall system reliability.",
    ],
  },
  {
    role: "SQL Intern",
    company: "Celebal Technologies",
    badge: null,
    duration: "Jun 2025 - Aug 2025",
    location: "India",
    type: "Remote",
    logo: "/experience/celebal.webp",
    logoAlt: "Celebal Technologies logo",
    logoClass: "max-h-[110px] max-w-[136px]",
    points: [
      "Worked with real-world datasets for data extraction, analysis, and optimization.",
      "Optimized SQL queries to improve data retrieval efficiency.",
      "Managed and validated datasets to ensure accuracy across reports.",
      "Collaborated with the team to convert business requirements into SQL-based solutions.",
    ],
  },
  {
    role: "Marketing Intern",
    company: "HighRadius",
    badge: null,
    duration: "May 2025 - Jun 2025",
    location: "India",
    type: "Remote",
    logo: "/experience/highradius.webp",
    logoAlt: "HighRadius logo",
    logoClass: "max-h-[108px] max-w-[134px]",
    points: [
      "Supported sales and marketing teams through data analysis and process optimization.",
      "Analyzed market trends and customer data to support data-driven decisions.",
      "Optimized outreach workflows leading to increased lead engagement.",
      "Gained exposure to cross-functional collaboration and business operations.",
    ],
  },
  {
    role: "Ethical Hacking Intern",
    company: "Hacker Central (Offdef Cyber Solutions LLP)",
    badge: null,
    duration: "Jun 2024 - Jun 2024",
    location: "Hyderabad, India",
    type: "Remote",
    logo: "/experience/hacker-central.webp",
    logoAlt: "Hacker Central logo",
    logoClass: "max-h-[116px] max-w-[140px]",
    points: [
      "Learned web application security, vulnerability assessment, and penetration testing basics.",
      "Identified common vulnerabilities such as SQL Injection, XSS, and authentication flaws.",
      "Explored cybersecurity concepts, ethical hacking methodologies, and best practices.",
      "Improved understanding of secure systems and real-world cyber threat scenarios.",
    ],
  },
];

function CountUp({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const hasNumber = /\d/.test(value);

  useEffect(() => {
    if (!inView || !ref.current || !hasNumber) return undefined;

    const target = Number.parseInt(value.replace(/\D/g, ""), 10);
    const suffix = value.replace(/\d/g, "");
    const controls = animate(0, target, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate(latest) {
        if (ref.current) {
          ref.current.textContent = `${Math.round(latest)}${suffix}`;
        }
      },
    });

    return () => controls.stop();
  }, [hasNumber, inView, value]);

  return <span ref={ref}>{hasNumber ? "0" : value}</span>;
}

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative isolate -mx-4 scroll-mt-24 bg-[#f8f4ee] px-5 pt-20 pb-24 text-[#111827] sm:-mx-6 sm:px-8 lg:left-1/2 lg:mx-0 lg:w-screen lg:-translate-x-1/2 lg:px-10 lg:pt-28 lg:pb-32 xl:px-12"
    >
      <div className="absolute left-[9%] top-[15%] -z-10 h-44 w-44 rounded-full bg-white/75 blur-2xl" />
      <div className="absolute right-[6%] top-24 -z-10 h-[330px] w-[330px] rounded-full border border-[#9A4F1A]/18" />
      <div className="absolute right-[7%] top-40 -z-10 h-[420px] w-[420px] rounded-full bg-[#EAE3DB]/55" />
      <div className="absolute right-[12%] top-[11%] -z-10 hidden grid-cols-5 gap-4 text-[#9A4F1A]/20 md:grid">
        {Array.from({ length: 25 }).map((_, index) => (
          <span key={index} className="h-1.5 w-1.5 rounded-full bg-current" />
        ))}
      </div>



      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(440px,0.82fr)] lg:items-center lg:gap-16 xl:gap-24">
          <div className="relative">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.5, ease }}
              className="mb-9 text-sm font-bold uppercase tracking-[0.2em] text-[#8b5727]"
            >
              - Experience
            </motion.p>

            <h2 className="font-display text-[clamp(3rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-[#111827]">
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{ duration: 0.57, ease }}
                className="block"
              >
                My Professional
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{ duration: 0.57, delay: 0.06, ease }}
                className="relative mt-2 inline-block font-script text-[clamp(4rem,7.5vw,7rem)] font-normal tracking-normal text-[#8b5727]"
              >
                Journey.
                <svg
                  viewBox="0 0 240 34"
                  className="absolute -bottom-3 left-1 h-8 w-[88%] text-[#8b5727]"
                  fill="none"
                  aria-hidden="true"
                >
                  <motion.path
                    d="M4 24C46 15 82 12 116 13C154 14 189 18 236 7"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "50px" }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.18 }}
                  />
                </svg>
              </motion.span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.5, delay: 0.12, ease }}
              className="mt-12 max-w-[31rem] text-lg leading-8 text-[#6B7280]"
            >
              Internships, collaborations, and hands-on experience that helped me grow as a developer.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "50px" }}
            transition={{ duration: 0.57, delay: 0.06, ease }}
            className="relative mx-auto w-full max-w-[560px] lg:mx-0 lg:justify-self-end"
          >
            <div className="absolute -right-6 -top-9 h-24 w-24 rounded-full bg-[#EAE3DB]/75" />
            <div className="absolute -bottom-10 left-10 h-40 w-40 rounded-full bg-[#EAE3DB]/55" />
            <div className="relative grid grid-cols-3 rounded-[24px] border border-[#EAE3DB] bg-white/95 shadow-[0_24px_60px_rgba(111,78,50,0.13)]">
              {stats.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className={`flex min-h-[210px] flex-col items-center justify-center px-5 text-center ${index > 0 ? "border-l border-[#EAE3DB]" : ""
                      }`}
                  >
                    <div className="mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#F1ECE6] text-[#9A4F1A] relative">
                      {item.label === "Building" ? (
                        <>
                          {/* The rocket that rests here and flies away */}
                          <motion.div
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              marginTop: -20,
                              marginLeft: -20,
                              width: 40,
                              height: 40,
                              zIndex: 30,
                              pointerEvents: "none",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                            animate={{
                              x: [0, -50, -350, -500, -300, -50, 0],
                              y: [0, -100, -200, -80, 80, 30, 0],
                              rotate: [0, -45, -30, 20, 45, 15, 0],
                              scale: [1, 1.2, 1.4, 1.3, 1.2, 0.8, 1],
                            }}
                            transition={{
                              duration: 8,
                              ease: "easeInOut",
                              times: [0, 0.12, 0.35, 0.55, 0.75, 0.92, 1],
                              repeat: Infinity,
                              repeatDelay: 6,
                            }}
                          >
                            <motion.svg 
                              width="60" height="60" viewBox="0 0 60 60" fill="none" 
                              style={{ position: "absolute", top: -10, left: -10, zIndex: -1 }}
                              animate={{ opacity: [0, 1, 1, 1, 1, 1, 0] }}
                              transition={{
                                duration: 8,
                                ease: "easeInOut",
                                times: [0, 0.05, 0.35, 0.55, 0.75, 0.95, 1],
                                repeat: Infinity,
                                repeatDelay: 6,
                              }}
                            >
                              {/* Flame trail (attached to bottom left of the FaRocket icon) */}
                              <motion.ellipse
                                cx="18" cy="42" rx="6" ry="10"
                                fill="url(#flameGrad)"
                                animate={{ ry: [8, 12, 8], opacity: [0.9, 1, 0.9] }}
                                transition={{ duration: 0.25, repeat: Infinity, ease: "easeInOut" }}
                                style={{ transformOrigin: "18px 42px", transform: "rotate(45deg)" }}
                              />
                              <motion.ellipse
                                cx="18" cy="42" rx="3" ry="6"
                                fill="#fff5a0"
                                animate={{ ry: [4, 7, 4], opacity: [0.8, 1, 0.8] }}
                                transition={{ duration: 0.18, repeat: Infinity, ease: "easeInOut" }}
                                style={{ transformOrigin: "18px 42px", transform: "rotate(45deg)" }}
                              />
                              {/* Smoke puffs */}
                              <motion.circle cx="12" cy="48" r="5" fill="rgba(154,79,26,0.2)" filter="url(#smokeBlur)"
                                animate={{ r: [4, 10], opacity: [0.4, 0] }}
                                transition={{ duration: 0.6, repeat: Infinity, ease: "easeOut" }}
                              />
                              <motion.circle cx="8" cy="52" r="4" fill="rgba(154,79,26,0.15)" filter="url(#smokeBlur)"
                                animate={{ r: [3, 9], opacity: [0.35, 0] }}
                                transition={{ duration: 0.72, repeat: Infinity, ease: "easeOut", delay: 0.18 }}
                              />
                              <defs>
                                <radialGradient id="flameGrad" cx="0.5" cy="0.3">
                                  <stop offset="0%" stopColor="#fff5a0" />
                                  <stop offset="45%" stopColor="#ff8800" />
                                  <stop offset="100%" stopColor="transparent" />
                                </radialGradient>
                                <filter id="smokeBlur"><feGaussianBlur stdDeviation="2" /></filter>
                              </defs>
                            </motion.svg>
                            <Icon className="text-[2rem] text-[#9A4F1A]" style={{ filter: "drop-shadow(0 2px 8px rgba(139,87,39,0.5))" }} />
                          </motion.div>
                        </>
                      ) : (
                        <Icon className="text-[2rem]" />
                      )}
                    </div>
                    <p className="font-display text-[2.75rem] font-bold leading-none text-[#9A4F1A]">
                      <CountUp value={item.value} />
                    </p>
                    <p className="mt-3 text-base font-medium text-[#6B7280]">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="relative mt-16 md:mt-20">
          <div className="absolute bottom-0 left-[10px] top-0 w-px bg-[#9A4F1A]/55" />

          <div className="space-y-7 md:space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 42 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{ duration: 0.5, delay: index * 0.05, ease }}
                className="relative pl-[48px] md:pl-[52px]"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-[10px] top-1/2 h-px w-[38px] -translate-y-1/2 bg-[#9A4F1A]/55 md:w-[42px]"
                />
                <motion.div
                  initial={{ scale: 0.72 }}
                  whileInView={{ scale: [0.72, 1.16, 1] }}
                  viewport={{ once: true, margin: "50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease }}
                  className="absolute left-[2px] top-1/2 z-10 h-4 w-4 -translate-y-1/2 rounded-full bg-[#9A4F1A] shadow-[0_0_0_7px_rgba(154,79,26,0.08)] md:left-[1px] md:h-[18px] md:w-[18px]"
                />

                <motion.article
                  whileHover={{
                    y: -5,
                    boxShadow: "0 26px 60px rgba(111,78,50,0.14)",
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="grid w-full gap-6 rounded-[28px] border border-[#EAE3DB] bg-white p-5 shadow-[0_14px_40px_rgba(111,78,50,0.08)] sm:p-6 md:grid-cols-[176px_minmax(0,1fr)] md:p-7 xl:grid-cols-[196px_minmax(0,1fr)_285px] xl:gap-9 xl:p-8"
                >
                  <div className="flex h-[136px] w-full items-center justify-center rounded-[20px] border border-[#EAE3DB] bg-white px-4 shadow-[0_14px_30px_rgba(17,24,39,0.04)] md:h-[154px]">
                    <img
                      src={exp.logo}
                      alt={exp.logoAlt}
                      loading="lazy"
                      decoding="async"
                      className={`h-auto w-auto object-contain ${exp.logoClass}`}
                    />
                  </div>

                  <div className="self-center">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl font-bold leading-tight text-[#111827] md:text-[1.65rem]">
                        {exp.role}
                      </h3>
                      {exp.badge && (
                        <span className="rounded-full bg-[#DDF5E2] px-4 py-1.5 text-xs font-semibold text-[#23733A]">
                          {exp.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-lg font-semibold leading-tight text-[#9A4F1A]">{exp.company}</p>
                    <ul className="mt-5 list-disc space-y-2 pl-5 text-[0.97rem] leading-6 text-[#111827] marker:text-[#111827]">
                      {exp.points.map((pt, pi) => (
                        <li key={pi}>{pt}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col justify-center gap-5 border-t border-[#EAE3DB] pt-6 text-[0.95rem] font-medium leading-6 text-[#111827] md:col-span-2 xl:col-span-1 xl:border-l xl:border-t-0 xl:pl-8 xl:pt-0">
                    <div className="flex items-start gap-4">
                      <FiCalendar className="mt-1 shrink-0 text-lg text-[#9A4F1A]" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <FiMapPin className="mt-1 shrink-0 text-lg text-[#9A4F1A]" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <FiMonitor className="mt-1 shrink-0 text-lg text-[#9A4F1A]" />
                      <span>{exp.type}</span>
                    </div>
                  </div>
                </motion.article>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
