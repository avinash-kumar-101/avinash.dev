import { useState, useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import {
  FiArrowRight,
  FiBookOpen,
  FiBriefcase,
  FiCode,
  FiFileText,
  FiSend,
} from "react-icons/fi";
import {
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiVercel,
} from "react-icons/si";

const phrases = [
  "AI Product Builder",
  "MERN Stack Developer",
  "React Developer",
  "Problem Solver",
];

const Typewriter = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[index];
    const typingSpeed = isDeleting ? 45 : 95;
    const delayAfterType = 2400;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < currentPhrase.length) {
          setText(currentPhrase.substring(0, text.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), delayAfterType);
        }
      } else {
        if (text.length > 0) {
          setText(currentPhrase.substring(0, text.length - 1));
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <span className="relative inline-flex min-h-[1.25em] w-[22ch] shrink-0 items-center whitespace-nowrap text-[#151515]">
      <span className="block">{text}</span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="ml-1 inline-block h-[1.15em] w-[3px] shrink-0 bg-[#8b5727]"
      />
    </span>
  );
};

function AnimatedCounter({ from = 0, to, duration = 3.5 }) {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });
  const hasNumber = /\d/.test(to);

  useEffect(() => {
    if (inView && nodeRef.current && hasNumber) {
      const parsedTo = parseInt(to.replace(/\D/g, ""));
      const suffix = to.replace(/\d/g, "");
      const controls = animate(from, parsedTo, {
        duration: duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView, hasNumber]);

  return <span ref={nodeRef}>{hasNumber ? from : to}</span>;
}

const topRowTech = [
  { label: "React", icon: SiReact, color: "text-[#16a8e3]" },
  { label: "Next.js", icon: SiNextdotjs, color: "text-black" },
  { label: "Node.js", icon: SiNodedotjs, color: "text-[#4aa43d]" },
  { label: "MongoDB", icon: SiMongodb, color: "text-[#3f9d4a]" },
  { label: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#38bdf8]" },
];

const bottomRowTech = [
  { label: "JavaScript", icon: SiJavascript, color: "text-[#f5c229]" },
  { label: "TypeScript", icon: SiTypescript, color: "text-[#3178c6]" },
  { label: "Git & GitHub", icon: SiGithub, color: "text-black" },
  { label: "Express", icon: SiExpress, color: "text-black" },
  { label: "Vercel", icon: SiVercel, color: "text-black" },
];

const stats = [
  {
    icon: FiBriefcase,
    value: "3+",
    label: "Internships",
    note: "Real-world experience",
    iconAnim: { rotate: [-15, 15, -10, 10, 0], transition: { duration: 0.5 } },
  },
  {
    icon: FiCode,
    value: "10+",
    label: "Projects",
    note: "End-to-end development",
    iconAnim: { scale: [1, 1.2, 1], transition: { duration: 0.4 } },
  },
  {
    icon: FiBookOpen,
    value: "B.Tech",
    label: "CSE",
    note: "Computer Science & Engineering",
    iconAnim: { scale: [1, 1.15, 1], opacity: [1, 0.8, 1], transition: { duration: 0.5 } },
  },
  {
    icon: FiFileText,
    value: "150+",
    label: "React Topics",
    note: "Published on LinkedIn",
    iconAnim: { rotate: [0, -15, 15, 0], transition: { duration: 0.5 } },
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#faf7f2] pb-24 lg:pb-32 text-[#111827]"
    >
      <style>
        {`
          @keyframes marqueeLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marqueeRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-marquee-left {
            animation: marqueeLeft 25s linear infinite;
          }
          .animate-marquee-right {
            animation: marqueeRight 25s linear infinite;
          }
          .pause-on-hover:hover .animate-marquee-left,
          .pause-on-hover:hover .animate-marquee-right {
            animation-play-state: paused;
          }
          .hero-portrait-blend {
            -webkit-mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 5%, rgba(0,0,0,0.42) 14%, rgba(0,0,0,0.75) 24%, rgba(0,0,0,0.92) 34%, black 46%, black 100%);
            mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 5%, rgba(0,0,0,0.42) 14%, rgba(0,0,0,0.75) 24%, rgba(0,0,0,0.92) 34%, black 46%, black 100%);
          }
        `}
      </style>

      {/* Background — smooth vertical wash, no hard stops */}
      <div className="absolute inset-0 -z-10 bg-[#faf7f2]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#faf7f2_0%,#f7f1ea_50%,#f8f4ee_100%)]" />

      <div className="relative z-10 w-full min-h-[88vh] pt-24 md:min-h-[92vh] md:pt-0">

        {/* Portrait — full-height from section top, tan bg blends under navbar */}
        <motion.figure
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="relative z-10 mx-auto flex w-full min-w-0 max-w-none items-end justify-center px-0 md:absolute md:inset-y-0 md:left-[30%] md:right-0 md:w-auto md:items-stretch md:justify-end"
        >
          <div className="hero-portrait-blend relative flex aspect-[4/5] w-full max-h-[min(72vh,760px)] items-end justify-center md:h-full md:max-h-none md:w-full md:flex-1 md:aspect-auto">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-[72%] bg-gradient-to-r from-[#faf7f2] via-[#faf7f2]/75 to-transparent md:block" />
            <img
              src="/avatar/hero-portrait.png"
              alt="Avinash Kumar"
              className="absolute inset-0 h-full w-full object-cover object-[72%_16%] md:object-[68%_24%]"
            />
          </div>
        </motion.figure>

        {/* Content Section */}
        <div className="relative grid min-h-[88vh] w-full grid-cols-1 items-center gap-y-12 pb-12 pt-24 [--hero-guide:clamp(1.25rem,4.25vw,5rem)] md:min-h-[92vh] md:grid-cols-[minmax(0,55%)_minmax(0,45%)] md:pb-12 md:pt-28 lg:pb-0 lg:pt-32">

          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="z-20 flex w-full min-w-0 max-w-[58rem] flex-col px-5 sm:px-8 md:justify-self-start md:pl-[var(--hero-guide)] md:pr-[clamp(1rem,2vw,2.5rem)]"
          >
            <motion.p variants={itemVariants} className="font-script text-5xl leading-none text-[#8b5727] sm:text-6xl">
              Hello, I'm
            </motion.p>

            <motion.h1 variants={itemVariants} className="mt-4 max-w-full whitespace-normal font-display text-[clamp(3.1rem,6.4vw,6.4rem)] font-bold leading-[0.95] tracking-normal text-[#111827] sm:whitespace-nowrap">
              <span>Avinash</span>{" "}
              <span>Kumar</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="mt-5 flex max-w-full flex-nowrap items-center gap-x-3 overflow-visible font-display text-[clamp(1.1rem,1.35vw,1.75rem)] font-semibold leading-tight text-[#151515]">
              <span className="flex min-w-0 shrink-0 flex-nowrap items-center gap-x-2 whitespace-nowrap">
                Full-Stack
                <span className="relative top-1 font-script text-[clamp(2.05rem,2.65vw,3rem)] font-normal text-[#8b5727]">
                  Developer
                </span>
                &amp;
              </span>
              <Typewriter />
            </motion.div>

            <motion.div variants={itemVariants} className="mt-6 h-[3px] w-24 rounded-full bg-[#9b642f]" />

            <motion.p variants={itemVariants} className="mt-7 max-w-[28rem] lg:max-w-[32rem] text-lg leading-8 text-[#4b5563] sm:text-xl">
              I build modern, scalable, and user-friendly web applications that solve real-world problems with elegance.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-10 flex flex-col gap-4 sm:flex-row w-full sm:w-auto">
              <a
                href="#projects"
                className="group inline-flex h-14 items-center justify-center gap-4 rounded-xl bg-[#8b5727] px-8 text-lg font-semibold text-white shadow-[0_18px_40px_rgba(139,87,39,0.25)] transition-all duration-300 ease-out hover:scale-[1.03] hover:bg-[#73451f]"
              >
                View My Work
                <FiArrowRight className="text-2xl transition-transform duration-300 ease-out group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="group inline-flex h-14 items-center justify-center gap-4 rounded-xl border border-[#8b5727] bg-white/70 backdrop-blur-sm px-8 text-lg font-semibold text-[#111827] transition-all duration-300 ease-out hover:scale-[1.03] hover:bg-white"
              >
                Let's Connect
                <FiSend className="text-2xl text-[#8b5727] transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>

        </div>

        <div className="relative z-20 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">

          {/* Technologies Marquee */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="mt-24 lg:mt-32 w-full md:max-w-[65%] lg:max-w-[55%] xl:max-w-[50%] pause-on-hover"
          >
            <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-[#5f6673] text-center lg:text-left">
              Technologies I work with
            </p>

            <div className="flex flex-col gap-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              {/* Top Row - Moves Left */}
              <div className="flex w-[200%] animate-marquee-left">
                {[...topRowTech, ...topRowTech].map((tech, i) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={`top-${tech.label}-${i}`}
                      className="group flex h-16 w-48 shrink-0 items-center justify-center gap-3 mx-3 rounded-2xl border border-[#111827]/5 bg-white/90 px-6 text-base font-semibold text-[#111827] shadow-[0_8px_20px_rgba(17,24,39,0.04)] backdrop-blur transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(17,24,39,0.08)] cursor-pointer"
                    >
                      <Icon className={`text-2xl ${tech.color} transition-transform duration-300 ease-out group-hover:scale-125 group-hover:-rotate-12`} />
                      <span>{tech.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Row - Moves Right */}
              <div className="flex w-[200%] animate-marquee-right">
                {[...bottomRowTech, ...bottomRowTech].map((tech, i) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={`bottom-${tech.label}-${i}`}
                      className="group flex h-16 w-48 shrink-0 items-center justify-center gap-3 mx-3 rounded-2xl border border-[#111827]/5 bg-white/90 px-6 text-base font-semibold text-[#111827] shadow-[0_8px_20px_rgba(17,24,39,0.04)] backdrop-blur transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(17,24,39,0.08)] cursor-pointer"
                    >
                      <Icon className={`text-2xl ${tech.color} transition-transform duration-300 ease-out group-hover:scale-125 group-hover:rotate-12`} />
                      <span>{tech.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } }
            }}
            className="mt-16 lg:mt-20 grid grid-cols-1 gap-4 md:grid-cols-2 md:max-w-[92%] lg:max-w-[70%] xl:max-w-[65%] lg:grid-cols-4 lg:gap-5"
          >
            {stats.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  whileHover="hover"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
                    hover: { y: -6, scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }
                  }}
                  className="group flex flex-col rounded-2xl border border-white/60 bg-white/70 px-5 py-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-colors duration-300 ease-out hover:border-white hover:bg-white/90 hover:shadow-[0_14px_40px_rgba(0,0,0,0.1)]"
                >
                  <div className="flex items-center gap-4 w-full">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f3eee8] to-[#e8ddd0] shadow-inner text-[#8b5727]">
                      <motion.div
                        variants={{
                          visible: { rotate: 0, scale: 1 },
                          hover: item.iconAnim
                        }}
                      >
                        <Icon className="text-[1.2rem]" />
                      </motion.div>
                    </div>
                    <p className="font-display text-[1.65rem] font-bold leading-none text-[#080b12]">
                      <AnimatedCounter to={item.value} />
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm font-bold tracking-wide text-[#374151]">
                      {item.label}
                    </p>
                    <p className="mt-1 text-xs font-medium text-[#6b7280]">{item.note}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

      </div>

      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-[#f8f4ee]" />
    </section>
  );
};

export default Hero;
