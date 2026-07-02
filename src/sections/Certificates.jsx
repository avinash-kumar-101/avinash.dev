import { motion } from "framer-motion";
import { useState } from "react";
import { FiCalendar } from "react-icons/fi";

const ease = [0.16, 1, 0.3, 1];

/* ─── Data ─────────────────────────────────────────────────────────── */

const featuredCerts = [
  {
    title: "MERN Stack Development Internship",
    org: "WEBTECHFLY",
    orgColor: "#1565C0",
    type: "Internship",
    typeColor: "#e0f2fe",
    typeTxt: "#0284c7",
    fallbackLogo: "W",
    fallbackBg: "#1565C0",
    logo: "webtechfly.com",
    date: "Jan 2026 - Apr 2026",
    certType: "CERTIFICATE OF INTERNSHIP",
    signatory: "Nicky Kumari",
    signatoryTitle: "HR Head | WEBTECHFLY",
  },
  {
    title: "Career Essentials in Generative AI",
    org: "Microsoft & LinkedIn Learning",
    orgShort: "Microsoft",
    orgColor: "#0078d4",
    type: "Course",
    typeColor: "#dcfce7",
    typeTxt: "#166534",
    fallbackLogo: "M",
    fallbackBg: "#0078d4",
    logo: "microsoft.com",
    date: "Jan 2026",
    certType: "CERTIFICATE OF COMPLETION",
    signatory: "Shea Hanson",
    signatoryTitle: "Head of Learning Content Strategy",
  },
  {
    title: "AI for Beginners",
    org: "HP Life",
    orgShort: "HP LIFE",
    orgColor: "#0096d6",
    type: "Course",
    typeColor: "#e0f2fe",
    typeTxt: "#0284c7",
    fallbackLogo: "HP",
    fallbackBg: "#0096d6",
    logo: "hp.com",
    date: "Jan 2025",
    certType: "CERTIFICATE OF COMPLETION",
    signatory: "Michele Malejki",
    signatoryTitle: "Executive Director, HP Foundation",
  },
  {
    title: "JPMorgan Chase Software Engineering Job Simulation",
    org: "Forage",
    orgShort: "forage",
    orgColor: "#6b46c1",
    type: "Job Simulation",
    typeColor: "#f3e8ff",
    typeTxt: "#6b21a8",
    fallbackLogo: "F",
    fallbackBg: "#7c3aed",
    logo: "theforage.com",
    date: "Jan 2026",
    certType: "CERTIFICATE OF COMPLETION",
    signatory: "Tom Brunskill",
    signatoryTitle: "CEO, Co-Founder of Forage",
  },
];

/* ─── More Cert Logo Components ─────────────────────────────────────── */

const TataLogo = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <rect width="48" height="48" fill="#1a3b6e" rx="8"/>
    <text x="24" y="20" textAnchor="middle" fill="white" fontSize="9" fontWeight="900" fontFamily="Arial, sans-serif" letterSpacing="1">TATA</text>
    <circle cx="24" cy="32" r="8" fill="none" stroke="white" strokeWidth="1.5"/>
    <circle cx="24" cy="32" r="4" fill="none" stroke="white" strokeWidth="1"/>
    <line x1="16" y1="32" x2="32" y2="32" stroke="white" strokeWidth="1"/>
  </svg>
);

const DeloitteLogo = () => (
  <svg viewBox="0 0 80 28" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <text x="2" y="20" fill="#000000" fontSize="18" fontWeight="900" fontFamily="Arial, sans-serif">Deloitte.</text>
    <rect x="72" y="14" width="5" height="5" fill="#86c232" rx="1"/>
  </svg>
);

const SimplilearnLogo = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <rect width="48" height="48" fill="#ff6600" rx="8"/>
    <rect x="10" y="28" width="5" height="12" fill="white" rx="1"/>
    <rect x="18" y="22" width="5" height="18" fill="white" rx="1"/>
    <rect x="26" y="16" width="5" height="24" fill="white" rx="1"/>
    <rect x="34" y="10" width="5" height="30" fill="white" rx="1"/>
  </svg>
);

const KPMGLogo = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <rect width="48" height="48" fill="#0c2340" rx="8"/>
    <text x="24" y="29" textAnchor="middle" fill="white" fontSize="12" fontWeight="900" fontFamily="Arial, sans-serif" letterSpacing="0.5">KPMG</text>
  </svg>
);

