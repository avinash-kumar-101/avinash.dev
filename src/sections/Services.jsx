

import { motion } from "framer-motion";
import { FiCode, FiSmartphone, FiGlobe } from "react-icons/fi";
import { MdSmartToy, MdAutoGraph } from "react-icons/md";

const Services = () => {
  const services = [
    {
      icon: <FiCode size={34} className="text-blue-400" />,
      title: "Web Development",
      desc: "High-quality, scalable and responsive web applications built with modern technologies.",
    },
    {
      icon: <FiSmartphone size={34} className="text-purple-400" />,
      title: "Frontend Design",
      desc: "Beautiful, modern and interactive UI/UX created using Tailwind CSS & React.",
    },
    {
      icon: <FiGlobe size={34} className="text-green-400" />,
      title: "Backend & APIs",
      desc: "Secure, clean and optimized backend architecture using Node.js & MongoDB.",
    },
    {
      icon: <MdSmartToy size={38} className="text-pink-400 drop-shadow-[0_0_12px_#ff4bcf]" />,
      title: "AI Solutions",
      desc: "Smart AI-powered features like chatbots, automation and intelligent assistants for modern apps.",
    },
    {
      icon: <MdAutoGraph size={38} className="text-yellow-400 drop-shadow-[0_0_12px_#ffe97a]" />,
      title: "Machine Learning",
      desc: "Accurate ML models for predictions, classification, analytics and real-world data insights.",
    },
  ];

  return (
    <section id="services" className="py-0">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-slate-100">Services</h2>
        <p className="text-slate-400 mt-3 text-lg">What I can do for you</p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="relative p-[2px] rounded-2xl overflow-hidden group"
            >
              {/* NEON BORDER WAVE */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute inset-0 rounded-2xl 
                  bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 
                  animate-[spin_2s_linear_infinite]"></div>
              </div>

              {/* Inner Card */}
              <div className="relative p-8 rounded-2xl bg-[#0F172A]/70 backdrop-blur-xl 
                              border border-slate-700/40 shadow-xl
                              text-center flex flex-col items-center z-10
                              group-hover:border-blue-400/50 transition">
                
                {/* Icon pulse */}
                <motion.div
                  animate={{ scale: [1, 1.12, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mb-4"
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-slate-100">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 mt-3 text-sm leading-relaxed">
                  {service.desc}
                </p>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;




