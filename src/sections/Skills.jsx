import { motion } from "framer-motion";
import { 
  SiReact, SiTypescript, SiJavascript, SiTailwindcss, SiFramer, SiNextdotjs,
  SiNodedotjs, SiMongodb, SiMysql, SiPostgresql, SiCloudinary, SiRedis, SiFirebase,
  SiGit, SiGithub, SiPostman, SiDocker, SiLinux, SiRender, SiVercel, SiSupabase
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaLaptopCode, FaServer, FaDatabase, FaBoxOpen, FaBriefcase, FaCode } from "react-icons/fa";
import { BsStars } from "react-icons/bs";


const ease = [0.16, 1, 0.3, 1];
const springEase = [0.175, 0.885, 0.32, 1.275];

const skillCategories = [
  {
    icon: <FaLaptopCode size={22} />,
    title: "Frontend Development",
    skills: [
      { name: "React", icon: <SiReact className="text-[#61DAFB] text-2xl" /> },
      { name: "Next.js", icon: <div className="flex items-center justify-center bg-black text-white rounded-full w-6 h-6"><SiNextdotjs className="text-white text-[14px]" /></div> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6] text-2xl bg-white" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-black bg-[#F7DF1E] text-2xl rounded-sm" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4] text-2xl" /> },
      { name: "Framer Motion", icon: <SiFramer className="text-black text-2xl" /> },
    ],
  },
  {
    icon: <FaServer size={22} />,
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933] text-2xl" /> },
      { name: "Express.js", icon: <div className="flex items-center justify-center w-6 h-6 text-black"><span className="text-[14px] font-bold">ex</span></div> },
      { name: "REST APIs", icon: <span className="font-bold text-[14px] text-gray-700">{`{...}`}</span> },
      { name: "JWT", icon: <span className="text-2xl leading-none">🌟</span> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248] text-2xl" /> },
      { name: "Multer", icon: <span className="text-2xl leading-none">📁</span> },
    ],
  },
  {
    icon: <FaDatabase size={22} />,
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248] text-2xl" /> },
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1] text-2xl" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1] text-2xl" /> },
      { name: "Cloudinary", icon: <SiCloudinary className="text-[#3448C5] text-2xl" /> },
      { name: "Redis", icon: <SiRedis className="text-[#DC382D] text-2xl" /> },
      { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28] text-2xl" /> },
    ],
  },
  {
    icon: <FaBoxOpen size={22} />,
    title: "Tools & Integrations",
    skills: [
      { name: "Git", icon: <SiGit className="text-[#F05032] text-2xl" /> },
      { name: "GitHub", icon: <SiGithub className="text-black text-2xl" /> },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37] text-2xl" /> },
      { name: "VS Code", icon: <VscVscode className="text-[#007ACC] text-2xl" /> },
      { name: "Docker", icon: <SiDocker className="text-[#2496ED] text-2xl" /> },
      { name: "Linux", icon: <SiLinux className="text-black text-2xl" /> },
    ],
  },
];

const platforms = [
  { name: "Git", icon: <SiGit className="text-[#F05032] text-lg" /> },
  { name: "GitHub", icon: <SiGithub className="text-black text-lg" /> },
  { name: "VS Code", icon: <VscVscode className="text-[#007ACC] text-lg" /> },
  { name: "Render", icon: <SiRender className="text-black text-lg" /> },
  { name: "Railway", icon: <span className="text-black font-bold text-[12px] border-[1.5px] border-black rounded-sm px-[2px] leading-none">R</span> },
  { name: "Vercel", icon: <SiVercel className="text-black text-lg" /> },
  { name: "Supabase", icon: <SiSupabase className="text-[#3ECF8E] text-lg" /> },
  { name: "Resend", icon: <div className="flex bg-black text-white items-center justify-center w-[18px] h-[18px] text-[10px] font-bold rounded-sm">R</div> },
];

// Inner orbit: 4 skills evenly placed at 90° intervals (starting from top = -90°)
const orbitSkillsInner = [
  { name: "React", icon: <SiReact className="text-[#61DAFB]" style={{ fontSize: 28 }} />, angle: -90 },
  { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" style={{ fontSize: 28 }} />, angle: 0 },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" style={{ fontSize: 28 }} />, angle: 90 },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" style={{ fontSize: 28 }} />, angle: 180 },
];

