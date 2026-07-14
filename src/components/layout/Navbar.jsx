import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import logoo from "../../assets/logoo.webp";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Certifications", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - window.innerHeight / 3) {
          current = "#" + section;
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled
            ? "bg-[#fbf8f4]/80 shadow-[0_8px_30px_rgba(17,24,39,0.08)] backdrop-blur-xl border-b border-[#111827]/10 py-0"
            : "bg-[#faf7f2]/0 border-transparent py-2"
          }`}
      >
        <nav className="relative mx-auto flex h-24 w-full max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:h-28 lg:px-10">
          <a
            href="#home"
            className="inline-flex items-center transition-opacity hover:opacity-80"
            aria-label="Avinash home"
          >
            <img src={logoo} alt="Avinash" className="h-24 w-auto object-contain sm:h-28 lg:h-32" />
          </a>

          <div className="hidden items-center gap-8 text-[0.95rem] font-medium text-[#111827] lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`group relative py-2 transition-colors duration-300 ease-out hover:text-[#8b5727] ${activeSection === link.href ? "text-[#8b5727]" : ""
                  }`}
              >
                {link.label}
                {activeSection === link.href ? (
                  <motion.span
                    layoutId="nav-active-underline"
                    className="absolute inset-x-0 -bottom-1 h-[2px] bg-[#9b642f] block"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    style={{ transformOrigin: "left" }}
                  />
                ) : (
                  <span
                    className="absolute inset-x-0 -bottom-1 h-[2px] bg-[#9b642f] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left block"
                  />
                )}
              </a>
            ))}
          </div>

          <motion.a
            href="/resume.pdf"
            className="group hidden h-14 items-center gap-3 rounded-2xl bg-[#8b5727] px-7 text-base font-semibold text-white shadow-[0_14px_30px_rgba(139,87,39,0.25)] transition-colors duration-300 ease-out hover:bg-[#73451f] xl:flex"
            whileHover={{ y: -2, boxShadow: "0 20px 44px rgba(139,87,39,0.35)" }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <FiDownload className="text-xl" />
            Download Resume
            <motion.span
              className="inline-flex"
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 0.72, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.8 }}
            >
              <FiArrowRight className="text-xl" />
            </motion.span>
          </motion.a>

          <button
            type="button"
            aria-label="Open navigation menu"
            className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full border border-[#8b5727]/25 bg-white/70 p-3 text-2xl text-[#8b5727] shadow-sm sm:right-8 lg:hidden"
            onClick={() => setOpen(true)}
          >
            <FiMenu />
          </button>
        </nav>
      </motion.header>

      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity ${open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 z-50 h-full w-[82%] max-w-sm transform bg-[#fbf8f4] text-[#111827] shadow-2xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex h-24 items-center justify-between border-b border-[#111827]/10 px-6">
          <img src={logoo} alt="Avinash" className="h-20 w-auto object-contain" />
          <button
            type="button"
            aria-label="Close navigation menu"
            className="rounded-full border border-[#8b5727]/25 p-3 text-2xl text-[#8b5727]"
            onClick={() => setOpen(false)}
          >
            <FiX />
          </button>
        </div>

        <div className="flex flex-col gap-1 p-6 text-base font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-xl px-4 py-3 transition-colors duration-300 ease-out hover:bg-[#8b5727]/10 hover:text-[#8b5727] ${activeSection === link.href ? "bg-[#8b5727]/10 text-[#8b5727]" : ""
                }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <a
            href="/resume.pdf"
            className="mt-5 flex h-14 items-center justify-center gap-3 rounded-2xl bg-[#8b5727] px-6 font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            <FiDownload className="text-xl" />
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
