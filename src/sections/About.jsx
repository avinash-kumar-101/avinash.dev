import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiBookOpen, FiCode, FiCpu, FiZap, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import AboutStoryCards from "../components/ui/AboutStoryCards";

const storyData = [
  {
    label: "ABOUT ME",
    words: ["Curious,", "Consistent,", "Builder."],
    highlightIndex: 2,
    smallEyebrow: "Turning curiosity into meaningful digital experiences.",
    paragraphs: [
      <span key="p1">
        I'm <span className="font-semibold text-[#8b5727]">Avinash Kumar</span>, a <span className="font-semibold text-[#8b5727]">Full-Stack Developer</span> who enjoys transforming ideas into <span className="font-semibold text-[#8b5727]">modern</span>, user-focused <span className="font-semibold text-[#8b5727]">digital products</span>. Every project is an opportunity to learn, build with purpose and create <span className="font-semibold text-[#8b5727]">meaningful experiences</span>.
      </span>
    ]
  },
  {
    label: "MY PROCESS",
    words: ["Think,", "Plan,", "Design."],
    highlightIndex: 2,
    smallEyebrow: "Every great product begins with thoughtful planning.",
    paragraphs: [
      <span key="p1">
        I believe every successful product starts with understanding the problem, designing a <span className="font-semibold text-[#8b5727]">scalable architecture</span>, selecting the right <span className="font-semibold text-[#8b5727]">technology stack</span>, and creating an intuitive <span className="font-semibold text-[#8b5727]">user experience</span> before writing a single line of code.
      </span>
    ]
  },
  {
    label: "DEVELOPMENT",
    words: ["Code,", "Build,", "Ship."],
    highlightIndex: 2,
    smallEyebrow: "Crafting scalable solutions with clean, modern code.",
    paragraphs: [
      <span key="p1">
        I build <span className="font-semibold text-[#8b5727]">responsive</span>, <span className="font-semibold text-[#8b5727]">full-stack applications</span> using <span className="font-semibold text-[#8b5727]">React</span>, <span className="font-semibold text-[#8b5727]">Next.js</span>, <span className="font-semibold text-[#8b5727]">Node.js</span>, Express.js and <span className="font-semibold text-[#8b5727]">MongoDB</span>, with a strong focus on clean architecture, performance and reusable components.
      </span>
    ]
  },
  {
    label: "CONTINUOUS LEARNING",
    words: ["Learn,", "Adapt,", "Grow."],
    highlightIndex: 2,
    smallEyebrow: "Learning today. Building better tomorrow.",
    paragraphs: [
      <span key="p1">
        I continuously explore <span className="font-semibold text-[#8b5727]">AI tools</span>, modern frameworks and better <span className="font-semibold text-[#8b5727]">development practices</span> to build <span className="font-semibold text-[#8b5727]">smarter products</span>, improve my skills and stay ready for the next challenge.
      </span>
    ]
  }
];

const features = [
  {
    title: "Build",
    text: "I build modern, responsive and user-friendly web applications.",
    icon: FiCode,
  },
  {
    title: "Solve",
    text: "I love solving real-world problems with clean and efficient code.",
    icon: FiCpu,
  },
  {
    title: "Learn",
    text: "I'm always learning new technologies and improving my skills.",
    icon: FiBookOpen,
  },
  {
    title: "Explore",
    text: "I explore AI tools and automation to build smarter solutions.",
    icon: FiZap,
  },
];

const ease = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease },
  }),
};