const KaggleLogo = () => (
  <svg viewBox="0 0 70 28" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <text x="2" y="21" fill="#20beff" fontSize="20" fontWeight="700" fontFamily="Arial, sans-serif">kaggle</text>
  </svg>
);

const CelebalLogo = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <circle cx="24" cy="24" r="22" fill="#c0392b"/>
    <text x="24" y="29" textAnchor="middle" fill="white" fontSize="13" fontWeight="900" fontFamily="Arial, sans-serif">CT</text>
  </svg>
);

const moreCerts = [
  {
    title: "Tata GenAI Powered Data Analytics Job Simulation",
    org: "Forage",
    date: "Jan 2026",
    Logo: TataLogo,
    logoBg: "#1a3b6e",
  },
  {
    title: "Deloitte Australia Data Analytics Job Simulation",
    org: "Forage",
    date: "Jan 2026",
    Logo: DeloitteLogo,
    logoBg: "#ffffff",
  },
  {
    title: "Introduction to Generative AI Studio",
    org: "Simplilearn",
    date: "Jan 2026",
    Logo: SimplilearnLogo,
    logoBg: "#ff6600",
  },
  {
    title: "Capture the Flag Hackathon 2025",
    org: "KPMG",
    date: "Nov 2025",
    Logo: KPMGLogo,
    logoBg: "#0c2340",
  },
  {
    title: "Intro to Programming",
    org: "Kaggle",
    date: "Jan 2025",
    Logo: KaggleLogo,
    logoBg: "#f0fbff",
  },
  {
    title: "SQL Internship Certificate",
    org: "Celebal Technologies",
    date: "Aug 2025",
    Logo: CelebalLogo,
    logoBg: "#c0392b",
  },
];

const partners = [
  { name: "WEBTECHFLY", emoji: "W", bg: "#1565C0" },
  { name: "Microsoft", emoji: "M", bg: "#0078d4" },
  { name: "LinkedIn Learning", emoji: "in", bg: "#0a66c2" },
  { name: "HP Life", emoji: "HP", bg: "#0096d6" },
  { name: "Forage", emoji: "F", bg: "#7c3aed" },
  { name: "Kaggle", emoji: "K", bg: "#20BEFF" },
  { name: "Celebal Technologies", emoji: "CT", bg: "#c0392b" },
  { name: "Hacker Central", emoji: "HC", bg: "#212121" },
];

/* ─── Logo Components ───────────────────────────────────────────────── */

const MicrosoftLogo = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="9.5" height="9.5" fill="#f25022" />
    <rect x="12.5" y="2" width="9.5" height="9.5" fill="#7fba00" />
    <rect x="2" y="12.5" width="9.5" height="9.5" fill="#00a4ef" />
    <rect x="12.5" y="12.5" width="9.5" height="9.5" fill="#ffb900" />
  </svg>
);

const HPLogo = () => (
  <svg width="100%" height="100%" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
    <circle cx="15" cy="15" r="15" fill="#0096D6" />
    <text
      x="15"
      y="20"
      dominantBaseline="middle"
      textAnchor="middle"
      fill="#FFFFFF"
      fontSize="13"
      fontWeight="bold"
      fontStyle="italic"
      fontFamily="Arial, sans-serif"
    >hp</text>
  </svg>
);

const ForageLogo = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "scale(1.15)" }}>
    <path d="M12 2.5L3 7.5V16.5L12 21.5L21 16.5V7.5L12 2.5Z" fill="#050B14"/>
    <path d="M12 12L3 7.5L12 2.5L21 7.5L12 12Z" fill="#1C2B3F"/>
    <path d="M12 12V21.5L3 16.5V7.5L12 12Z" fill="#0C1524"/>
  </svg>
);

const WebtechflyLogo = () => (
  <img src="/experience/webtechfly.png" alt="Webtechfly" style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "50%", backgroundColor: "#fff", transform: "scale(1.35)" }} />
);

const OrgLogo = ({ cert }) => {
  if (cert.logo === "microsoft.com" || cert.logo === "microsoft") return <MicrosoftLogo />;
  if (cert.logo === "hp.com" || cert.logo === "hp") return <HPLogo />;
  if (cert.logo === "theforage.com" || cert.logo === "forage") return <ForageLogo />;
  return <WebtechflyLogo />;
};

/* ─── Cert Card ─────────────────────────────────────────────────────── */

