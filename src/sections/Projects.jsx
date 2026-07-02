import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiStar, FiCheckCircle, FiLock, FiCode, FiUser } from "react-icons/fi";

const ease = [0.16, 1, 0.3, 1];

const stats = [
  { value: "10+", label: "Projects", icon: <FiCode size={20} /> },
  { value: "4", label: "Featured", icon: <FiStar size={20} /> },
  { value: "Real-world", label: "Impact", icon: <FiUser size={20} /> },
];

const featuredProject = {
  number: "01",
  tag: "FEATURED PROJECT",
  title: "Smart Meeting Assistant",
  desc: "AI-powered meeting assistant that transcribes, summarizes, and generates actionable insights from meetings.",
  points: [
    "AI transcription using Whisper API",
    "Smart summary & key points generation",
    "Meeting notes, action items & follow-ups",
    "Clean dashboard with meeting history",
    "Secure authentication & user management",
  ],
  tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "AI"],
  demo: "https://your-live-demo-url.com",
  github: "https://github.com/avinash-kumar-101/Smart-Meeting-Assistant",
  image: "/projects/smart-meeting-assistant.png",
};

const project02 = {
  number: "02",
  title: "Movie Discovery Platform",
  desc: "A movie browsing platform to search, explore, and discover movies using TMDB API.",
  points: [
    "Search movies, genres, top rated & trending",
    "Detailed movie info, cast & reviews",
    "Responsive design for all devices",
    "Smooth UI with modern animations",
  ],
  tech: ["React", "TMDB API", "Tailwind CSS"],
  demo: "https://flickfinder-avi.vercel.app/",
  github: "https://github.com/avinash-kumar-101/FlickFinder",
  image: "/projects/FlickFinder.png",
};

const project03 = {
  number: "03",
  title: "Portfolio Website",
  desc: "My personal portfolio website to showcase my skills, projects, and experiences.",
  points: [
    "Modern & responsive design",
    "Smooth animations",
    "Dark/Light mode support",
    "Optimized for performance",
    "Built with Next.js & Tailwind CSS",
  ],
  tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
  demo: "https://avinash-portfolio-gold.vercel.app",
  github: "https://github.com/avinash-kumar-101/avinash-portfolio",
  image: "/projects/portfolio.png",
};

const project04 = {
  number: "04",
  title: "Enterprise ERP Platform",
  subtitle: "(Internship Project)",
  desc: "Contributed to the development of a College ERP system used to manage academic, administrative, and operational activities.",
  points: [
    "Worked on system design and core development",
    "Developed secure RESTful APIs using Node.js & Express.js",
    "Optimized MongoDB schemas and aggregation pipelines",
    "Built reusable React components for various modules",
    "Ensured testing, debugging and performance optimization",
  ],
  image: "/projects/ERP-Dashboard.png",
};