// Outer orbit: 8 unique skills evenly placed at 45° intervals
const orbitSkillsOuter = [
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" style={{ fontSize: 28 }} />, angle: -90 },
  { name: "Next.js", icon: <SiNextdotjs className="text-black" style={{ fontSize: 28 }} />, angle: -45 },
  { name: "Express.js", icon: <span className="text-[16px] font-black text-gray-700 leading-none">ex</span>, angle: 0 },
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" style={{ fontSize: 28 }} />, angle: 45 },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" style={{ fontSize: 28 }} />, angle: 90 },
  { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" style={{ fontSize: 28 }} />, angle: 135 },
  { name: "Git", icon: <SiGit className="text-[#F05032]" style={{ fontSize: 28 }} />, angle: 180 },
  { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" style={{ fontSize: 28 }} />, angle: -135 },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative isolate -mx-4 scroll-mt-24 overflow-hidden bg-[#f8f4ee] px-5 pt-20 pb-24 text-[#111827] sm:-mx-6 sm:px-8 lg:left-1/2 lg:mx-0 lg:w-screen lg:-translate-x-1/2 lg:px-10 lg:pt-28 lg:pb-32 xl:px-12"
    >
      {/* Background Dots */}
      <div className="absolute right-10 top-10 -z-10 grid grid-cols-5 gap-3 opacity-20">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="h-1.5 w-1.5 rounded-full bg-[#8b5727]" />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-[1240px]">
        {/* Top: 2-col layout */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16 xl:gap-20">
          
          {/* Left: Title + Categories */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.5, ease }}
              className="mb-3 text-[13px] font-bold uppercase tracking-[0.2em] text-[#8b5727]"
            >
              - Skills
            </motion.p>

            <h2 className="font-display text-5xl font-bold leading-[1.1] tracking-normal text-[#111827] sm:text-6xl lg:text-[3.5rem] xl:text-[4rem]">
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{ duration: 0.57, ease }}
                className="block"
              >
                Tools I
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{ duration: 0.57, delay: 0.06, ease }}
                className="relative mt-2 block w-fit font-script text-[4rem] font-normal leading-none text-[#8b5727] sm:text-[5rem] lg:text-[4.5rem] xl:text-[5rem]"
              >
                Work With.
                <svg
                  viewBox="0 0 260 30"
                  className="absolute -bottom-2 left-0 h-6 w-[110%] text-[#8b5727]"
                  fill="none"
                  aria-hidden="true"
                >
                  <motion.path
                    d="M3 21C55 13 105 10 148 11C195 12 228 16 257 5"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "50px" }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 0.18 }}
                  />
                </svg>
                {/* Accent marks */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "50px" }}
                  transition={{ duration: 0.5, delay: 0.48 }}
                  className="absolute -right-8 -top-4 text-[#8b5727]"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M4 4l4 4M20 4l-4 4M12 2v5" />
                  </svg>
                </motion.div>
              </motion.span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.5, delay: 0.12, ease }}
              className="mt-6 max-w-md text-sm leading-6 text-[#4b5563] sm:text-base sm:leading-7"
            >
              A curated set of technologies and tools that I use to build modern, scalable, and impactful solutions.
            </motion.p>

            {/* Category cards grid */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "50px" }}
              variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
              className="mt-10 grid grid-cols-1 gap-6 lg:gap-8"
            >
              {skillCategories.map((cat, ci) => (
                <motion.div
                  key={ci}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "50px" }}
                  transition={{ duration: 0.5, delay: ci * 0.1, ease: "easeOut" }}
                  className="rounded-[1.5rem] bg-white p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100/80 transition-shadow duration-300 flex flex-col"
                >
                  {/* Card Header */}
                  <div className="flex flex-col mb-3">
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#7a421b] text-white shadow-sm shrink-0">
                        {cat.icon}
                      </div>
                      <h3 className="text-[17px] font-bold text-[#111827] leading-tight">{cat.title}</h3>
                    </div>
                    <div className="h-[2px] w-8 bg-[#d95d39] mb-4" />
                    <div className="w-full h-[1px] bg-gray-100/80" />
                  </div>
                  
                  {/* Grid Skills - using 1px gap for inner borders */}
                  <div className="bg-gray-100/60 w-full mt-1">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-[1px]">
                      {cat.skills.map((skill, si) => (
                        <motion.div 
                          key={si}
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "50px" }}
                          transition={{ duration: 0.5, delay: (ci * 0.15) + 0.3 + (si * 0.05), ease }}
                          className="bg-white flex items-center py-3.5 px-4 relative overflow-hidden group"
                        >
                          <motion.div 
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-3 w-full z-10"
                          >
                            <div className="flex items-center justify-center shrink-0 w-6">
                              {skill.icon}
                            </div>
                            <span className="text-[13.5px] font-semibold text-[#111827] group-hover:text-[#8b5727] transition-colors whitespace-nowrap">{skill.name}</span>
                          </motion.div>
                          {/* Subtle hover background effect */}
                          <div className="absolute inset-0 bg-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Orbit / visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="relative hidden lg:flex lg:items-center lg:justify-center mt-10 lg:mt-0"
          >
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-[550px] w-full flex items-center justify-center"
            >
              


              {/* Outer Dashed Orbit */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="absolute rounded-full border-[1.5px] border-dashed border-[#8b5727]/20"
                style={{ width: "400px", height: "400px" }}
              >
                {/* Outer Skills - placed on circumference using angle transform */}
                {orbitSkillsOuter.map((skill, i) => {
                  const rad = (skill.angle * Math.PI) / 180;
                  const r = 200; // radius = half of 400px
                  const x = 50 + (r / 400) * 100 * Math.cos(rad);
                  const y = 50 + (r / 400) * 100 * Math.sin(rad);
                  return (
                    <div
                      key={i}
                      className="absolute"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "50px" }}
                        transition={{ duration: 0.5, delay: 0.19 + (i * 0.07), ease: springEase }}
                      >
                        <motion.div
                          className="flex flex-col items-center gap-1.5"
                          animate={{ rotate: -360 }}
                          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                        >
                          <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white shadow-lg border border-gray-100/80">
                            {skill.icon}
                          </div>
                          <span className="text-[10px] font-bold text-[#374151] bg-white/90 px-2 py-0.5 rounded-full shadow-sm whitespace-nowrap">{skill.name}</span>
                        </motion.div>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>

              {/* Inner Dashed Orbit */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute rounded-full border-[1.5px] border-dashed border-[#8b5727]/30"
                style={{ width: "240px", height: "240px" }}
              >
                {/* Inner Skills - placed on circumference using angle transform */}
                {orbitSkillsInner.map((skill, i) => {
                  const rad = (skill.angle * Math.PI) / 180;
                  const r = 120; // radius = half of 240px
                  const x = 50 + (r / 240) * 100 * Math.cos(rad);
                  const y = 50 + (r / 240) * 100 * Math.sin(rad);
                  return (
                    <div
                      key={i}
                      className="absolute"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "50px" }}
                        transition={{ duration: 0.5, delay: 0.26 + (i * 0.1), ease: springEase }}
                      >
                        <motion.div
                          className="flex flex-col items-center gap-1.5"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        >
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg border border-gray-100/80">
                            {skill.icon}
                          </div>
                          <span className="text-[10px] font-bold text-[#374151] bg-white/90 px-1.5 py-0.5 rounded-full shadow-sm whitespace-nowrap">{skill.name}</span>
                        </motion.div>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>

              {/* Center code icon */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{ duration: 0.57, delay: 0.24, ease: springEase }}
                className="absolute z-10"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      "0 0 60px rgba(139,87,39,0.15)",
                      "0 0 100px rgba(139,87,39,0.3)",
                      "0 0 60px rgba(139,87,39,0.15)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="flex h-28 w-28 items-center justify-center rounded-full bg-white border border-[#8b5727]/10"
                >
                  <div className="flex h-[88px] w-[88px] items-center justify-center rounded-full bg-orange-50/50">
                    <FaCode className="text-4xl text-[#8b5727] ml-2" />
                  </div>
                </motion.div>
              </motion.div>

              {/* Quote card */}
              <motion.div
                initial={{ opacity: 0, y: 30, x: "-50%" }}
                whileInView={{ opacity: 1, y: 0, x: "-50%" }}
                viewport={{ once: true, margin: "50px" }}
                transition={{ duration: 0.57, delay: 0.66, ease: springEase }}
                className="absolute -bottom-16 left-1/2 w-[90%] max-w-[420px] rounded-2xl bg-white px-7 py-5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100/80 z-20"
              >
                <div className="flex items-start gap-4">
                  <BsStars className="text-[#8b5727] text-[22px] shrink-0 mt-0.5" />
                  <p className="text-[13.5px] leading-relaxed text-[#374151] font-medium pr-2">
                    I enjoy learning new technologies and building solutions that solve{" "}
                    <span className="font-bold text-[#8b5727]">real-world problems.</span>
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Platforms strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "50px" }}
          transition={{ duration: 0.5, delay: 0.06, ease }}
          className="mt-16 lg:mt-24 flex flex-col md:flex-row items-center gap-4 md:gap-8 rounded-[2.5rem] border border-gray-100/50 bg-white px-8 py-5 shadow-[0_4px_25px_rgb(0,0,0,0.03)]"
        >
          <div className="flex items-center gap-3 shrink-0 md:pr-4">
            <div className="flex h-[42px] w-[42px] items-center justify-center rounded-2xl bg-[#fdfaf6] text-[#8b5727] border border-[#8b5727]/10">
              <FaBriefcase size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-[15px] font-bold text-[#111827] leading-tight">Platforms</span>
              <span className="text-[12px] font-medium text-gray-400">I Work With</span>
            </div>
          </div>
          
          <div className="h-8 w-[1px] bg-gray-100 hidden md:block" />
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-3">
            {platforms.map((p, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{ duration: 0.54, delay: 0.12 + (i * 0.04), ease: springEase }}
              >
                <motion.div 
                  whileHover={{ scale: 1.05, y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2 cursor-default"
                >
                  {p.icon}
                  <span className="text-[14px] font-bold text-[#111827]">{p.name}</span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;