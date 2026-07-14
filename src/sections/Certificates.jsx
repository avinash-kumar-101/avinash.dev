import { motion, useReducedMotion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { FiCalendar } from "react-icons/fi";

/* ─── Shared Easing ───────────────────────────────────────────────── */
const EASE = [0.22, 1, 0.36, 1];
const VP = { once: true, amount: 0.3 };

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

const TataLogoMini = () => (
  <svg viewBox="0 0 48 56" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    {/* Oval background */}
    <ellipse cx="24" cy="22" rx="22" ry="20" fill="#1565C0" />
    {/* Tata T-cross symbol in white */}
    {/* Horizontal bar */}
    <rect x="8" y="12" width="32" height="5" rx="2.5" fill="white" />
    {/* Vertical bar */}
    <rect x="21" y="12" width="6" height="20" rx="2" fill="white" />
    {/* Horizontal inner line */}
    <rect x="14" y="21" width="20" height="2.5" rx="1" fill="#1565C0" opacity="0.4" />
    {/* TATA text */}
    <text x="24" y="52" textAnchor="middle" fill="#1565C0" fontSize="9" fontWeight="900" fontFamily="'Inter', Arial, sans-serif" letterSpacing="2">TATA</text>
  </svg>
);


const DeloitteLogoClean = () => (
  <svg viewBox="0 0 80 24" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <text x="2" y="17" fill="#000000" fontSize="16" fontWeight="900" fontFamily="'Inter', sans-serif">Deloitte</text>
    <circle cx="68" cy="14" r="2.5" fill="#86c232" />
  </svg>
);

const SimplilearnLogoClean = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <rect x="2" y="13" width="3.5" height="7" fill="#006699" rx="0.5" />
    <rect x="7.5" y="9" width="3.5" height="11" fill="#00A86B" rx="0.5" />
    <rect x="13" y="5" width="3.5" height="15" fill="#FF8000" rx="0.5" />
    <rect x="18.5" y="1" width="3.5" height="19" fill="#00C0FF" rx="0.5" />
  </svg>
);

const KPMGLogoClean = () => (
  <svg viewBox="0 0 48 24" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <rect width="48" height="24" fill="#0c2340" rx="3" />
    <text x="24" y="16" textAnchor="middle" fill="white" fontSize="11" fontWeight="900" fontFamily="'Inter', sans-serif" letterSpacing="0.5">KPMG</text>
  </svg>
);

const KaggleLogoClean = () => (
  <svg viewBox="0 0 80 24" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <text x="2" y="18" fill="#20beff" fontSize="18" fontWeight="bold" fontFamily="'Inter', sans-serif">kaggle</text>
  </svg>
);

const CelebalLogoClean = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <circle cx="12" cy="12" r="11" fill="#c0392b" />
    <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="900" fontFamily="'Inter', sans-serif">CT</text>
  </svg>
);

const moreCerts = [
  {
    title: "Tata GenAI Powered Data Analytics Job Simulation",
    org: "Forage",
    date: "Jan 2026",
    Logo: TataLogoMini,
    logoBg: "#ffffff",
  },
  {
    title: "Deloitte Australia Data Analytics Job Simulation",
    org: "Forage",
    date: "Jan 2026",
    Logo: DeloitteLogoClean,
    logoBg: "#ffffff",
  },
  {
    title: "Introduction to Generative AI Studio",
    org: "Simplilearn",
    date: "Jan 2026",
    Logo: SimplilearnLogoClean,
    logoBg: "#ffffff",
  },
  {
    title: "Capture the Flag Hackathon 2025",
    org: "KPMG",
    date: "Nov 2025",
    Logo: KPMGLogoClean,
    logoBg: "#ffffff",
  },
  {
    title: "Intro to Programming",
    org: "Kaggle",
    date: "Jan 2025",
    Logo: KaggleLogoClean,
    logoBg: "#ffffff",
  },
  {
    title: "SQL Internship Certificate",
    org: "Celebal Technologies",
    date: "Aug 2025",
    Logo: CelebalLogoClean,
    logoBg: "#ffffff",
  },
];