const notableProjects = [
  { title: "AI Chatbot", desc: "AI-powered chatbot using LangChain & OpenAI API", tech: "Python · LangChain", github: "#", icon: "🤖" },
  { title: "URL Shortener", desc: "Shorten URLs and track analytics", tech: "Node.js · MongoDB", github: "#", icon: "🔗" },
  { title: "Weather App", desc: "Get real-time weather updates of any location", tech: "React · OpenWeather API", github: "#", icon: "⛅" },
  { title: "Expense Tracker", desc: "Track income and expenses with charts", tech: "React · Chart.js", github: "#", icon: "💼" },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative isolate -mx-4 scroll-mt-24 overflow-hidden bg-[#f8f4ee] px-5 pt-20 pb-24 text-[#111827] sm:-mx-6 sm:px-8 lg:left-1/2 lg:mx-0 lg:w-screen lg:-translate-x-1/2 lg:px-10 lg:pt-28 lg:pb-32 xl:px-12"
    >
      {/* Dot pattern */}
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.25, 0.65] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute left-8 bottom-32 -z-10 hidden grid-cols-5 gap-3 text-[#8b5727]/25 md:grid"
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-current" />
        ))}
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1240px]">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease }}
              className="mb-3 text-[13px] font-bold uppercase tracking-[0.2em] text-[#8b5727]"
            >
              - PROJECTS
            </motion.p>

            <h2 className="font-display text-5xl font-bold leading-[0.95] tracking-normal text-[#111827] sm:text-6xl lg:text-[3.25rem] xl:text-[3.65rem]">
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease }}
                className="block"
              >
                Things I've
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.1, ease }}
                className="relative mt-1 block w-fit font-script text-[4rem] font-normal leading-none text-[#8b5727] sm:text-[5rem] lg:text-[4rem] xl:text-[4.5rem]"
              >
                Built.
                <svg
                  viewBox="0 0 140 30"
                  className="absolute -bottom-2 left-0 h-6 w-[90%] text-[#8b5727]"
                  fill="none"
                  aria-hidden="true"
                >
                  <motion.path
                    d="M3 21C32 13 58 10 80 11C104 12 120 16 137 5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 1.6, ease: "easeInOut", delay: 0.3 }}
                  />
                </svg>
              </motion.span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="mt-5 max-w-md text-sm leading-6 text-[#4b5563] sm:text-base sm:leading-7"
            >
              A collection of projects that reflect my learning, creativity, and problem-solving skills.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className="mt-10 flex flex-wrap items-center gap-6 lg:gap-8"
            >
              {stats.map((s, idx) => (
                <div key={s.label} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#f8f4ee] text-[#8b5727] shadow-sm border border-[#8b5727]/10">
                    {s.icon}
                  </div>
                  <div>
                    <p className="text-xl font-bold text-[#111827] leading-none">{s.value}</p>
                    <p className="mt-1.5 text-xs font-semibold text-[#6b7280]">{s.label}</p>
                  </div>
                  {idx !== stats.length - 1 && (
                    <div className="hidden h-10 w-[1px] bg-[#111827]/10 sm:block ml-2 lg:ml-4" />
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Floating Images Collage */}
          <div className="relative hidden lg:block h-[480px] w-full">
            {/* Dotted Loop Arrow */}
            <svg className="absolute left-[-35%] top-[30%] w-[45%] h-32 text-[#8b5727]/40 -translate-y-1/2 z-0" fill="none" viewBox="0 0 180 100" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" strokeLinecap="round">
              <circle cx="5" cy="40" r="2.5" fill="currentColor" stroke="none" />
              <path d="M 5,40 C 30,35 50,50 40,70 C 30,90 10,80 20,60 C 30,40 60,15 90,25 C 120,35 150,85 170,75" />
              <path d="M 160,65 L 170,75 L 155,80" strokeDasharray="0" />
            </svg>

            {/* Sparkles */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="absolute left-[5%] top-[10%] w-5 h-5 text-[#8b5727]/40 animate-pulse z-0">
              <path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z" />
            </svg>
            <svg viewBox="0 0 24 24" fill="currentColor" className="absolute left-[-10%] top-[45%] w-4 h-4 text-[#8b5727]/30 animate-pulse z-0">
              <path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z" />
            </svg>
            <svg viewBox="0 0 24 24" fill="currentColor" className="absolute right-[25%] top-[-5%] w-4 h-4 text-[#8b5727]/40 animate-pulse z-0">
              <path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z" />
            </svg>
            <svg viewBox="0 0 24 24" fill="currentColor" className="absolute right-[-5%] top-[35%] w-6 h-6 text-[#8b5727]/30 animate-pulse z-0">
              <path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z" />
            </svg>

            <motion.img
              src="/projects/smart-meeting-assistant.png"
              alt="Smart Meeting Assistant"
              className="absolute right-0 top-[10px] w-[85%] rounded-[1.25rem] border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.12)] z-10"
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
              src="/projects/FlickFinder.png"
              alt="FlickFinder"
              className="absolute left-[5%] bottom-[40px] w-[45%] rounded-xl border border-white/60 shadow-[0_15px_40px_rgba(0,0,0,0.15)] z-20"
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <motion.img
              src="/projects/portfolio.png"
              alt="Portfolio"
              className="absolute right-[10%] bottom-[10px] w-[45%] rounded-xl border border-white/60 shadow-[0_15px_40px_rgba(0,0,0,0.15)] z-30"
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </div>
        </div>

        {/* Featured Project 01 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="group mt-16 rounded-[2rem] border border-[#111827]/6 bg-white/80 p-7 shadow-[0_8px_36px_rgba(17,24,39,0.08)] backdrop-blur lg:p-10 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(17,24,39,0.12)] transition-all duration-300 ease-out"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-12 items-center">
            {/* Left Info */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center bg-[#8b5727] text-white rounded-lg w-10 h-10 text-xl font-black shadow-md">
                  {featuredProject.number}
                </div>
                <span className="flex items-center gap-1.5 rounded-full bg-[#8b5727]/10 px-3 py-1 text-xs font-bold text-[#8b5727]">
                  <FiStar size={12} className="fill-[#8b5727]" />
                  {featuredProject.tag}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#111827] lg:text-3xl">{featuredProject.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#4b5563]">{featuredProject.desc}</p>

              <ul className="mt-5 space-y-3">
                {featuredProject.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-[#374151]">
                    <FiCheckCircle className="mt-0.5 flex-shrink-0 text-[#8b5727]" size={18} />
                    {pt}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {featuredProject.tech.map((t) => (
                  <span key={t} className="rounded-lg border border-[#111827]/10 bg-transparent px-3 py-1.5 text-[11px] font-semibold text-[#6b7280]">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-row flex-wrap gap-4">
                <a
                  href={featuredProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden group/btn flex items-center gap-2 rounded-full bg-[#8b5727] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#72461f] hover:shadow-lg"
                >
                  <span className="absolute inset-0 w-full h-full -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full" />
                  <FiExternalLink size={16} className="relative z-10" />
                  <span className="relative z-10">Live Demo</span>
                </a>
                <a
                  href={featuredProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden group/btn flex items-center gap-2 rounded-full border border-[#111827]/10 bg-white px-6 py-3 text-sm font-semibold text-[#111827] transition-all duration-300 hover:border-[#8b5727]/30 hover:shadow-md"
                >
                  <span className="absolute inset-0 w-full h-full -translate-x-full bg-gradient-to-r from-transparent via-[#8b5727]/10 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full" />
                  <FiGithub size={16} className="relative z-10" />
                  <span className="relative z-10">GitHub Repository</span>
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center lg:justify-end overflow-hidden rounded-[1.5rem]">
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="w-full max-w-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] object-cover transition-all duration-500 ease-out group-hover:shadow-[0_15px_50px_rgba(0,0,0,0.18)]"
              />
            </div>
          </div>
        </motion.div>

        {/* Grid: Project 02 & 03 */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {[project02, project03].map((proj, index) => (
            <motion.div
              key={proj.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease }}
              className="group flex flex-col justify-between overflow-hidden rounded-[2rem] border border-[#111827]/6 bg-white p-7 shadow-[0_4px_20px_rgba(17,24,39,0.06)] backdrop-blur transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(17,24,39,0.12)]"
            >
              {/* Top Text */}
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center bg-[#f3eee8] text-[#8b5727] rounded-lg w-10 h-10 text-lg font-black shadow-sm">
                    {proj.number}
                  </div>
                  <h3 className="text-xl font-bold text-[#111827]">{proj.title}</h3>
                </div>
                <p className="text-[13px] leading-relaxed text-[#4b5563]">{proj.desc}</p>

                <ul className="mt-5 space-y-2.5">
                  {proj.points.map((pt, pi) => (
                    <li key={pi} className="flex items-start gap-2 text-[12.5px] leading-snug text-[#374151]">
                      <FiCheckCircle className="mt-0.5 flex-shrink-0 text-[#8b5727]" size={15} />
                      <span className="flex-1">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 mb-6">
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tech.map((t) => (
                    <span key={t} className="rounded-md border border-[#111827]/10 bg-transparent px-2.5 py-1 text-[10px] font-semibold text-[#6b7280]">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-row gap-3">
                  <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="relative overflow-hidden group/btn flex items-center justify-center gap-1.5 rounded-full bg-[#8b5727] px-4 py-2 text-[13px] font-semibold text-white transition-all hover:bg-[#72461f] hover:shadow-md whitespace-nowrap">
                    <span className="absolute inset-0 w-full h-full -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full" />
                    <FiExternalLink size={14} className="relative z-10" /> <span className="relative z-10">Live Demo</span>
                  </a>
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className="relative overflow-hidden group/btn flex items-center justify-center gap-1.5 rounded-full border border-[#111827]/10 bg-white px-4 py-2 text-[13px] font-semibold text-[#111827] transition-all hover:border-[#8b5727]/30 hover:shadow-sm whitespace-nowrap">
                    <span className="absolute inset-0 w-full h-full -translate-x-full bg-gradient-to-r from-transparent via-[#8b5727]/10 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full" />
                    <FiGithub size={14} className="relative z-10" /> <span className="relative z-10">GitHub Repository</span>
                  </a>
                </div>
              </div>

              {/* Bottom Image */}
              <div className="w-full mt-auto overflow-hidden rounded-[1.25rem]">
                <img src={proj.image} alt={proj.title} className="w-full h-auto shadow-md border border-[#111827]/5 object-cover transition-all duration-500 ease-out group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project 04 - Enterprise ERP */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="group mt-8 rounded-3xl border border-[#111827]/6 bg-white/80 p-6 shadow-[0_4px_20px_rgba(17,24,39,0.06)] backdrop-blur lg:p-8 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(17,24,39,0.12)] transition-all duration-300 ease-out"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr_280px] items-center">
            {/* Left Info */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <div className="flex items-center justify-center bg-[#f3eee8] text-[#8b5727] rounded-lg w-9 h-9 text-base font-black shadow-sm">
                  {project04.number}
                </div>
                <h3 className="text-xl font-bold text-[#111827]">{project04.title}</h3>
                <span className="text-sm font-semibold text-[#6b7280]">{project04.subtitle}</span>
              </div>
              <p className="mt-1 text-sm leading-6 text-[#4b5563]">{project04.desc}</p>

              <ul className="mt-5 space-y-3">
                {project04.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-[#374151]">
                    <FiCheckCircle className="mt-0.5 flex-shrink-0 text-[#8b5727]" size={16} />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>

            {/* Middle Image */}
            <div className="flex items-center justify-center p-2 lg:p-4">
              <img src={project04.image} alt="ERP Dashboard" className="w-full max-w-[460px] rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-[#111827]/5 transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_25px_50px_rgba(0,0,0,0.18)]" />
            </div>

            {/* Right Private Box */}
            <div className="flex flex-col items-center justify-center rounded-[1.5rem] bg-[#fdfaf6] p-6 border border-[#8b5727]/10 text-center shadow-sm">
              <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center shadow-sm text-[#8b5727] border border-[#111827]/5 mb-5">
                <FiLock size={28} />
              </div>
              <h4 className="text-lg font-bold text-[#111827]">Private Project</h4>
              <p className="mt-3 text-[13px] text-[#6b7280] leading-relaxed">
                This project is proprietary and the source code is confidential.
              </p>
              <div className="w-12 h-[1px] bg-[#111827]/10 my-4"></div>
              <p className="text-[12px] text-[#6b7280]">
                Built during my internship at <br />
                <strong className="text-[#8b5727] text-[13px] tracking-wide">WEBTECHFLY</strong>.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Other Notable Projects */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="mt-12"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="h-0.5 w-8 rounded-full bg-[#8b5727]" />
            <p className="text-base font-bold text-[#111827]">Other Notable Projects</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {notableProjects.map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group rounded-2xl border border-[#111827]/6 bg-white/70 p-5 transition-all duration-300 hover:border-[#8b5727]/20 hover:shadow-lg hover:bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{p.icon}</span>
                      <h4 className="text-[13px] font-bold text-[#111827]">{p.title}</h4>
                    </div>
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-[#6b7280] transition-colors hover:text-[#8b5727]">
                      <FiGithub size={16} />
                    </a>
                  </div>
                  <p className="mt-3 text-xs leading-5 text-[#4b5563]">{p.desc}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.split('·').map((t, index) => (
                    <span key={index} className="rounded-md bg-[#f8f4ee] px-2 py-1 text-[10px] font-semibold text-[#8b5727]/80">
                      {t.trim()}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          className="mt-12 rounded-3xl bg-[#fdfaf6] border border-[#8b5727]/10 p-6 sm:px-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between shadow-sm"
        >
          <div className="flex items-start gap-4 sm:items-center">
            <span className="text-3xl hidden sm:block">🚀</span>
            <div>
              <p className="text-base font-bold text-[#111827]">I'm always building and exploring new ideas.</p>
              <p className="text-sm text-[#6b7280] mt-1">Currently exploring AI integrations and building full-stack applications.</p>
            </div>
          </div>
          <a
            href="https://github.com/avinash-kumar-101"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 whitespace-nowrap rounded-xl bg-white border border-[#111827]/10 px-5 py-3 text-sm font-bold text-[#111827] transition-all duration-300 hover:border-[#8b5727]/30 hover:shadow-md"
          >
            <FiGithub size={16} />
            View more on GitHub
            <FiExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;