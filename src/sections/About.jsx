import { motion } from "framer-motion";
import { FiArrowRight, FiBookOpen, FiCode, FiCpu, FiZap } from "react-icons/fi";

const words = ["Curious.", "Consistent.", "Builder."];

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
    transition: { duration: 0.8, delay, ease },
  }),
};

const About = () => {
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
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#8b5727] lg:text-sm"
            >
              - About Me
            </motion.p>

            <h2 className="font-display text-5xl font-bold leading-[0.95] tracking-normal text-[#111827] sm:text-6xl lg:text-[3.25rem] xl:text-[3.65rem]">
              {words.map((word, index) => {
                const isBuilder = word === "Builder.";

                return (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, delay: index * 0.1, ease }}
                    className={isBuilder ? "relative mt-1 block w-fit" : "mr-3 inline-block"}
                  >
                    {isBuilder ? (
                      <>
                        <span className="font-script text-[4.6rem] font-normal leading-none text-[#8b5727] sm:text-[5.8rem] lg:text-[4.55rem] xl:text-[4.95rem]">
                          Builder.
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
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 2, ease: "easeInOut", delay: 0.35 }}
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

            <div className="mt-6 max-w-[34rem] space-y-4 text-base leading-7 text-[#4b5563] sm:text-lg sm:leading-8 lg:max-w-[31rem] lg:text-sm lg:leading-6 xl:text-[0.95rem] xl:leading-7">
              {[
                <>
                  I'm <span className="font-semibold text-[#8b5727]">Avinash Kumar</span>, a Computer Science student and{" "}
                  <span className="font-semibold text-[#8b5727]">Full-Stack Developer</span> who loves building modern,
                  user-friendly web applications and AI-powered solutions that solve real-world problems.
                </>,
                "I enjoy turning ideas into functional products, exploring new technologies, and continuously improving my skills. Every project I build is a step towards creating meaningful digital experiences.",
              ].map((paragraph, index) => (
                <motion.p
                  key={index}
                  custom={0.18 + index * 0.12}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={fadeUp}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }}
            className="relative mx-auto flex min-h-[360px] w-full max-w-[600px] items-end justify-center lg:-mt-3 lg:min-h-[380px] xl:min-h-[410px]"
          >
            <img
              src="/avatar/hero-portrait.png"
              alt="Avinash Kumar"
              className="relative z-10 h-[320px] w-[88%] object-cover object-[70%_28%] mix-blend-multiply sm:h-[390px] lg:h-[360px] xl:h-[390px]"
              style={{
                maskImage: 'radial-gradient(50% 50% at 50% 50%, black 70%, transparent 95%)',
                WebkitMaskImage: 'radial-gradient(50% 50% at 50% 50%, black 70%, transparent 95%)'
              }}
            />
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-6"
        >
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  boxShadow: "0 24px 44px rgba(17,24,39,0.12)",
                  transition: { duration: 0.3, type: "spring", stiffness: 100, damping: 20 },
                }}
                className="group rounded-2xl border border-[#111827]/5 bg-white/90 p-5 shadow-[0_8px_30px_rgba(17,24,39,0.05)] backdrop-blur xl:p-6"
              >
                <motion.div
                  transition={{ duration: 0.3 }}
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
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
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