const CertCard = ({ cert, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.5, delay, ease }}
    whileHover={{ y: -5, boxShadow: "0 20px 48px rgba(17,24,39,0.12)" }}
    className="flex flex-col gap-3 rounded-2xl border border-[#e8e3db] bg-white p-5 shadow-[0_4px_16px_rgba(17,24,39,0.06)] transition-all duration-300 cursor-default"
  >
    {/* Logo + Org name row */}
    <div className="flex items-center gap-2.5">
      <div className="flex-shrink-0">
        <OrgLogo cert={cert} />
      </div>
      <p
        className="text-[11px] font-bold uppercase tracking-wide leading-tight"
        style={{ color: cert.orgColor }}
      >
        {cert.org}
      </p>
    </div>

    {/* Title */}
    <h3 className="text-sm font-bold leading-5 text-[#111827]">{cert.title}</h3>

    {/* Org muted */}
    <p className="text-[11px] text-[#9ca3af] font-medium -mt-1.5">{cert.org}</p>

    {/* Type badge */}
    <span
      className="inline-block w-fit rounded-full px-3 py-1 text-[10px] font-semibold"
      style={{ backgroundColor: cert.typeColor, color: cert.typeTxt }}
    >
      {cert.type}
    </span>
  </motion.div>
);


const MiniCert = ({ cert }) => {
  const isWebtech = cert.org === "WEBTECHFLY";
  const isMS = cert.org.includes("Microsoft");
  const isHP = cert.org === "HP Life";
  const isForage = cert.org === "Forage";

  return (
    <div className="relative w-[190px] h-[190px] sm:w-[210px] sm:h-[210px] flex-shrink-0 bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col items-center justify-between p-4 shadow-sm">
      {isWebtech && (
        <>
          <div className="absolute top-0 left-0 w-full h-full border-l-[14px] border-[#15325c]" />
          <div className="absolute top-0 left-0 w-full h-full border-t-[4px] border-[#a0c4e4]" />
        </>
      )}
      {isMS && (
        <div className="absolute inset-1.5 border-2 border-[#15325c] rounded-lg" />
      )}
      {isHP && (
        <div className="absolute inset-0 border-4 border-[#e3f2fd] rounded-xl" />
      )}
      {isForage && (
        <div className="absolute inset-1.5 border-2 border-[#15325c] rounded-lg" />
      )}

      <div className="relative z-10 flex flex-col items-center text-center h-full w-full">
        <div className="flex items-center gap-1.5 mt-1">
           <div className="w-6 h-6 flex items-center justify-center">
             <OrgLogo cert={cert} />
           </div>
           {(isWebtech || isHP) && <span className="text-[8px] font-bold text-gray-800 tracking-wider">{isWebtech ? "WEBTECHFLY" : "HP LIFE"}</span>}
        </div>

        <div className="flex flex-col items-center mt-3">
          <span className="text-[7px] font-bold text-[#15325c] uppercase tracking-widest">{cert.certType}</span>
          <h4 className="text-[10px] sm:text-[11px] font-bold leading-tight mt-1 text-gray-900 max-w-[150px]">{cert.title}</h4>
        </div>

        <div className="flex flex-col items-center mt-auto mb-2">
          <span className="text-[9px] font-semibold text-gray-800">Avinash Kumar</span>
          <div className="w-16 border-b border-gray-400 mt-1" />
        </div>

        <div className="flex justify-between items-end w-full px-1 pb-1">
           <div className="flex flex-col items-start max-w-[100px]">
             <span className="font-script text-xs text-gray-700">{cert.signatory}</span>
             <span className="text-[5px] text-gray-400 border-t border-gray-300 pt-0.5 mt-0.5 leading-tight">{cert.signatoryTitle}</span>
           </div>
           
           {isWebtech ? (
             <div className="relative w-9 h-9">
               <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                 <path d="M50 0 L55 10 L65 7 L67 18 L78 19 L77 30 L87 35 L82 45 L90 53 L81 60 L85 70 L74 74 L73 85 L62 84 L56 93 L47 88 L38 95 L34 85 L23 83 L24 72 L13 67 L17 57 L8 49 L18 41 L14 31 L25 28 L28 17 L38 18 L44 9 Z" fill="#d4af37" />
                 <circle cx="50" cy="50" r="30" fill="#f3e5ab" />
                 <circle cx="50" cy="50" r="25" fill="#d4af37" />
               </svg>
               <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
                 <div className="w-2 h-4 bg-[#d4af37] -rotate-12 transform origin-top skew-y-12 border-b-2 border-r border-[#b8860b]"></div>
                 <div className="w-2 h-4 bg-[#d4af37] rotate-12 transform origin-top -skew-y-12 border-b-2 border-l border-[#b8860b]"></div>
               </div>
             </div>
           ) : (
             <div className="w-8 h-8 rounded-full bg-[#15325c] flex items-center justify-center relative drop-shadow-md border border-white outline outline-1 outline-[#15325c]">
               <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="none" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
               </svg>
             </div>
           )}
        </div>
      </div>
    </div>
  );
};