const WebtechflyPartner = () => (
  <div className="flex items-center gap-2">
    <div className="w-7 h-7 flex-shrink-0 rounded-full overflow-hidden bg-white flex items-center justify-center">
      <img src="/experience/webtechfly.webp" alt="Webtechfly" loading="lazy" decoding="async" className="w-full h-full object-contain scale-125" />
    </div>
    <span className="text-xs font-black tracking-wider text-[#1565C0]">WEBTECHFLY</span>
  </div>
);

const MicrosoftPartner = () => (
  <div className="flex items-center gap-2">
    <div className="w-4 h-4 grid grid-cols-2 gap-[1px] flex-shrink-0">
      <div className="bg-[#f25022]" />
      <div className="bg-[#7fba00]" />
      <div className="bg-[#00a4ef]" />
      <div className="bg-[#ffb900]" />
    </div>
    <span className="text-xs font-semibold text-[#5e5e5e] font-sans">Microsoft</span>
  </div>
);

const LinkedInPartner = () => (
  <div className="flex items-center gap-1.5">
    <div className="w-[18px] h-[18px] bg-[#0a66c2] rounded-[2px] flex-shrink-0 flex items-center justify-center p-[2px]">
      <span className="text-white text-[10px] font-bold font-sans lowercase leading-none" style={{ transform: "translateY(-0.5px)" }}>in</span>
    </div>
    <span className="text-xs font-bold text-[#0a66c2] font-sans">
      Linked<span className="text-xs font-medium text-[#5e5e5e]">in </span>
      <span className="text-xs font-semibold text-[#5e5e5e]">Learning</span>
    </span>
  </div>
);

const HPPartner = () => (
  <div className="flex items-center gap-1.5">
    <div className="w-5 h-5 bg-[#0096d6] rounded-full flex-shrink-0 flex items-center justify-center">
      <span className="text-white text-[9px] font-black italic font-sans" style={{ transform: "translate(-0.5px, -0.5px)" }}>hp</span>
    </div>
    <span className="text-xs font-bold text-[#0096d6] tracking-wider">LIFE</span>
  </div>
);

const ForagePartner = () => (
  <div className="flex items-center gap-1.5">
    <div className="w-[18px] h-[18px] text-[#050B14] flex-shrink-0">
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 2.5L3 7.5V16.5L12 21.5L21 16.5V7.5L12 2.5Z" />
      </svg>
    </div>
    <span className="text-xs font-bold text-[#050B14] lowercase tracking-tight">forage</span>
  </div>
);

const KagglePartner = () => (
  <div className="flex items-center gap-1.5">
    <div className="w-[18px] h-[18px] flex-shrink-0">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-full h-full">
        <path d="M6 3v18M18 3l-10 9 10 9" stroke="#20beff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    <span className="text-xs font-black text-[#20beff] tracking-tight">kaggle</span>
  </div>
);

const CelebalPartner = () => (
  <div className="flex items-center gap-1.5">
    <div className="w-[18px] h-[18px] bg-[#c0392b] rounded-full flex-shrink-0 flex items-center justify-center">
      <span className="text-white text-[8px] font-bold">CT</span>
    </div>
    <span className="text-xs font-extrabold text-[#c0392b] tracking-wider">CELEBAL</span>
  </div>
);

const HackerCentralPartner = () => (
  <div className="flex items-center gap-1.5">
    <div className="w-[18px] h-[18px] bg-[#212121] rounded-full flex-shrink-0 flex items-center justify-center p-[2.5px]">
      <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
        <path d="M12 2L3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-3zm0 18c-3.9-1-7-5.1-7-9.5V6.3l7-2.3 7 2.3v4.2c0 4.4-3.1 8.5-7 9.5z" />
      </svg>
    </div>
    <span className="text-xs font-black text-[#212121] tracking-wider uppercase">Hacker Central</span>
  </div>
);

const partnerComponents = [
  WebtechflyPartner,
  MicrosoftPartner,
  LinkedInPartner,
  HPPartner,
  ForagePartner,
  KagglePartner,
  CelebalPartner,
  HackerCentralPartner,
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
    <path d="M12 2.5L3 7.5V16.5L12 21.5L21 16.5V7.5L12 2.5Z" fill="#050B14" />
    <path d="M12 12L3 7.5L12 2.5L21 7.5L12 12Z" fill="#1C2B3F" />
    <path d="M12 12V21.5L3 16.5V7.5L12 12Z" fill="#0C1524" />
  </svg>
);

const WebtechflyLogo = () => (
  <img src="/experience/webtechfly.webp" alt="Webtechfly" loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "50%", backgroundColor: "#fff", transform: "scale(1.35)" }} />
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
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={VP}
    transition={{ duration: 0.6, delay, ease: EASE }}
    whileHover={{
      y: -6,
      boxShadow: "0 20px 48px rgba(17,24,39,0.12)",
      borderColor: "rgba(212,175,55,0.35)",
    }}
    className="flex flex-col gap-3 rounded-2xl border border-[#e8e3db] bg-white p-5 shadow-[0_4px_16px_rgba(17,24,39,0.06)] transition-colors duration-300 cursor-default"
    style={{ willChange: "transform, opacity" }}
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
        </div>
      </div>
    </div>
  );
};

