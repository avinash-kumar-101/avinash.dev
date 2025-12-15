
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#0B1120] to-[#1E293B]"></div>
      <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[160px]"></div>
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[120px]"></div>

      <div className="relative z-10 max-w-5xl w-full flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl"
        >
          <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-100 leading-tight drop-shadow-lg">
            Avinash Kumar
          </h1>

          <p className="text-blue-400 font-semibold text-xl mt-4">
            Full-Stack Developer • MERN Stack Developer
          </p>

          <p className="text-slate-300 mt-4 leading-relaxed text-lg">
             Building scalable and modern applications with beautiful UI, clean backend architecture,
            and smooth user experience using the MERN stack.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-lg hover:shadow-blue-500/40"
            >
              My Projects
            </a>

            <a
              href="/resume.pdf"
              className="px-6 py-3 rounded-xl border border-slate-600 hover:border-blue-500 text-slate-200 font-medium transition-all"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* RIGHT AVATAR (NEW + CLEAN + PERFECT CIRCLE) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center mt-[-50px]"
        >
          {/* Circle background glow */}
          <div className="w-[260px] h-[260px] rounded-full bg-[#0B1120] shadow-[0_0_30px_rgba(59,130,246,0.18)] flex items-center justify-center">
            
            {/* Avatar Image */}
            <img
              src="/avatar/dev-hero.jpeg"
              alt="Developer Avatar"
              className="w-[220px] h-[220px] rounded-full object-contain scale-[1.15]"
            />
          </div>

          <p className="text-slate-300 text-center mt-5 text-sm">
            Building modern & scalable digital products.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;