const FeaturedCertCard = ({ cert, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.5, delay, ease }}
    whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(17,24,39,0.08)" }}
    className="flex flex-col sm:flex-row gap-5 rounded-2xl border border-[#e8e3db] bg-white p-4 shadow-[0_4px_16px_rgba(17,24,39,0.04)] transition-all duration-300"
  >
    <MiniCert cert={cert} />
    <div className="flex flex-col justify-center py-2 flex-1">
      <h3 className="text-lg font-bold leading-snug text-[#111827] mb-1">{cert.title}</h3>
      <p className="text-sm font-bold text-[#db4a2b] mb-4">
        {cert.org}
      </p>
      <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500 mb-4">
        <FiCalendar size={14} />
        <span>{cert.date}</span>
      </div>
      <div>
        <span
          className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
          style={{ backgroundColor: cert.typeColor, color: cert.typeTxt }}
        >
          {cert.type}
        </span>
      </div>
    </div>
  </motion.div>
);

/* ─── Section ───────────────────────────────────────────────────────── */

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="relative isolate -mx-4 scroll-mt-24 overflow-hidden bg-[#f8f4ee] px-5 pt-20 pb-24 text-[#111827] sm:-mx-6 sm:px-8 lg:left-1/2 lg:mx-0 lg:w-screen lg:-translate-x-1/2 lg:px-10 lg:pt-28 lg:pb-32 xl:px-12"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.5),transparent_30%),linear-gradient(135deg,#f8f4ee_0%,#f7efe6_52%,#eadbc9_100%)]" />
      {/* Top fade to seamlessly blend with section above */}
      <div className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-[#f8f4ee] to-transparent pointer-events-none" />

      {/* Dot pattern */}
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.25, 0.65] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute right-8 top-16 -z-10 grid grid-cols-5 gap-3 text-[#8b5727]/30 lg:right-24"
      >
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-current" />
        ))}
      </motion.div>

      {/* Sparkles */}
      {[[12, 55], [80, 30], [35, 80]].map(([x, y], i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          animate={{ opacity: [0.2, 0.7, 0.2], scale: [1, 1.2, 1] }}
          transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
          className="absolute text-xl text-[#8b5727]/30 pointer-events-none select-none"
          style={{ left: `${x}%`, top: `${y}%` }}
        >
          ✦
        </motion.span>
      ))}

      <div className="relative z-10 mx-auto max-w-[1240px]">

        {/* ── Hero: Left heading + Right 2x2 cert cards ── */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.45fr] lg:items-center lg:gap-16">

          {/* Left: Heading block */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease }}
              className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8b5727]"
            >
              - Certifications
            </motion.p>

            <h2 className="font-display text-5xl font-bold leading-[0.95] tracking-normal text-[#111827] sm:text-6xl lg:text-[3.25rem] xl:text-[3.65rem]">
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease }}
                className="block"
              >
                Learning
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.1, ease }}
                className="relative mt-1 block w-fit font-script text-[4rem] font-normal leading-none text-[#8b5727] sm:text-[5rem] lg:text-[4rem] xl:text-[4.5rem]"
              >
                Journey.
                <svg
                  viewBox="0 0 210 30"
                  className="absolute -bottom-2 left-0 h-6 w-[90%] text-[#8b5727]"
                  fill="none"
                  aria-hidden="true"
                >
                  <motion.path
                    d="M3 21C40 13 76 10 108 11C146 12 175 16 207 5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
                  />
                </svg>
              </motion.span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="mt-6 max-w-sm text-sm leading-6 text-[#4b5563] sm:text-base sm:leading-7"
            >
              Recognitions and certifications that reflect my commitment to continuous
              learning and professional growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
              className="mt-10"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#db4a2b]">
                <path d="M12 2 C12 10, 10 12, 2 12 C10 12, 12 14, 12 22 C12 14, 14 12, 22 12 C14 12, 12 10, 12 2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </div>

          {/* Right: Floating certificate card composition — pixel-perfect */}
          <div
            style={{
              position: "relative",
              width: 580,
              height: 480,
              flexShrink: 0,
            }}
          >
            {/* ── Dashed horizontal ellipse (SVG) ── */}
            <svg
              aria-hidden="true"
              width="580"
              height="480"
              viewBox="0 0 580 480"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 0,
                pointerEvents: "none",
                WebkitMaskImage: "linear-gradient(to bottom, transparent 5%, black 30%, black 70%, transparent 95%)",
                maskImage: "linear-gradient(to bottom, transparent 5%, black 30%, black 70%, transparent 95%)",
              }}
            >
              <ellipse
                cx="290"
                cy="240"
                rx="280"
                ry="220"
                stroke="#E8A06A"
                strokeOpacity="0.45"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                fill="none"
              />
            </svg>

            {/* ── Sparkle — left pole ── */}
            <motion.div
              aria-hidden="true"
              animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.3, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0 }}
              style={{
                position: "absolute",
                top: "calc(50% - 8px)",
                left: 2,
                width: 16,
                height: 16,
                zIndex: 3,
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
                <path d="M12 2 C12 10, 10 12, 2 12 C10 12, 12 14, 12 22 C12 14, 14 12, 22 12 C14 12, 12 10, 12 2" fill="none" stroke="#E8A06A" strokeWidth="2.5" />
              </svg>
            </motion.div>

            {/* ── Sparkle — right pole ── */}
            <motion.div
              aria-hidden="true"
              animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.3, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              style={{
                position: "absolute",
                top: "calc(50% - 8px)",
                left: 562,
                width: 16,
                height: 16,
                zIndex: 3,
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
                <path d="M12 2 C12 10, 10 12, 2 12 C10 12, 12 14, 12 22 C12 14, 14 12, 22 12 C14 12, 12 10, 12 2" fill="none" stroke="#E8A06A" strokeWidth="2.5" />
              </svg>
            </motion.div>

            {/* ── Four floating certificate cards ── */}
            {[
              { rotate: -7,  tx: -8, ty: -6, top: 43,  left: 37,  floatDelay: 0,   floatDur: 7,   entryDelay: 0 },
              { rotate:  6,  tx:  8, ty: -2, top: 43,  left: 303, floatDelay: 1.5, floatDur: 7,   entryDelay: 0.12 },
              { rotate: -3,  tx: -4, ty:  8, top: 252, left: 37,  floatDelay: 0.8, floatDur: 8,   entryDelay: 0.24 },
              { rotate:  5,  tx:  6, ty:  4, top: 252, left: 303, floatDelay: 2.2, floatDur: 6.5, entryDelay: 0.36 },
            ].map((pos, i) => {
              const cert = featuredCerts[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24, rotate: pos.rotate, x: pos.tx }}
                  whileInView={{ opacity: 1, y: pos.ty, rotate: pos.rotate, x: pos.tx }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.65, delay: pos.entryDelay, ease }}
                  style={{
                    position: "absolute",
                    top: pos.top,
                    left: pos.left,
                    zIndex: 2,
                    transformOrigin: "center center",
                  }}
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: pos.floatDur,
                      delay: pos.floatDelay,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{
                      y: -12,
                      scale: 1.02,
                      boxShadow: "0 28px 60px rgba(0,0,0,.13)",
                      transition: { duration: 0.25, ease: "easeOut" },
                    }}
                    style={{
                      width: 240,
                      height: 190,
                      background: "#ffffff",
                      borderRadius: 22,
                      border: "1px solid rgba(222,214,204,0.85)",
                      boxShadow: "0 18px 45px rgba(0,0,0,.08)",
                      padding: "20px 20px 18px 20px",
                      display: "flex",
                      flexDirection: "column",
                      gap: 0,
                      cursor: "default",
                      overflow: "hidden",
                    }}
                  >
                    {/* 1. Logo + Company Name row */}
                    <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                      <div style={{ flexShrink: 0, width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <OrgLogo cert={cert} />
                      </div>
                      <p
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          color: "#111827",
                          lineHeight: 1.15,
                          margin: 0,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {cert.orgShort ?? cert.org}
                      </p>
                    </div>

                    {/* 2. Certificate Title */}
                    <h3
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        lineHeight: 1.35,
                        color: "#111827",
                        margin: 0,
                        marginTop: 12,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        flexShrink: 0,
                      }}
                    >
                      {cert.title}
                    </h3>

                    {/* 3. Issuer name */}
                    <p
                      style={{
                        fontSize: 11,
                        color: "#9CA3AF",
                        fontWeight: 500,
                        margin: 0,
                        marginTop: 8,
                        lineHeight: 1.3,
                        flexShrink: 0,
                      }}
                    >
                      {cert.org}
                    </p>

                    {/* 4. Category badge */}
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        width: "fit-content",
                        borderRadius: 999,
                        padding: "0 12px",
                        height: 26,
                        fontSize: 11,
                        fontWeight: 600,
                        backgroundColor: cert.typeColor,
                        color: cert.typeTxt,
                        marginTop: "auto",
                        flexShrink: 0,
                      }}
                    >
                      {cert.type}
                    </span>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        
        {/* ── 2x2 Detailed Certs Grid ── */}
        <div className="grid gap-6 lg:grid-cols-2 mt-16 lg:mt-24">
          {featuredCerts.map((cert, i) => (
            <FeaturedCertCard key={i} cert={cert} delay={i * 0.15} />
          ))}
        </div>

        {/* ── More Certifications ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="mt-12 rounded-2xl border border-[#e8e3db] bg-white p-6 shadow-[0_4px_20px_rgba(17,24,39,0.05)] lg:p-8"
        >
          {/* Heading */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#111827] relative w-fit">
              More Certifications
              <span className="absolute -bottom-1.5 left-0 h-[3px] w-12 rounded-full bg-[#db4a2b]" />
            </h3>
          </div>

          {/* Horizontal scrollable row */}
          <div
            className="flex gap-4 overflow-x-auto pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {moreCerts.map((cert, i) => {
              const Logo = cert.Logo;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.08, ease }}
                  whileHover={{ y: -4, boxShadow: "0 10px 28px rgba(17,24,39,0.08)" }}
                  className="flex-shrink-0 flex flex-row items-start gap-3 w-[200px] rounded-xl border border-[#e8e3db] bg-[#fafafa] p-3.5 shadow-sm transition-all duration-200 cursor-default"
                >
                  {/* Logo — LEFT side */}
                  <div
                    className="w-11 h-11 rounded-lg flex-shrink-0 overflow-hidden flex items-center justify-center p-1"
                    style={{ backgroundColor: cert.logoBg, border: cert.logoBg === "#ffffff" || cert.logoBg === "#f0fbff" ? "1px solid #e5e7eb" : "none" }}
                  >
                    <Logo />
                  </div>

                  {/* Content — RIGHT side */}
                  <div className="flex flex-col gap-1 min-w-0">
                    <p className="text-[11px] font-bold leading-snug text-[#111827] line-clamp-3">{cert.title}</p>
                    <p className="text-[10px] font-semibold text-[#6b7280]">{cert.org}</p>
                    <div className="flex items-center gap-1 text-[10px] text-[#9ca3af] mt-0.5">
                      <FiCalendar size={9} />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Learning from the Best ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="mt-6 rounded-2xl border border-[#e8e3db] bg-white/70 px-6 py-5 shadow-[0_4px_20px_rgba(17,24,39,0.05)] backdrop-blur"
        >
          <p className="mb-4 text-sm font-bold text-[#111827]">Learning from the Best</p>
          <div className="flex flex-wrap items-center gap-3">
            {partners.map((p, i) => (
              <div key={i} className="flex items-center gap-1.5 rounded-full border border-[#e8e3db] bg-[#f9f5f1] px-3 py-1.5">
                <div
                  className="flex h-4 w-4 items-center justify-center rounded text-[8px] font-bold text-white"
                  style={{ backgroundColor: p.bg }}
                >
                  {p.emoji}
                </div>
                <span className="text-xs font-medium text-[#374151]">{p.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="mt-6 flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#111827] px-8 py-7 shadow-xl sm:flex-row sm:items-center lg:px-10"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8b5727]">
              <span className="text-xl">🎓</span>
            </div>
            <div>
              <p className="text-lg font-bold text-white">
                Learning never{" "}
                <span className="font-script text-2xl font-normal text-[#d4915c]">stops.</span>
              </p>
              <p className="mt-0.5 text-sm text-white/50">
                I believe in continuous learning and exploring new technologies to build better solutions.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-1 rounded-2xl border border-white/10 bg-white/5 px-6 py-4">
            <span className="text-3xl font-black text-white">10+</span>
            <span className="text-xs text-white/50">Certifications Earned</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Certificates;