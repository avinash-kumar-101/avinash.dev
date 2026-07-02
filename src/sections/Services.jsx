import { useState, useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { createPortal } from "react-dom";
import { SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiExpress, SiJsonwebtokens, SiPostgresql, SiRedis, SiTailwindcss, SiFramer, SiShadcnui, SiOpenai, SiGooglegemini, SiLangchain } from "react-icons/si";
import { FaBrain } from "react-icons/fa";

const techData = {
  "React": { icon: SiReact, url: "https://react.dev", label: "Visit React Documentation ↗" },
  "Next.js": { icon: SiNextdotjs, url: "https://nextjs.org/docs", label: "Visit Next.js Documentation ↗" },
  "Node.js": { icon: SiNodedotjs, url: "https://nodejs.org/docs", label: "Visit Node.js Documentation ↗" },
  "MongoDB": { icon: SiMongodb, url: "https://www.mongodb.com/docs", label: "Visit MongoDB Documentation ↗" },
  "Express.js": { icon: SiExpress, url: "https://expressjs.com", label: "Visit Express.js Documentation ↗" },
  "JWT": { icon: SiJsonwebtokens, url: "https://jwt.io", label: "Visit JWT Documentation ↗" },
  "PostgreSQL": { icon: SiPostgresql, url: "https://www.postgresql.org/docs/", label: "Visit PostgreSQL Documentation ↗" },
  "Redis": { icon: SiRedis, url: "https://redis.io/docs", label: "Visit Redis Documentation ↗" },
  "Tailwind CSS": { icon: SiTailwindcss, url: "https://tailwindcss.com/docs", label: "Visit Tailwind CSS Documentation ↗" },
  "Framer Motion": { icon: SiFramer, url: "https://motion.dev", label: "Visit Framer Motion Documentation ↗" },
  "Shadcn UI": { icon: SiShadcnui, url: "https://ui.shadcn.com", label: "Visit Shadcn UI Documentation ↗" },
  "OpenAI": { icon: SiOpenai, url: "https://platform.openai.com/docs", label: "Visit OpenAI Documentation ↗" },
  "Gemini": { icon: SiGooglegemini, url: "https://ai.google.dev", label: "Visit Gemini Documentation ↗" },
  "LangChain": { icon: SiLangchain, url: "https://docs.langchain.com", label: "Visit LangChain Documentation ↗" },
  "AI": { icon: FaBrain, url: "https://ai.google.dev", label: "Visit AI Documentation ↗" },
};

const TooltipPortal = ({ children, x, y }) => {
  const [position, setPosition] = useState({ top: y + 15, left: x + 15 });
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const padding = 12;
      let newTop = y + 15;
      let newLeft = x + 15;
      
      if (newLeft + rect.width > window.innerWidth - padding) {
        newLeft = window.innerWidth - rect.width - padding;
      }
      if (newTop + rect.height > window.innerHeight - padding) {
        newTop = y - rect.height - 10;
      }
      
      setPosition({ top: newTop, left: newLeft });
    }
  }, [x, y]);

  return createPortal(
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 4, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 4, scale: 0.95 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className="fixed z-[10000] pointer-events-none rounded-lg bg-white/90 backdrop-blur-xl px-3 py-2 text-[11px] font-semibold text-gray-800 shadow-[0_4px_24px_rgba(0,0,0,0.12)] border border-[#111827]/5 flex items-center justify-center"
      style={{ top: position.top, left: position.left }}
    >
      {children}
    </motion.div>,
    document.body
  );
};

