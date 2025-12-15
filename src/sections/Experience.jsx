
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: "SQL & Data Intern",
      company: "Celebal Technologies",
      duration: "June 2025 – August 2025",
      desc: "Worked on SQL-based data pipelines, optimized queries, handled real datasets, and collaborated with senior engineers to improve data accuracy and reporting efficiency.",
    },
    {
      role: "Sales & Marketing Intern",
      company: "HighRadius",
      duration: "May 2025 – May 2025",
      desc: "Completed the Highway to HighRadius Business Essentials Program. Learned market research, sales process optimization, and business communication to support marketing strategies.",
    },
    {
      role: "Ethical Hacking Intern",
      company: "Offdef Cyber Solutions LLP (The Hacker Central)",
      duration: "June 2024 – June 2024",
      desc: "Completed a one-month internship focused on Ethical Hacking fundamentals, vulnerability assessments, and cyber-security best practices with hands-on tasks.",
    },
    {
      role: "Bootcamp Trainee – Ethical Hacking",
      company: "The Hacker Central (ACIC Rise Association, CGC Landran)",
      duration: "June 2024",
      desc: "Completed a 4-week intensive Ethical Hacking bootcamp covering network security, reconnaissance, OWASP concepts, and practical cyber-security tools.",
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-slate-100 text-center">
          Experience
        </h2>
        <p className="text-slate-400 text-center mt-2 text-lg">
          My Professional Journey
        </p>

        <div className="mt-16 relative border-l border-slate-700/40 ml-4">

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12 ml-8"
            >
              <div className="w-4 h-4 bg-blue-500 rounded-full absolute -left-[9px] mt-1 shadow-[0_0_12px_rgba(59,130,246,0.7)]"></div>

              <div className="bg-[#0F172A]/60 backdrop-blur-md border border-slate-700/40 
                              shadow-lg p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                <p className="text-blue-400 font-medium mt-1">{exp.company}</p>
                <p className="text-slate-400 text-sm mt-1">{exp.duration}</p>
                <p className="text-slate-300 mt-3 leading-relaxed">{exp.desc}</p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;