const About = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleCardChange = (idx) => {
    setActiveCard(idx);
    if (!hasInteracted) setHasInteracted(true);
  };

  return (
    <section
      id="about"
      className="relative isolate -mx-4 scroll-mt-24 overflow-hidden bg-[#f8f4ee] px-5 pt-20 pb-24 text-[#111827] sm:-mx-6 sm:px-8 lg:left-1/2 lg:mx-0 lg:w-screen lg:-translate-x-1/2 lg:px-10 lg:pt-28 lg:pb-32 xl:px-12"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.98),transparent_30%),linear-gradient(135deg,#f8f4ee_0%,#f7efe6_50%,#f8f4ee_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-48 bg-gradient-to-b from-[#f8f4ee] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-b from-transparent to-[#f8f4ee]" />



      <div className="relative z-10 mx-auto max-w-[1240px]">
        <div className="grid items-start gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12 xl:gap-16">
          <div className="relative z-10">
            <div className="relative">
              {/* Ghost element for sizing (Card 1 content) */}
              <div className="invisible pointer-events-none" aria-hidden="true">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#8b5727] lg:text-sm flex items-center gap-3">
                  <span>01 / 04</span>
                  <span>-</span>
                  <span>ABOUT ME</span>
                </p>
                <h2 className="font-display text-5xl font-bold leading-[0.95] tracking-normal text-[#111827] sm:text-6xl lg:text-[3.25rem] xl:text-[3.65rem]">
                  <span className="block">Curious,</span>
                  <span className="block">Consistent,</span>
                  <span className="relative mt-1 block w-fit">
                    <span className="font-script text-[4.6rem] font-normal leading-none text-[#8b5727] sm:text-[5.8rem] lg:text-[4.55rem] xl:text-[4.95rem]">
                      Builder.
                    </span>
                  </span>
                </h2>
                <p className="mt-6 text-lg font-medium text-[#111827] sm:text-xl lg:text-lg">
                  Turning curiosity into meaningful digital experiences.
                </p>
                <div className="mt-4 max-w-[34rem] space-y-4 text-base leading-7 text-[#4b5563] sm:text-lg sm:leading-8 lg:max-w-[31rem] lg:text-sm lg:leading-6 xl:text-[0.95rem] xl:leading-7">
                  <p>
                    I'm Avinash Kumar, a Full-Stack Developer who enjoys transforming ideas into modern,
                    user-focused digital products. Every project is an opportunity to learn, build with purpose and create meaningful experiences.
                  </p>
                </div>
              </div>

              {/* Animated Content */}
              <div className="absolute inset-x-0 top-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCard}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    viewport={{ once: true, margin: "50px" }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { duration: 0.54, ease: "easeInOut" } },
                      exit: { opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }
                    }}
                    className="absolute inset-x-0 top-0 flex flex-col"
                  >
                    <motion.p
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { duration: 0.54, ease: "easeInOut" } }
                      }}
                      className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#8b5727] lg:text-sm flex items-center gap-3"
                    >
                      <span>{`0${activeCard + 1} / 04`}</span>
                      <span>-</span>
                      <span>{storyData[activeCard].label}</span>
                    </motion.p>

                    <h2 className="font-display text-5xl font-bold leading-[0.95] tracking-normal text-[#111827] sm:text-6xl lg:text-[3.25rem] xl:text-[3.65rem]">
                      {storyData[activeCard].words.map((word, index) => {
                        const isHighlight = index === storyData[activeCard].highlightIndex;
                        return (
                          <motion.span
                            key={`${activeCard}-${word}`}
                            variants={{
                              hidden: { opacity: 0, y: 20 },
                              visible: { opacity: 1, y: 0, transition: { duration: 0.54, delay: 0.06 + index * 0.1, ease: "easeInOut" } }
                            }}
                            className={isHighlight ? "relative mt-1 block w-fit" : "block"}
                          >
                            {isHighlight ? (
                              <>
                                <span className="font-script text-[4.6rem] font-normal leading-none text-[#8b5727] sm:text-[5.8rem] lg:text-[4.55rem] xl:text-[4.95rem]">
                                  {word}
                                </span>
                                <svg
                                  viewBox="0 0 250 34"
                                  className="absolute -bottom-3 left-1 h-8 w-[88%] text-[#8b5727]"
                                  fill="none"
                                  aria-hidden="true"
                                >
                                  <motion.path
                                    d="M4 24C43 15 79 12 112 13C151 14 186 18 246 6"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    variants={{
                                      hidden: { pathLength: 0, opacity: 0 },
                                      visible: { pathLength: 1, opacity: 1, transition: { duration: 0.6, ease: "easeInOut", delay: 0.24 } }
                                    }}
                                  />
                                </svg>
                              </>
                            ) : (
                              word
                            )}
                          </motion.span>
                        );
                      })}
                    </h2>

                    <motion.p
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { duration: 0.54, delay: 0.24, ease: "easeInOut" } }
                      }}
                      className="mt-6 text-lg font-medium text-[#111827] sm:text-xl lg:text-lg"
                    >
                      {storyData[activeCard].smallEyebrow}
                    </motion.p>

                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 15 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3, ease: "easeOut" } }
                      }}
                      className="mt-4 max-w-[34rem] space-y-4 text-base leading-7 text-[#4b5563] sm:text-lg sm:leading-8 lg:max-w-[31rem] lg:text-sm lg:leading-6 xl:text-[0.95rem] xl:leading-7"
                    >
                      {storyData[activeCard].paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center">
              <div className="flex w-full items-center justify-center gap-4 sm:gap-5">
                <div className="h-px w-[90px] bg-black/[0.12] sm:w-[110px] rounded-full" />
                <h3 className="text-sm font-semibold tracking-[0.3px] text-[#8b5727]">Connect With Me</h3>
                <div className="h-px w-[90px] bg-black/[0.12] sm:w-[110px] rounded-full" />
              </div>
              
              <div className="mt-8 flex gap-8 justify-center">
                <a
                  href="https://github.com/avinash-kumar-101"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="group flex cursor-pointer flex-col items-center"
                >
                  <div className="flex h-[72px] w-[72px] items-center justify-center rounded-[20px] border border-black/5 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-[350ms] ease-out group-hover:-translate-y-[6px] group-hover:scale-[1.04] group-hover:border-[#8b5727] group-hover:shadow-[0_15px_40px_rgba(139,87,39,0.15)]">
                    <FiGithub className="h-[28px] w-[28px] text-[#8b5727] transition-colors duration-[350ms] ease-out group-hover:text-[#8b5727]" />
                  </div>
                  <span className="mt-3 text-[15px] font-medium text-[#5A5A5A]">GitHub</span>
                </a>

                <a
                  href="https://linkedin.com/in/avinash-kumar-dev1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="group flex cursor-pointer flex-col items-center"
                >
                  <div className="flex h-[72px] w-[72px] items-center justify-center rounded-[20px] border border-black/5 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-[350ms] ease-out group-hover:-translate-y-[6px] group-hover:scale-[1.04] group-hover:border-[#8b5727] group-hover:shadow-[0_15px_40px_rgba(139,87,39,0.15)]">
                    <FiLinkedin className="h-[28px] w-[28px] text-[#8b5727] transition-colors duration-[350ms] ease-out group-hover:text-[#8b5727]" />
                  </div>
                  <span className="mt-3 text-[15px] font-medium text-[#5A5A5A]">LinkedIn</span>
                </a>

                <a
                  href="mailto:avinas9934@gmail.com"
                  aria-label="Email Me"
                  className="group flex cursor-pointer flex-col items-center"
                >
                  <div className="flex h-[72px] w-[72px] items-center justify-center rounded-[20px] border border-black/5 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-[350ms] ease-out group-hover:-translate-y-[6px] group-hover:scale-[1.04] group-hover:border-[#8b5727] group-hover:shadow-[0_15px_40px_rgba(139,87,39,0.15)]">
                    <FiMail className="h-[28px] w-[28px] text-[#8b5727] transition-colors duration-[350ms] ease-out group-hover:text-[#8b5727]" />
                  </div>
                  <span className="mt-3 text-[15px] font-medium text-[#5A5A5A]">Email</span>
                </a>
              </div>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[600px] flex-col items-center justify-center lg:-mt-3">
            <AboutStoryCards active={activeCard} setActive={handleCardChange} />
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "50px" }}
          variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
          className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-6"
        >
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  boxShadow: "0 24px 44px rgba(17,24,39,0.12)",
                  transition: { duration: 0.5, type: "spring", stiffness: 100, damping: 20 },
                }}
                className="group rounded-2xl border border-[#111827]/5 bg-white/90 p-5 shadow-[0_8px_30px_rgba(17,24,39,0.05)] backdrop-blur xl:p-6"
              >
                <motion.div
                  transition={{ duration: 0.5 }}
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#f3eee8] text-[#8b5727] transition-transform duration-300 ease-out group-hover:rotate-[5deg] group-hover:scale-110"
                >
                  <Icon className="text-2xl" />
                </motion.div>
                <h3 className="font-display text-2xl font-bold text-[#111827]">{item.title}</h3>
                <div className="mt-2 h-0.5 w-6 rounded-full bg-[#8b5727]" />
                <p className="mt-4 min-h-[66px] text-sm leading-6 text-[#4b5563]">{item.text}</p>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "50px" }}
          transition={{ duration: 0.6, ease }}
          className="mt-6 grid items-center gap-6 rounded-xl border border-[#111827]/5 bg-white/70 p-6 shadow-[0_8px_30px_rgba(17,24,39,0.04)] backdrop-blur sm:grid-cols-[auto_1fr_auto] lg:px-8"
        >
          <span className="font-display text-6xl font-bold leading-none text-[#8b5727]">&ldquo;</span>
          <p className="max-w-2xl text-lg leading-8 text-[#374151]">
            I believe great software is built by understanding people first and technology second.
          </p>
          <motion.div
            aria-hidden="true"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="hidden text-[#8b5727]/55 sm:block"
          >
            <svg viewBox="0 0 250 86" fill="none" className="h-20 w-64">
              <path
                d="M8 70H236M54 64H124L114 26H44L54 64ZM72 40L64 47L72 54M89 40L97 47L89 54M82 56L87 38M151 68V42M151 68H188M151 42C162 42 178 46 188 58M151 42C163 32 178 27 193 28M193 28C186 39 177 47 166 52M199 67H226C231 67 235 63 235 58V51H190V58C190 63 194 67 199 67ZM235 52H241C247 52 247 62 236 62"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M164 31C160 19 154 12 145 7M179 24C180 15 184 8 191 3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
