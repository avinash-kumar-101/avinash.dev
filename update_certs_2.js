const fs = require('fs');
const file = 'src/sections/Certificates.jsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Update featuredCerts
content = content.replace(/const featuredCerts = \[\s*\{[\s\S]*?\];/, `const featuredCerts = [
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
  },
];`);

// 2. Add MiniCert and FeaturedCertCard BEFORE /* ─── Section ─── */
const newComponents = `
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
           <div className="flex flex-col items-center">
             <span className="font-script text-xs text-gray-700">Avinash</span>
             <span className="text-[5px] text-gray-400 border-t border-gray-300 pt-0.5 mt-0.5">Authorized Signatory</span>
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

/* ─── Section ───────────────────────────────────────────────────────── */`;

content = content.replace(/\/\* ─── Section ─+ \*\//, newComponents);

// 3. Inject the 2x2 grid BEFORE "More Certifications"
const gridSection = `
        {/* ── 2x2 Detailed Certs Grid ── */}
        <div className="grid gap-6 lg:grid-cols-2 mt-16 lg:mt-24">
          {featuredCerts.map((cert, i) => (
            <FeaturedCertCard key={i} cert={cert} delay={i * 0.15} />
          ))}
        </div>

        {/* ── More Certifications ── */`;

content = content.replace(/\{\/\* ── More Certifications ── \*\/\}/, gridSection);

fs.writeFileSync(file, content);
console.log('Update complete');