/* ─── Featured Cert Card (large 2x2 grid) ───────────────────────────── */

const FeaturedCertCard = ({ cert, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={VP}
    transition={{ duration: 0.6, delay, ease: EASE }}
    whileHover={{
      y: -6,
      boxShadow: "0 24px 56px rgba(17,24,39,0.12)",
      borderColor: "rgba(212,175,55,0.35)",
    }}
    className="flex flex-col sm:flex-row gap-5 rounded-2xl border border-[#e8e3db] bg-white p-4 shadow-[0_4px_16px_rgba(17,24,39,0.04)] transition-colors duration-300"
    style={{ willChange: "transform, opacity" }}
  >
    {/* Image hover scale — only the cert mini image */}
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5, ease: EASE }}
      style={{ flexShrink: 0, display: "inline-block" }}
    >
      <MiniCert cert={cert} />
    </motion.div>
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

/* ─── Floating Hero Card — extracts hooks out of .map() ─────────────── */

const FloatingHeroCard = ({ pos, cert, index, springX, springY, shouldReduceMotion }) => {
  const parallaxX = useTransform(springX, (v) => v * (index % 2 === 0 ? 1 : -0.7));
  const parallaxY = useTransform(springY, (v) => v * (index < 2 ? 0.8 : -0.6));

  const floatTransition = shouldReduceMotion
    ? {}
    : {
        duration: 4.5,
        delay: pos.floatDelay,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      };

  return (
    /* Reveal wrapper */
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={VP}
      transition={{ duration: 0.6, delay: pos.entryDelay, ease: EASE }}
      style={{
        position: "absolute",
        top: pos.top,
        left: pos.left,
        zIndex: 2,
        transformOrigin: "center center",
        willChange: "transform, opacity",
      }}
    >
      {/* Parallax layer */}
      <motion.div style={{ x: parallaxX, y: parallaxY }}>
        {/* Rotation wrapper — keeps original angle */}
        <div style={{ transform: `rotate(${pos.rotate}deg)` }}>
          {/* Float animation */}
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, -8, 0] }}
            transition={floatTransition}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 28px 60px rgba(0,0,0,.15)",
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
              willChange: "transform",
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
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ─── Section ───────────────────────────────────────────────────────── */

