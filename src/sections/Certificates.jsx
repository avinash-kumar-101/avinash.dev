
import { motion } from "framer-motion";

const Certificates = () => {
  const certificates = [
    {
      title: "Disney Plus Hotstar Data Analysis",
      org: "WsCube Tech",
      image: "/certificates/ws_disney.jpeg",
    },
    {
      title: "Sales & Marketing Internship Program",
      org: "HighRadius",
      image: "/certificates/highradius_sales.jpeg",
    },
    {
      title: "Techquezt #25 Tech For Good",
      org: "Naukri Campus",
      image: "/certificates/naukri_techforgood.jpeg",
    },
    {
      title: "SQL Summer Internship",
      org: "Celebal Technologies",
      image: "/certificates/celebal_sql.jpeg",
    },

    // 👉 NEW CERTIFICATE 1
    {
      title: "Internship in Ethical Hacking",
      org: "Offdef Cyber Solutions LLP (The Hacker Central)",
      image: "/certificates/ethical_internship.jpeg",
    },

    // 👉 NEW CERTIFICATE 2
    {
      title: "Bootcamp on Ethical Hacking",
      org: "The Hacker Central (ACIC Rise Association, CGC Landran)",
      image: "/certificates/ethical_bootcamp.jpeg",
    },
  ];

  return (
    <section id="certificates" className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-slate-100"
        >
          Certificates
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-slate-400 mt-3 text-lg"
        >
          Verified achievements that showcase my growth and expertise
        </motion.p>

        {/* Certificates Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-14"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
              },
            },
          }}
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              whileHover={{
                scale: 1.03,
                translateY: -6,
                boxShadow: "0px 12px 35px rgba(59,130,246,0.25)",
              }}
              className="p-6 rounded-2xl bg-[#0F172A]/60 backdrop-blur-xl border 
                         border-slate-700/40 shadow-xl transition-all cursor-pointer 
                         flex flex-col items-center text-center hover:border-blue-500/40"
            >
              <div className="w-full h-62 overflow-hidden rounded-xl mb-4">
                <motion.img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              <h3 className="text-lg font-semibold text-slate-100">
                {cert.title}
              </h3>

              <p className="text-slate-400 text-sm mt-1">{cert.org}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Certificates;