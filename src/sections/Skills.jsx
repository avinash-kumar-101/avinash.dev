

import { motion } from "framer-motion";

const skills = [
  { name: "MongoDB", icon: "/icons/mongo.jpeg" },
  { name: "JavaScript", icon: "/icons/js.jpeg" },
  { name: "Tailwind CSS", icon: "/icons/tailwind.jpeg" },
  { name: "React.js", icon: "/icons/react.jpeg" },
  { name: "Git & GitHub", icon: "/icons/git.jpeg" },
  { name: "Node.js", icon: "/icons/node.jpeg" },
];

const Skills = () => {
  return (
    // 🔥 IMPORTANT: id="skills"
    <section
      id="skills"
      className="min-h-screen px-6 py-20 relative overflow-hidden"
    >
      {/* Title */}
      <h2 className="text-4xl font-extrabold text-slate-100 text-center mb-14">
        Skills
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="relative p-[2px] rounded-2xl overflow-hidden group cursor-pointer"
          >
            {/* Neon border */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-[spin_3s_linear_infinite]" />
            </div>

            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl blur-xl opacity-40 bg-blue-500/20 pointer-events-none" />

            {/* Card */}
            <div className="relative p-8 rounded-2xl bg-[#0F172A]/70 backdrop-blur-xl border border-slate-700/40 shadow-xl flex flex-col items-center gap-4 z-10">
              <motion.img
                src={skill.icon}
                alt={skill.name}
                className="w-20 h-20 object-contain"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              <p className="text-slate-200 text-lg font-medium">
                {skill.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;