const Certificates = () => {
  const shouldReduceMotion = useReducedMotion();

  /* ── Mouse Parallax for hero cards ── */
  const heroRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const handleMouseMove = (e) => {
    if (shouldReduceMotion) return;
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    // Max 8px
    mouseX.set(((e.clientX - cx) / (rect.width / 2)) * 8);
    mouseY.set(((e.clientY - cy) / (rect.height / 2)) * 8);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };



  return (
    <section
      id="certificates"
      className="relative isolate -mx-4 scroll-mt-24 overflow-hidden bg-[#f8f4ee] px-5 pt-20 pb-24 text-[#111827] sm:-mx-6 sm:px-8 lg:left-1/2 lg:mx-0 lg:w-screen lg:-translate-x-1/2 lg:px-10 lg:pt-28 lg:pb-32 xl:px-12"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.5),transparent_30%),linear-gradient(135deg,#f8f4ee_0%,#f7efe6_52%,#f8f4ee_100%)]" />
      {/* Top fade to seamlessly blend with section above */}
      <div className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-[#f8f4ee] to-transparent pointer-events-none" />
      {/* Bottom fade to seamlessly blend with Contact section below */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#f8f4ee] to-transparent pointer-events-none" />

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

      {/* ── SECTION 4: Sparkle Icons — twinkle ── */}
      {[[12, 55], [80, 30], [35, 80], [60, 70], [25, 20]].map(([x, y], i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          animate={
            shouldReduceMotion
              ? { opacity: 0.4 }
              : {
                  opacity: [0.4, 1, 0.4],
                  scale: [1, 1.15, 1],
                }
          }
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.36,
          }}
          className="absolute text-xl text-[#8b5727]/40 pointer-events-none select-none"
          style={{ left: `${x}%`, top: `${y}%` }}
        >
          ✦
        </motion.span>
      ))}

      <div className="relative z-10 mx-auto max-w-[1240px]">

        {/* ── Hero: Left heading + Right 2x2 cert cards ── */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.45fr] lg:items-center lg:gap-16">

          {/* ── SECTION 1: Hero Text ── */}
          <div>
            {/* Small heading "CERTIFICATIONS" — x: -30→0 */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VP}
              transition={{ duration: 0.5, ease: EASE }}
              className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8b5727]"
            >
              - Certifications
            </motion.p>

            <h2 className="font-display text-5xl font-bold leading-[0.95] tracking-normal text-[#111827] sm:text-6xl lg:text-[3.25rem] xl:text-[3.65rem]">
              {/* "Learning" — y: 40→0, 0.8s */}
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VP}
                transition={{ duration: 0.6, ease: EASE }}
                className="block"
              >
                Learning
              </motion.span>
              {/* "Journey." — delay 0.25s, y: 35→0 */}
              <motion.span
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VP}
                transition={{ duration: 0.6, delay: 0.16, ease: EASE }}
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
                    viewport={VP}
                    transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
                  />
                </svg>
              </motion.span>
            </h2>

            {/* Paragraph — delay 0.45s, y: 25→0 */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.5, delay: 0.28, ease: EASE }}
              className="mt-6 max-w-sm text-sm leading-6 text-[#4b5563] sm:text-base sm:leading-7"
            >
              Recognitions and certifications that reflect my commitment to continuous
              learning and professional growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0.55 }}
              animate={{ opacity: [0.45, 0.75, 0.45], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="mt-10"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#db4a2b]">
                <path d="M12 2 C12 10, 10 12, 2 12 C10 12, 12 14, 12 22 C12 14, 14 12, 22 12 C14 12, 12 10, 12 2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </div>

          {/* ── SECTION 2 + 3 + 4: Right — Floating Cards + Ellipse + Sparkles ── */}
          <div
            ref={heroRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              position: "relative",
              width: 580,
              height: 480,
              flexShrink: 0,
            }}
          >
            {/* ── SECTION 3: Dashed Circular Decoration — slow continuous rotation ── */}
            <motion.svg
              aria-hidden="true"
              width="580"
              height="480"
              viewBox="0 0 580 480"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={shouldReduceMotion ? {} : { rotate: 360 }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 0,
                pointerEvents: "none",
                WebkitMaskImage: "linear-gradient(to bottom, transparent 5%, black 30%, black 70%, transparent 95%)",
                maskImage: "linear-gradient(to bottom, transparent 5%, black 30%, black 70%, transparent 95%)",
                transformOrigin: "290px 240px",
                willChange: "transform",
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
            </motion.svg>

            {/* ── Sparkle — left pole ── */}
            <motion.div
              aria-hidden="true"
              animate={
                shouldReduceMotion
                  ? { opacity: 0.4 }
                  : { opacity: [0.4, 1, 0.4], scale: [1, 1.15, 1] }
              }
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0 }}
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
              animate={
                shouldReduceMotion
                  ? { opacity: 0.4 }
                  : { opacity: [0.4, 1, 0.4], scale: [1, 1.15, 1] }
              }
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.54 }}
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

            {/* ── SECTION 2: Four Floating Certificate Cards ── */}
            {[
              { rotate: -7, tx: -8, ty: -6, top: 43, left: 37, floatDelay: 0, entryDelay: 0.10 },
              { rotate: 6, tx: 8, ty: -2, top: 43, left: 303, floatDelay: 0.8, entryDelay: 0.20 },
              { rotate: -3, tx: -4, ty: 8, top: 252, left: 37, floatDelay: 1.5, entryDelay: 0.30 },
              { rotate: 5, tx: 6, ty: 4, top: 252, left: 303, floatDelay: 2.2, entryDelay: 0.40 },
            ].map((pos, i) => (
              <FloatingHeroCard
                key={i}
                pos={pos}
                cert={featuredCerts[i]}
                index={i}
                springX={springX}
                springY={springY}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>
        </div>


        {/* ── SECTION 5: 2x2 Detailed Certs Grid ── */}
        <div className="grid gap-6 lg:grid-cols-2 mt-16 lg:mt-24">
          {featuredCerts.map((cert, i) => (
            <FeaturedCertCard key={i} cert={cert} delay={i * 0.08} />
          ))}
        </div>

        {/* ── SECTION 6: More Certifications ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.57, delay: 0.06, ease: EASE }}
          className="mt-12 rounded-2xl border border-[#e8e3db] bg-white p-6 shadow-[0_4px_20px_rgba(17,24,39,0.05)] lg:p-8"
        >
          {/* Heading */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#111827] relative w-fit">
              More Certifications
              <span className="absolute -bottom-1.5 left-0 h-[3px] w-12 rounded-full bg-[#db4a2b]" />
            </h3>
          </div>

          {/* Grid Layout of cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
            {moreCerts.map((cert, i) => {
              const Logo = cert.Logo;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VP}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    boxShadow: "0 12px 32px rgba(17,24,39,0.10)",
                  }}
                  className="flex flex-row items-start gap-3 w-full rounded-xl border border-[#e8e3db] bg-white p-3.5 shadow-sm transition-all duration-200 cursor-default"
                  style={{ willChange: "transform, opacity" }}
                >
                  {/* Logo — LEFT side, with rotate on hover */}
                  <motion.div
                    className="w-11 h-11 rounded-lg flex-shrink-0 overflow-hidden flex items-center justify-center p-1 border border-gray-100 bg-white"
                    whileHover={{ rotate: 4 }}
                    transition={{ duration: 0.5, ease: EASE }}
                  >
                    <Logo />
                  </motion.div>

                  {/* Content — RIGHT side */}
                  <div className="flex flex-col gap-0.5 min-w-0">
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

        {/* ── SECTION 7: Learning Partners Logos ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.5, delay: 0.06, ease: EASE }}
          className="mt-6 rounded-2xl border border-[#e8e3db] bg-white pt-6 pb-6 shadow-[0_4px_20px_rgba(17,24,39,0.05)] relative overflow-hidden"
        >
          <p className="mb-6 text-sm font-bold text-[#111827] text-center">Learning from the Best</p>
          
          {/* Edge fade mask & Scroll Container */}
          <div 
            className="w-full overflow-hidden relative"
            style={{ 
              maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", 
              WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" 
            }}
          >
            <motion.div
              className="flex items-center w-max group"
              animate={shouldReduceMotion ? {} : { x: ["0%", "-50%"] }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            >
              {[...partnerComponents, ...partnerComponents].map((Component, i) => (
                <div
                  key={i}
                  className="flex items-center flex-shrink-0"
                >
                  <motion.div
                    className="px-8 transition-all duration-500 opacity-60 grayscale-[0.7] group-hover:opacity-20 group-hover:grayscale hover:!opacity-100 hover:!grayscale-0 cursor-default"
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.54, ease: EASE }}
                    style={{ willChange: "transform, opacity, filter" }}
                  >
                    <Component />
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* ── SECTION 8: Bottom Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.57, delay: 0.06, ease: EASE }}
          className="mt-8 w-full relative overflow-hidden rounded-[16px] shadow-xl flex flex-col lg:flex-row items-center justify-between px-6 py-6 lg:px-10 gap-6 lg:gap-0"
          style={{
            background: "linear-gradient(90deg, #111827 0%, #1c1408 50%, #8b5727 100%)",
            border: "1px solid rgba(139, 87, 39, 0.2)"
          }}
        >
          {/* Golden shimmer overlay — left to right, 5s infinite, very soft */}
          {!shouldReduceMotion && (
            <motion.div
              aria-hidden="true"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(105deg, transparent 35%, rgba(212,175,55,0.07) 50%, transparent 65%)",
                pointerEvents: "none",
                zIndex: 1,
              }}
            />
          )}

          {/* LEFT: Icon + Heading */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-5">
            {/* Icon */}
            <div
              className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-[14px]"
              style={{
                background: "rgba(139, 87, 39, 0.15)",
                border: "1px solid rgba(139, 87, 39, 0.4)",
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" style={{ width: 30, height: 30, color: "#c8935a" }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12v7a2 2 0 01-2 2h-1a2 2 0 01-2-2v-7" />
              </svg>
            </div>

            {/* Heading block */}
            <div className="flex flex-col text-center lg:text-left">
              <p
                className="text-[1.45rem] font-bold text-white leading-tight"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                Learning never
              </p>
              <span className="font-script text-[2.75rem] font-normal leading-[0.75] mt-1 block relative w-fit mx-auto lg:mx-0 lg:ml-2" style={{ color: "#c8935a" }}>
                stops.
                <svg
                  viewBox="0 0 90 8"
                  style={{ position: "absolute", bottom: -5, left: 0, width: "100%", height: 5 }}
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path d="M2 5 C22 3, 55 7, 88 4" stroke="#8b5727" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </div>
          </div>

          {/* CENTER: Divider + Description */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">
            <div className="hidden lg:block h-[50px] w-[1px] flex-shrink-0" style={{ background: "rgba(139, 87, 39, 0.4)" }} />
            <p className="text-[13.5px] leading-[1.6] max-w-[280px] text-center lg:text-left font-normal mt-6 lg:mt-0" style={{ color: "rgba(255,255,255,0.7)" }}>
              I believe in continuous learning<br className="hidden lg:block" />and exploring new technologies<br className="hidden lg:block" />to build better solutions.
            </p>
          </div>

          {/* RIGHT: Stats Card — hover lift */}
          <div className="relative z-10 flex justify-center lg:justify-end mt-6 lg:mt-0 flex-shrink-0">
            <motion.div
              className="flex items-center"
              whileHover={{
                y: -4,
                scale: 1.02,
                boxShadow: "0 12px 36px rgba(0,0,0,0.25)",
              }}
              transition={{ duration: 0.25, ease: EASE }}
              style={{
                background: "rgba(139, 87, 39, 0.2)",
                border: "1px solid rgba(139, 87, 39, 0.35)",
                padding: "12px 24px 12px 16px",
                gap: "14px",
                borderRadius: "14px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                backdropFilter: "blur(8px)",
                willChange: "transform",
              }}
            >
              {/* Book icon circular box */}
              <div
                style={{
                  width: 44,
                  height: 44,
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  border: "1px solid rgba(139, 87, 39, 0.5)",
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22, color: "#c8935a" }}>
                  <path d="M2 4.5C2 4.5 6 3 12 4.5" />
                  <path d="M12 4.5V20" />
                  <path d="M2 4.5V19C2 19 6 17.5 12 19" />
                  <path d="M22 4.5C22 4.5 18 3 12 4.5" />
                  <path d="M22 4.5V19C22 19 18 17.5 12 19" />
                </svg>
              </div>
              {/* 10+ */}
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <span style={{ fontSize: "1.75rem", fontWeight: 700, color: "#c8935a", lineHeight: 1 }}>
                  10+
                </span>
                <span style={{ fontSize: "11px", fontWeight: 500, color: "rgba(255,255,255,0.75)", lineHeight: 1.3, marginTop: 4 }}>
                  Certifications<br />Earned
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default Certificates;