const TechPill = ({ t }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [ripple, setRipple] = useState(null);
  const hoverTimeout = useRef(null);

  const handleMouseEnter = (e) => {
    hoverTimeout.current = setTimeout(() => {
      setIsHovered(true);
      setMousePos({ x: e.clientX, y: e.clientY });
    }, 150);
  };

  const handleMouseMove = (e) => {
    if (isHovered) {
      setMousePos({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout.current);
    setIsHovered(false);
  };

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    setRipple({ x, y, size, id: Date.now() });
    
    setTimeout(() => {
      setRipple(null);
    }, 300);
  };

  const data = techData[t];
  const Icon = data?.icon;
  const url = data?.url;
  const label = data?.label;

  return (
    <>
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="group/pill relative overflow-hidden flex flex-shrink-0 items-center gap-1.5 rounded-full border border-[#111827]/8 bg-[#f8f4ee] px-2 py-0.5 font-medium text-[#4b5563] z-10 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5727] focus-visible:ring-offset-2 hover:border-[#8b5727]/30"
        style={{ transition: 'border-color 220ms ease-out' }}
        whileHover={{ scale: 1.02, y: -2, boxShadow: "0 6px 16px rgba(139,87,39,0.15)" }}
        whileTap={{ scale: 0.98 }}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        onFocus={(e) => {
          const rect = e.target.getBoundingClientRect();
          setMousePos({ x: rect.left + rect.width / 2, y: rect.bottom });
          setIsHovered(true);
        }}
        onBlur={() => setIsHovered(false)}
        transition={{ duration: 0.22, ease: "easeOut" }}
      >
        <div
          className="absolute inset-0 bg-[#8b5727] opacity-0 group-hover/pill:opacity-100"
          style={{ transition: 'opacity 220ms ease-out' }}
        />
        
        {/* Ripple */}
        <AnimatePresence>
          {ripple && (
            <motion.span
              key={ripple.id}
              initial={{ scale: 0, opacity: 0.3 }}
              animate={{ scale: 2.5, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute rounded-full bg-white pointer-events-none"
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
              }}
            />
          )}
        </AnimatePresence>

        {Icon && (
          <span className="flex items-center justify-center relative z-10 text-[11px] group-hover/pill:text-white" style={{ transition: 'color 220ms ease-out' }}>
            <Icon />
          </span>
        )}
        
        <span className="relative z-10 text-[10px] group-hover/pill:text-white pb-[1px]" style={{ transition: 'color 220ms ease-out' }}>
          {t}
        </span>
      </motion.a>

      <AnimatePresence>
        {isHovered && label && (
          <TooltipPortal x={mousePos.x} y={mousePos.y}>
            <div className="flex items-center gap-1.5">
              {label}
            </div>
          </TooltipPortal>
        )}
      </AnimatePresence>
    </>
  );
};

const ease = [0.16, 1, 0.3, 1];

const services = [
  {
    icon: "</>",
    title: "Full-Stack Web Development",
    desc: "Building modern, scalable, and high-performance web applications using the MERN stack and Next.js.",
    tech: ["React", "Next.js", "Node.js", "MongoDB"],
    imagePath: "/services/Web Development.png",
  },
  {
    icon: "🤖",
    title: "AI Integrations",
    desc: "Integrating AI models like OpenAI and Gemini to build intelligent features, chatbots, and automation solutions.",
    tech: ["OpenAI", "Gemini", "LangChain", "AI"],
    imagePath: "/services/AI Integrations.png",
  },
  {
    icon: "{}",
    title: "REST API Development",
    desc: "Designing secure, efficient, and well-documented REST APIs with authentication and database integration.",
    tech: ["Express.js", "JWT", "PostgreSQL", "Redis"],
    imagePath: "/services/API Development.png",
  },
  {
    icon: "📱",
    title: "Responsive UI Development",
    desc: "Crafting clean, responsive, and accessible user interfaces using Tailwind CSS and modern UI principles.",
    tech: ["Tailwind CSS", "Framer Motion", "Shadcn UI"],
    imagePath: "/services/Responsive UI Development.png",
  },
];

const TypingEffect = () => {
  const [text, setText] = useState("");
  const fullText = "Ask anything...";

  useEffect(() => {
    let i = 0;
    let isDeleting = false;
    let timer;

    const loop = () => {
      if (!isDeleting && i <= fullText.length) {
        setText(fullText.substring(0, i));
        if (i === fullText.length) {
          isDeleting = true;
          timer = setTimeout(loop, 2000);
        } else {
          i++;
          timer = setTimeout(loop, 100);
        }
      } else if (isDeleting && i >= 0) {
        setText(fullText.substring(0, i));
        if (i === 0) {
          isDeleting = false;
          timer = setTimeout(loop, 500);
        } else {
          i--;
          timer = setTimeout(loop, 50);
        }
      }
    };
    timer = setTimeout(loop, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <span className="text-gray-400 font-medium text-[12px] truncate">
      {text || "Ask..."}
      <span className="animate-pulse text-[#8b5cf6] font-bold ml-px">|</span>
    </span>
  );
};

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const isAIBrain = service.title === "AI Integrations";
  const isLaptop = service.title === "Responsive UI Development";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      whileHover="hover"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex gap-4 rounded-[1.25rem] border border-[#111827]/6 bg-white/90 p-4 shadow-[0_4px_20px_rgba(17,24,39,0.06)] backdrop-blur transition-all duration-300 lg:p-5 overflow-hidden"
      variants={{
        hover: {
          y: -6,
          scale: 1.015,
          boxShadow: "0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px rgba(249,115,22,0.4)"
        }
      }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[1.25rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(249, 115, 22, 0.08),
              transparent 80%
            )
          `,
        }}
      />

      {/* Image preview */}
      <div className="hidden w-[40%] flex-shrink-0 overflow-hidden rounded-xl sm:block bg-[#f8f4ee] relative z-10">
        <motion.img
          src={service.imagePath}
          alt={service.title}
          className="h-full w-full object-cover object-center"
          variants={{
            hover: { scale: 1.05 }
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{ imageRendering: "high-quality" }}
        />

        {/* AI Brain Particles */}
        {isAIBrain && (
          <div className="absolute inset-0 pointer-events-none z-10">
            {/* Soft pulse */}
            <motion.div
              className="absolute inset-0 bg-blue-500/10"
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Glowing particles */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(96,165,250,0.8)]"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`
                }}
                animate={{
                  y: [-10, 10, -10],
                  opacity: [0.2, 1, 0.2]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>
        )}

        {/* Shiny Sweep Effect - Applied to all 4 cards on hover */}
        {isHovered && (
          <motion.div
            className="absolute top-0 bottom-0 z-20 w-[120%] bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[20deg] pointer-events-none"
            initial={{ x: "-120%" }}
            animate={{ x: "150%" }}
            transition={{ 
              duration: 1.8, 
              ease: "easeInOut", 
              repeat: Infinity, 
              repeatDelay: 1 
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 py-1 relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#111827]/8 bg-[#f8f4ee]">
            <span className="text-base font-bold text-[#8b5727]">{service.icon}</span>
          </div>
          <h3 className="text-[1.05rem] font-bold leading-tight text-[#111827]">{service.title}</h3>
        </div>

        <p className="text-[0.85rem] leading-6 text-[#4b5563] flex-1">{service.desc}</p>

        <div 
          className="tech-pill-container mt-1 pt-3 flex flex-nowrap overflow-x-auto gap-1.5 pb-4 -mb-3 px-1 -mx-1 relative z-20"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style dangerouslySetInnerHTML={{ __html: `
            .tech-pill-container::-webkit-scrollbar { display: none; }
          `}} />
          {service.tech.map((t) => (
            <TechPill key={t} t={t} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative isolate -mx-4 scroll-mt-24 overflow-hidden bg-[#f8f4ee] px-5 pt-20 pb-24 text-[#111827] sm:-mx-6 sm:px-8 lg:left-1/2 lg:mx-0 lg:w-screen lg:-translate-x-1/2 lg:px-10 lg:pt-28 lg:pb-32 xl:px-12"
    >
      {/* Subtle Breathing Radial Background */}
      <motion.div
        className="absolute inset-0 -z-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, #8b5727 0%, transparent 65%)",
          transformOrigin: "center center"
        }}
        animate={
          shouldReduceMotion
            ? { opacity: 0.08, scale: 1 }
            : {
                opacity: [0.08, 0.12, 0.08],
                scale: [1, 1.02, 1],
              }
        }
        transition={{
          duration: 15,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.95),transparent_35%),linear-gradient(135deg,#fffdf9_0%,#f7efe6_52%,#eadbc9_100%)] opacity-80" />
      <div className="absolute inset-x-0 top-0 -z-10 h-48 bg-gradient-to-b from-[#f8f4ee] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-b from-transparent to-[#f8f4ee]" />

      {/* Dot pattern top right */}
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.2, 0.6] }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute right-8 top-16 -z-10 grid grid-cols-5 gap-3 text-[#8b5727]/25 lg:right-24"
      >
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-current" />
        ))}
      </motion.div>

      {/* Plus sparkles */}
      {[[10, 40], [85, 25], [20, 70], [75, 60]].map(([x, y], i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          animate={{ opacity: [0.2, 0.7, 0.2], scale: [1, 1.2, 1] }}
          transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          className="absolute text-lg text-[#8b5727]/30 pointer-events-none select-none"
          style={{ left: `${x}%`, top: `${y}%` }}
        >
          ✦
        </motion.span>
      ))}

      <div className="relative z-10 mx-auto max-w-[1240px]">
        {/* Header row */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center lg:gap-12">
          {/* Left: Title */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
              className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8b5727]"
            >
              - Services
            </motion.p>

            <h2 className="font-display text-5xl font-bold leading-[0.95] tracking-normal text-[#111827] sm:text-6xl lg:text-[3.25rem] xl:text-[3.65rem]">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                className="block"
              >
                What I
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
                className="relative mt-1 block w-fit font-script text-[4rem] font-normal leading-none text-[#8b5727] sm:text-[5rem] lg:text-[4.5rem] xl:text-[5rem]"
              >
                Build.
                <svg
                  viewBox="0 0 150 30"
                  className="absolute -bottom-2 left-0 h-6 w-[90%] text-[#8b5727]"
                  fill="none"
                  aria-hidden="true"
                >
                  <motion.path
                    d="M3 21C35 13 65 10 90 11C118 12 133 16 147 5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 1.6, ease: "easeInOut", delay: 0.5 }}
                  />
                </svg>
              </motion.span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="mt-5 max-w-sm text-sm leading-6 text-[#4b5563] sm:text-base sm:leading-7"
            >
              I turn ideas into modern, scalable and intelligent digital solutions that create real impact.
            </motion.p>
          </div>

          {/* Right: Floating images – precision reference composition */}
          <div className="hidden lg:block relative w-full" style={{ height: "460px" }}>
            {/* ── Soft radial glow — behind dashboard only ── */}
            <div
              className="pointer-events-none absolute"
              style={{
                top: "30%", left: "10%",
                width: "55%", height: "55%",
                background: "radial-gradient(ellipse at center, rgba(139,87,39,0.12) 0%, transparent 68%)",
                zIndex: 0,
              }}
            />

            {/* ── Connector lines + animated dots + sparkles ── */}
            <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 5 }}>
              <svg className="absolute w-full h-full" viewBox="0 0 700 460" preserveAspectRatio="none">
                {/* Line 1: Left sparkle → AI Assistant left edge (curved down-right) */}
                <path d="M 10 70 C 40 100, 100 130, 190 145" fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.55" />
                {/* Line 2: AI Assistant right → Mockup left */}
                <path d="M 430 155 C 480 145, 520 130, 570 125" fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.55" />
                {/* Line 3: Dashboard bottom-right → Mockup bottom-left */}
                <path d="M 430 340 C 490 320, 530 290, 570 270" fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.55" />

                {/* Animated traveling dots */}
                <circle r="4" fill="#f97316" style={{ filter: "drop-shadow(0 0 5px rgba(249,115,22,0.9))" }}>
                  <animateMotion dur="3s" repeatCount="indefinite" path="M 10 70 C 40 100, 100 130, 190 145" />
                </circle>
                <circle r="4" fill="#f97316" style={{ filter: "drop-shadow(0 0 5px rgba(249,115,22,0.9))" }}>
                  <animateMotion dur="2.5s" repeatCount="indefinite" begin="0.8s" path="M 430 155 C 480 145, 520 130, 570 125" />
                </circle>
                <circle r="4" fill="#f97316" style={{ filter: "drop-shadow(0 0 5px rgba(249,115,22,0.9))" }}>
                  <animateMotion dur="3.2s" repeatCount="indefinite" begin="0.4s" path="M 430 340 C 490 320, 530 290, 570 270" />
                </circle>
              </svg>

              {/* ✦ Left sparkle — at top-left, matching the SVG line start */}
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5], scale: [0.85, 1.25, 0.85] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute select-none text-[#c0521a]"
                style={{ top: "12%", left: "-2%", fontSize: "26px" }}
              >✦</motion.span>

              {/* ✦ Right sparkle — between AI Assistant and mockup */}
              <motion.span
                animate={{ opacity: [0.4, 1, 0.4], scale: [0.85, 1.2, 0.85] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="pointer-events-none absolute select-none text-[#f97316]"
                style={{ top: "20%", left: "64%", fontSize: "18px" }}
              >✦</motion.span>
            </div>

            {/* ═══ 1. AI Assistant (Secondary) — top-left, z-40 ═══ */}
            <motion.div
              animate={{ y: [-8, 8, -8], rotate: [-2, 0, -2] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: "-1%",
                left: "10%",
                width: "340px",
                zIndex: 40,
              }}
              className="rounded-[20px] border border-white/80 bg-white/95 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] p-3.5 flex flex-col gap-3"
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-700 shadow-[0_0_15px_rgba(139,92,246,0.5)] text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="4" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" /></svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[14px] font-bold text-gray-900 tracking-wide leading-tight">AI Assistant</span>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.5)]"></div>
                      <span className="text-[10px] font-semibold text-gray-500">Online</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-1 pr-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-gray-300"></div>
                  <div className="h-1.5 w-1.5 rounded-full bg-gray-300"></div>
                  <div className="h-1.5 w-1.5 rounded-full bg-gray-300"></div>
                </div>
              </div>

              {/* Message */}
              <div className="rounded-2xl rounded-tl-sm bg-[#F8F9FA] border border-gray-100 px-4 py-3 text-[12px] leading-relaxed text-gray-700 shadow-sm font-medium">
                Hello Avinash!{" "}
                <motion.span
                  animate={{ rotate: [0, -12, 10, -6, 0] }}
                  transition={{
                    duration: 0.9,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 7,
                  }}
                  style={{ display: "inline-block", transformOrigin: "70% 70%" }}
                >
                  👋
                </motion.span>
                <br />
                How can I help you today?
              </div>

              {/* Input */}
              <div className="flex items-center justify-between rounded-2xl rounded-bl-sm border border-gray-200 bg-white pl-4 pr-1.5 py-1.5 shadow-sm mt-0.5">
                <span className="text-gray-400 text-[12px]"><TypingEffect /></span>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-600 text-white shadow-sm cursor-pointer hover:bg-violet-500 transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </div>
              </div>
            </motion.div>

            {/* ═══ 2. Dashboard (Main Focus) — center-left, z-30 ═══ */}
            <motion.div
              animate={{ y: [4, -4, 4], rotate: [0, 2, 0] }}
              transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: "35%",
                left: "-5%",
                width: "480px",
                zIndex: 30,
              }}
              className="flex h-[260px] overflow-hidden rounded-[20px] border border-gray-100 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.06)]"
            >
              {/* Sidebar */}
              <div className="flex w-[56px] flex-col items-center gap-4 bg-white py-4 border-r border-gray-100">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-900 text-white font-bold text-sm mb-2">
                  A
                </div>

                <div className="flex flex-col items-center gap-1 p-2 rounded-xl bg-[#8B5E34] text-white shadow-sm cursor-pointer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                </div>

                <div className="flex flex-col items-center gap-1 p-2 rounded-xl text-gray-400 hover:text-gray-600 cursor-pointer transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                </div>

                <div className="flex flex-col items-center gap-1 p-2 rounded-xl text-gray-400 hover:text-gray-600 cursor-pointer transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                </div>

                <div className="flex flex-col items-center gap-1 p-2 rounded-xl text-gray-400 hover:text-gray-600 cursor-pointer transition-colors mt-auto">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex flex-1 flex-col p-5 bg-[#F8F9FB]">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-[16px] font-bold text-gray-900 tracking-tight">Dashboard</h4>
                  <div className="flex h-6 w-6 items-center justify-center rounded border border-gray-200 bg-white cursor-pointer hover:bg-gray-50 transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600"><circle cx="12" cy="12" r="1.5" /><circle cx="19" cy="12" r="1.5" /><circle cx="5" cy="12" r="1.5" /></svg>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {/* Card 1 */}
                  <div className="rounded-[12px] border border-gray-100 bg-white p-3 shadow-sm flex flex-col gap-0.5">
                    <span className="text-[10px] font-semibold text-gray-500 leading-none">Total Users</span>
                    <span className="text-[18px] font-extrabold text-gray-900 leading-none tracking-tight">12.4K</span>
                    <div className="flex items-center text-[10px] font-bold text-violet-600 mt-1">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
                      <span>12.5%</span>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="rounded-[12px] border border-gray-100 bg-white p-3 shadow-sm flex flex-col gap-0.5">
                    <span className="text-[10px] font-semibold text-gray-500 leading-none">Revenue</span>
                    <span className="text-[18px] font-extrabold text-gray-900 leading-none tracking-tight">$48.2K</span>
                    <div className="flex items-center text-[10px] font-bold text-rose-500 mt-1">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7" /><polyline points="16 17 22 17 22 11" /></svg>
                      <span>8.1%</span>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="rounded-[12px] border border-gray-100 bg-white p-3 shadow-sm flex flex-col gap-0.5">
                    <span className="text-[10px] font-semibold text-gray-500 leading-none">Orders</span>
                    <span className="text-[18px] font-extrabold text-gray-900 leading-none tracking-tight">1.2K</span>
                    <div className="flex items-center text-[10px] font-bold text-emerald-500 mt-1">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
                      <span>15.9%</span>
                    </div>
                  </div>
                </div>

                {/* Chart Area */}
                <div className="flex-1 rounded-xl border border-gray-100 bg-white p-3 shadow-sm relative overflow-hidden flex flex-col justify-between">
                  <div className="flex items-center justify-between z-10 relative">
                    <h5 className="text-[11px] font-bold text-gray-800">Analytics Overview</h5>
                    <div className="flex items-center gap-1 rounded-md border border-gray-200 px-2 py-1 text-[9px] font-medium text-gray-600 cursor-pointer hover:bg-gray-50 bg-white">
                      This Month
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                    </div>
                  </div>

                  {/* Chart Graphic */}
                  <div className="absolute bottom-6 left-0 right-0 h-[60px] pointer-events-none">
                    <svg viewBox="0 0 400 80" className="h-full w-full" preserveAspectRatio="none" style={{ overflow: "visible" }}>
                      <defs>
                        <linearGradient id="chartGlowPremium" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      
                      {/* Graph Area Fill */}
                      <motion.path 
                        d="M0,60 C40,30 60,60 100,50 C140,40 160,80 200,30 C240,-10 260,60 300,50 C340,40 360,10 400,20 L400,80 L0,80 Z" 
                        fill="url(#chartGlowPremium)" 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.3, ease: "easeOut" }}
                      />
                      
                      {/* Graph Line */}
                      <motion.path 
                        d="M0,60 C40,30 60,60 100,50 C140,40 160,80 200,30 C240,-10 260,60 300,50 C340,40 360,10 400,20" 
                        fill="none" 
                        stroke="#8b5cf6" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.3, ease: "easeOut" }}
                      />

                      {/* Subtle Highlight Sweep */}
                      <motion.path 
                        d="M0,60 C40,30 60,60 100,50 C140,40 160,80 200,30 C240,-10 260,60 300,50 C340,40 360,10 400,20" 
                        fill="none" 
                        stroke="#fff7ed" 
                        strokeWidth="4" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        initial={{ pathLength: 0.1, pathOffset: 0, opacity: 0 }}
                        whileInView={{
                          pathOffset: [0, 1],
                          opacity: [0, 0.6, 0.6, 0]
                        }}
                        viewport={{ once: true }}
                        transition={{
                          pathOffset: { duration: 1, ease: "linear", repeat: Infinity, repeatDelay: 7, delay: 2 },
                          opacity: { duration: 1, times: [0, 0.1, 0.9, 1], ease: "linear", repeat: Infinity, repeatDelay: 7, delay: 2 }
                        }}
                        style={{ filter: "blur(1.5px)" }}
                      />

                      {/* Dots on line */}
                      <motion.circle cx="100" cy="50" r="3.5" fill="white" stroke="#8b5cf6" strokeWidth="2"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 1.3, ease: "easeOut" }}
                        style={{ transformOrigin: "100px 50px" }}
                      />
                      <motion.circle cx="200" cy="30" r="3.5" fill="white" stroke="#8b5cf6" strokeWidth="2"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 1.35, ease: "easeOut" }}
                        style={{ transformOrigin: "200px 30px" }}
                      />
                      <motion.circle cx="300" cy="50" r="3.5" fill="white" stroke="#8b5cf6" strokeWidth="2"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 1.4, ease: "easeOut" }}
                        style={{ transformOrigin: "300px 50px" }}
                      />
                      
                      {/* Last dot (latest data) - Base */}
                      <motion.circle cx="400" cy="20" r="3.5" fill="white" stroke="#8b5cf6" strokeWidth="2"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 1.45, ease: "easeOut" }}
                        style={{ transformOrigin: "400px 20px" }}
                      />
                      
                      {/* Last dot (latest data) - Pulsing Overlay */}
                      <motion.circle cx="400" cy="20" r="3.5" fill="white" stroke="#8b5cf6" strokeWidth="2"
                        initial={{ opacity: 0, scale: 1 }}
                        whileInView={{ opacity: [0, 0.75, 1, 0.75], scale: [1, 1, 1.2, 1] }}
                        viewport={{ once: true }}
                        transition={{
                          opacity: { duration: 2.5, delay: 1.45, repeat: Infinity, ease: "easeInOut", times: [0, 0.16, 0.58, 1] },
                          scale: { duration: 2.5, delay: 1.45, repeat: Infinity, ease: "easeInOut", times: [0, 0.16, 0.58, 1] }
                        }}
                        style={{ transformOrigin: "400px 20px" }}
                      />
                    </svg>
                  </div>

                  {/* X Axis Labels */}
                  <div className="flex justify-between px-3 text-[9px] font-medium text-gray-400 z-10 relative mt-auto pt-3 border-t border-gray-50">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ═══ 3. Device Mockup (Third) — right side, z-10 ═══ */}
            <motion.div
              animate={{ y: [-6, 6, -6], rotate: [-2, 2, -2] }}
              transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              style={{
                position: "absolute",
                top: "12%",
                right: "-2%",
                width: "38%",
                zIndex: 10,
              }}
              className="rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.08)]"
            >
              <img
                src="/services/Responsive UI Development.png"
                alt="Responsive UI Devices"
                className="w-full h-auto object-cover block"
              />
            </motion.div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="mt-16 flex flex-col items-center justify-between rounded-[2rem] bg-[#fdfaf6] border border-[#f3eee8] px-8 py-6 lg:flex-row lg:px-10"
        >
          {/* Left: Icon */}
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#4a2b16] to-[#361e0e] shadow-[0_4px_12px_rgba(74,43,22,0.2)]">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3L14.5 9.5L21 12L14.5 14.5L12 21L9.5 14.5L3 12L9.5 9.5L12 3Z" stroke="#fdfaf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Vertical Divider 1 */}
          <div className="hidden lg:block h-14 w-px bg-[#f0e6da] mx-8 flex-shrink-0" />

          {/* Center: Heading */}
          <div className="flex flex-col flex-shrink-0 mt-6 lg:mt-0 text-center lg:text-left">
            <p className="text-[1.35rem] font-bold text-[#111827] leading-tight font-display tracking-tight">
              Let's build something
            </p>
            <span className="font-script text-[2.5rem] font-normal text-[#c0521a] leading-none mt-0 block">meaningful together.</span>
          </div>

          {/* Vertical Divider 2 */}
          <div className="hidden lg:block h-14 w-px bg-[#f0e6da] mx-8 flex-shrink-0" />

          {/* Right: Description + Button */}
          <div className="flex flex-col items-center lg:flex-row flex-1 justify-between gap-6 mt-6 lg:mt-0">
            <p className="text-[13px] leading-relaxed text-[#6b7280] max-w-[280px] text-center lg:text-left font-medium">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great.
            </p>
            <motion.a
              href="#contact"
              whileHover="hover"
              initial="idle"
              variants={{
                idle: { y: 0, boxShadow: "0 4px 6px rgba(0,0,0,0.12)" },
                hover: { y: -2, boxShadow: "0 10px 20px rgba(61,36,16,0.3)" }
              }}
              className="relative overflow-hidden flex flex-shrink-0 items-center gap-2 rounded-xl bg-[#3d2410] px-6 py-3 text-sm font-bold text-white transition-colors duration-300 hover:bg-[#2e1a0c] whitespace-nowrap"
            >
              <motion.div
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                animate={{ translateX: ["-100%", "200%"] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
              />
              <span className="relative z-10">Let's Connect</span>
              <motion.div
                className="relative z-10"
                variants={{ idle: { x: 0 }, hover: { x: 4 } }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <FiArrowRight size={16} />
              </motion.div>
            </motion.a>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Services;
