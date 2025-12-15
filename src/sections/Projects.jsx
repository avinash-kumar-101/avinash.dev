

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A modern portfolio website built using React, TailwindCSS, and Framer Motion.",
      tech: ["React", "TailwindCSS", "Framer Motion"],
      link: "https://avinash-portfolio-gold.vercel.app",
      github: "https://github.com/avinash-kumar-101/avinash-portfolio",
    },
    {
      title: "Movie Search App",
      desc: "A movie search engine built using JavaScript and TMDB API.",
      tech: ["JavaScript", "API", "CSS"],
      link: "https://your-live-demo-url.com",
      github: "https://github.com/avinash-kumar-101",
    },
    {
      title: "Zippora-Stay Rental Platform",
      desc: "A full-stack stay-rental application with CRUD-based listing management, user authentication, and end-to-end booking features.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      link: "https://your-live-demo-url.com",
      github: "https://github.com/avinash-kumar-101",
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-slate-100 text-center">Projects</h2>
        <p className="text-slate-400 text-center mt-2 text-lg">My Recent Work</p>

        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative group bg-[#0F172A]/60 backdrop-blur-xl 
                         border border-slate-700/40 rounded-2xl p-6 shadow-lg 
                         hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] 
                         transition-all"
            >
              {/* Title */}
              <h3 className="text-2xl font-semibold text-slate-100">{project.title}</h3>

              {/* Description */}
              <p className="text-slate-400 text-sm mt-2">{project.desc}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-blue-600/20 text-blue-300 
                               rounded-full border border-blue-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-6">

                {/* LIVE DEMO */}
                <a
                  href={project.link}
                  target="_blank"
                  className="px-4 py-2 bg-blue-600/80 hover:bg-blue-500 
                             rounded-lg text-white text-sm transition-all"
                >
                  Live Demo
                </a>

                {/* GITHUB BUTTON WITH ICON */}
                <a
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 bg-slate-700/80 hover:bg-slate-600 
                             rounded-lg text-white text-sm flex items-center gap-2 transition-all"
                >
                  <FaGithub size={16} />
                  Code
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;