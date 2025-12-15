
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 py-20 bg-transparent relative"
    >
      <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT — Avatar */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="w-[260px] h-[260px] rounded-full bg-[#0B1120] flex items-center justify-center shadow-[0_0_35px_rgba(59,130,246,0.25)]">
            <img
              src="/avatar/dev-hero.jpeg"
              alt="About Avatar"
              className="w-[220px] h-[220px] rounded-full object-cover"
            />
          </div>
        </motion.div>

        {/* RIGHT — Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-100 mb-6">
            About Me
          </h2>

          <p className="text-slate-300 leading-relaxed text-lg">
            I'm <span className="text-blue-400 font-semibold">Avinash Kumar</span>, 
            a passionate and detail-oriented{" "}
            <span className="text-blue-400 font-semibold">Full-Stack Developer</span>{" "}
            specializing in building modern, scalable, and high-performance digital products.
          </p>

          <p className="text-slate-400 mt-4 leading-relaxed text-lg">
            I focus on creating seamless user experiences, clean backend logic, 
            and beautiful UI using the{" "}
            <span className="text-blue-400 font-semibold">MERN Stack</span>.  
            I enjoy solving complex problems and turning ideas into real-world 
            applications.
          </p>

          <p className="text-slate-400 mt-4 leading-relaxed text-lg">
            My goal is to continuously learn, experiment, and provide meaningful 
            digital solutions that make an impact.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 
              text-white font-medium transition-all shadow-lg hover:shadow-blue-500/40"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-slate-600 hover:border-blue-500 
              text-slate-200 font-medium transition-all"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;