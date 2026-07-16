import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useAnimation } from "framer-motion";
import { FiDownload, FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { UserRound, BriefcaseBusiness, FolderGit2, Code2, Layers3, BadgeCheck, Send } from "lucide-react";
import logoo from "../../assets/logoo.webp";

const navLinks = [
  { label: "About", href: "#about", Icon: UserRound },
  { label: "Experience", href: "#experience", Icon: BriefcaseBusiness },
  { label: "Projects", href: "#projects", Icon: FolderGit2 },
  { label: "Skills", href: "#skills", Icon: Code2 },
  { label: "Services", href: "#services", Icon: Layers3 },
  { label: "Certifications", href: "#certificates", Icon: BadgeCheck },
  { label: "Contact", href: "#contact", Icon: Send },
];

// All section IDs including home for scroll detection
const allSectionIds = ["home", "about", "experience", "projects", "skills", "services", "certificates", "contact"];

function NavItem({ link, isActive, onClick }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    const moveX = (middleX / width) * 6;
    const moveY = (middleY / height) * 6;

    x.set(Math.max(-3, Math.min(3, moveX)));
    y.set(Math.max(-3, Math.min(3, moveY)));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={link.href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial="rest"
      whileHover="hover"
      animate={isActive ? "active" : "rest"}
      className="group relative flex items-center gap-[8px] py-2 px-1 text-[0.95rem] font-medium outline-none focus:outline-none"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        className="relative flex items-center justify-center text-[#111827]"
        variants={{
          rest: {
            y: 0,
            rotate: 0,
            scale: isActive ? 1.05 : 1,
            color: isActive ? "#8b5727" : "#111827",
            filter: isActive ? "drop-shadow(0px 0px 4px rgba(139,87,39,0.3))" : "drop-shadow(0px 0px 0px rgba(139,87,39,0))"
          },
          hover: {
            y: -2,
            rotate: 8,
            scale: 1.08,
            color: "#8b5727",
            filter: isActive ? "drop-shadow(0px 0px 4px rgba(139,87,39,0.3))" : "drop-shadow(0px 0px 0px rgba(139,87,39,0))"
          },
          active: {
            y: 0,
            rotate: 0,
            scale: 1.05,
            color: "#8b5727",
            filter: "drop-shadow(0px 0px 4px rgba(139,87,39,0.3))"
          }
        }}
        transition={{ duration: 0.25, ease: [0.215, 0.61, 0.355, 1] }}
      >
        <link.Icon size={16} strokeWidth={2} />
      </motion.div>
      <motion.span
        variants={{
          rest: { y: 0, color: isActive ? "#8b5727" : "#111827" },
          hover: { y: -2, color: "#8b5727" },
          active: { y: 0, color: "#8b5727" }
        }}
        transition={{ duration: 0.25, ease: [0.215, 0.61, 0.355, 1] }}
      >
        {link.label}
      </motion.span>

      {isActive && (
        <motion.span
          layoutId="nav-active-underline"
          className="absolute inset-x-0 -bottom-1 h-[2px] rounded-full bg-[#8b5727] block"
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 1
          }}
        />
      )}
    </motion.a>
  );
}

/* ── Download Resume button — idle loop and hover fully decoupled ── */
function ResumeButton() {
  const [hovered, setHovered] = useState(false);
  const arrowControls = useAnimation();

  // Idle float: runs whenever not hovered
  useEffect(() => {
    if (!hovered) {
      arrowControls.start({
        x: [0, 6, 0],
        rotate: 0,
        transition: {
          x: { duration: 1.4, ease: "easeInOut", repeat: Infinity, repeatType: "loop" },
          rotate: { duration: 0.22, ease: "easeOut" },
        },
      });
    }
  }, [hovered, arrowControls]);

  const handleHoverStart = () => {
    setHovered(true);
    arrowControls.stop();
    arrowControls.start({
      x: 8,
      rotate: 15,
      transition: { duration: 0.22, ease: [0.215, 0.61, 0.355, 1] },
    });
  };

  const handleHoverEnd = () => {
    setHovered(false);
    // useEffect above restarts the idle loop with rotate reset to 0
  };

  return (
    <motion.a
      href="/resume.pdf"
      className="hidden h-14 items-center gap-3 rounded-2xl bg-[#8b5727] px-7 text-base font-semibold text-white xl:flex whitespace-nowrap shrink-0 outline-none focus:outline-none"
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      animate={{
        y: hovered ? -2 : 0,
        boxShadow: hovered
          ? "0 18px 36px rgba(139,87,39,0.35)"
          : "0 14px 30px rgba(139,87,39,0.25)",
        backgroundColor: hovered ? "#73451f" : "#8b5727",
      }}
      transition={{ duration: 0.25, ease: [0.215, 0.61, 0.355, 1] }}
    >
      {/* Download icon: nudges down + slight scale on hover */}
      <motion.span
        className="inline-flex"
        animate={{
          y: hovered ? 4 : 0,
          scale: hovered ? 0.96 : 1,
        }}
        transition={{ duration: 0.24, ease: [0.215, 0.61, 0.355, 1] }}
      >
        <FiDownload className="text-xl" />
      </motion.span>
      Download Resume
      {/* Arrow: continuous idle float, snaps to hover position on hover */}
      <motion.span className="inline-flex" animate={arrowControls}>
        <FiArrowRight className="text-xl" />
      </motion.span>
    </motion.a>
  );
}

/* ── Mobile menu item ───────────────────────────────────────── */
function MobileNavItem({ link, isActive, index, onSelect }) {
  const [isTouch, setIsTouch] = useState(false);

  const handlePointerDown = (e) => {
    if (e.pointerType === "touch") setIsTouch(true);
  };

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(link.href)}
      onPointerDown={handlePointerDown}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.215, 0.61, 0.355, 1], delay: index * 0.04 }}
      whileHover={isTouch ? undefined : {
        x: 4,
        scale: 1.01,
        transition: { duration: 0.23, ease: [0.215, 0.61, 0.355, 1] },
      }}
      whileTap={{ scale: 0.98, transition: { duration: 0.18 } }}
      className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-[0.95rem] font-medium outline-none focus:outline-none text-left will-change-transform ${isActive
        ? "bg-[#8b5727]/10 text-[#8b5727]"
        : "text-[#111827]"
        }`}
      style={{
        backgroundColor: isActive ? "rgba(139,87,39,0.1)" : undefined,
      }}
    >
      <motion.span
        className="inline-flex shrink-0"
        animate={{ color: isActive ? "#8b5727" : "#111827", scale: isActive ? 1.05 : 1 }}
        style={{ filter: isActive ? "drop-shadow(0px 0px 3px rgba(139,87,39,0.25))" : "none" }}
        transition={{ duration: 0.2 }}
      >
        <link.Icon size={17} strokeWidth={2} />
      </motion.span>
      <motion.span
        animate={{ color: isActive ? "#8b5727" : "#111827" }}
        transition={{ duration: 0.2 }}
      >
        {link.label}
      </motion.span>
      {isActive && (
        <motion.span
          layoutId="mobile-active-dot"
          className="ml-auto w-1.5 h-1.5 rounded-full bg-[#8b5727] shrink-0"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </motion.button>
  );
}

/* ── Mobile Resume Button ───────────────────────────────────── */
function MobileResumeButton({ onClose }) {
  const [tapped, setTapped] = useState(false);
  const arrowControls = useAnimation();

  useEffect(() => {
    if (!tapped) {
      arrowControls.start({
        x: [0, 6, 0],
        rotate: 0,
        transition: {
          x: { duration: 1.4, ease: "easeInOut", repeat: Infinity, repeatType: "loop" },
          rotate: { duration: 0.22, ease: "easeOut" },
        },
      });
    }
  }, [tapped, arrowControls]);

  return (
    <motion.a
      href="/resume.pdf"
      onClick={onClose}
      className="flex w-full h-14 items-center justify-center gap-3 rounded-2xl bg-[#8b5727] text-base font-semibold text-white outline-none focus:outline-none"
      initial={{ opacity: 0, y: 12 }}
      animate={{
        opacity: 1,
        y: 0,
        boxShadow: "0 14px 30px rgba(139,87,39,0.25)",
        backgroundColor: "#8b5727",
      }}
      whileTap={{ scale: 0.97, backgroundColor: "#73451f", boxShadow: "0 8px 20px rgba(139,87,39,0.3)" }}
      transition={{ duration: 0.3, ease: [0.215, 0.61, 0.355, 1], delay: navLinks.length * 0.04 + 0.06 }}
    >
      <motion.span className="inline-flex">
        <FiDownload className="text-xl" />
      </motion.span>
      Download Resume
      <motion.span className="inline-flex" animate={arrowControls}>
        <FiArrowRight className="text-xl" />
      </motion.span>
    </motion.a>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const isManualScroll = useRef(false);
  const scrollTimeout = useRef(null);

  /* ── Scroll detection ── */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (isManualScroll.current) return;

      let current = "";
      for (const sectionId of allSectionIds) {
        const element = document.getElementById(sectionId);
        if (element && window.scrollY >= element.offsetTop - window.innerHeight / 3) {
          current = "#" + sectionId;
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Listen for external manual scrolls (e.g. from Footer) ── */
  useEffect(() => {
    const handleExternalScroll = (e) => {
      setActiveSection(e.detail);
      isManualScroll.current = true;
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        isManualScroll.current = false;
      }, 1200);
    };

    window.addEventListener("navmenu:manual_scroll", handleExternalScroll);
    return () => window.removeEventListener("navmenu:manual_scroll", handleExternalScroll);
  }, []);

  /* ── Lock body scroll + signal external widgets when menu open ── */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    window.dispatchEvent(new CustomEvent(open ? "navmenu:open" : "navmenu:close"));
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const closeMenu = () => setOpen(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setActiveSection(href);
    window.history.pushState(null, "", href);

    isManualScroll.current = true;
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      isManualScroll.current = false;
    }, 1200);

    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleMobileNavSelect = (href) => {
    closeMenu();
    setActiveSection(href);
    window.history.pushState(null, "", href);

    isManualScroll.current = true;

    setTimeout(() => {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        isManualScroll.current = false;
      }, 1200);
    }, 260);
  };

  const handleLogoClick = () => {
    closeMenu();
    setActiveSection("#home");
    window.history.pushState(null, "", "#home");

    isManualScroll.current = true;

    setTimeout(() => {
      const el = document.getElementById("home");
      if (el) el.scrollIntoView({ behavior: "smooth" });

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        isManualScroll.current = false;
      }, 1200);
    }, open ? 260 : 0);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0, scale: scrolled ? 0.98 : 1 }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          y: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        }}
        className={`fixed z-50 origin-top transition-all flex justify-center w-full ${scrolled ? "top-3 px-4 sm:px-6 lg:px-8" : "top-0 inset-x-0"
          }`}
        style={{ transitionDuration: "400ms" }}
      >
        <div
          className={`w-full max-w-[1440px] transition-all duration-400 ${scrolled
            ? "bg-[#fbf8f4]/90 shadow-[0_4px_24px_rgba(0,0,0,0.04)] backdrop-blur-[14px] rounded-2xl border border-[#111827]/[0.03]"
            : "bg-transparent border-transparent"
            }`}
        >
          <nav className="relative mx-auto flex h-24 w-full items-center justify-between gap-6 px-5 sm:px-8 lg:h-28 lg:px-10">
            {/* Logo — Home navigation */}
            <button
              type="button"
              onClick={handleLogoClick}
              className="inline-flex items-center transition-opacity hover:opacity-80 outline-none focus:outline-none cursor-pointer bg-transparent border-0 p-0"
              aria-label="Scroll to home"
            >
              <img src={logoo} alt="Avinash" className="h-[120px] w-auto object-contain sm:h-[140px] lg:h-[160px]" />
            </button>

            {/* Desktop nav links */}
            <div className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <NavItem
                  key={link.href}
                  link={link}
                  isActive={activeSection === link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                />
              ))}
            </div>

            {/* Desktop resume button */}
            <ResumeButton />

            {/* Hamburger — mobile only */}
            <motion.button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="relative flex items-center justify-center w-11 h-11 rounded-full border border-[#8b5727]/25 bg-white/70 text-[#8b5727] shadow-sm lg:hidden outline-none focus:outline-none shrink-0"
              whileTap={{ scale: 0.92 }}
              transition={{ duration: 0.18 }}
            >
              <motion.span
                key={open ? "x" : "menu"}
                initial={{ rotate: open ? -90 : 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: open ? 90 : -90, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
                className="absolute inset-0 flex items-center justify-center text-xl"
              >
                {open ? <FiX /> : <FiMenu />}
              </motion.span>
            </motion.button>
          </nav>

          {/* ── Mobile dropdown panel ── */}
          <motion.div
            initial={false}
            animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.215, 0.61, 0.355, 1] }}
            className="lg:hidden"
            style={{
              display: open ? "flex" : "none",
              flexDirection: "column",
              maxHeight: "calc(100dvh - 7rem)",
              overflow: "hidden",
            }}
          >
            {/* Scrollable nav items */}
            <div className="flex-1 overflow-y-auto overscroll-contain px-3 pt-1">
              <div className="flex flex-col gap-0.5">
                {open && navLinks.map((link, i) => (
                  <MobileNavItem
                    key={link.href}
                    link={link}
                    isActive={activeSection === link.href}
                    index={i}
                    onSelect={handleMobileNavSelect}
                  />
                ))}
              </div>

              {/* Divider */}
              {open && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: navLinks.length * 0.04, duration: 0.2 }}
                  className="mt-3 h-px bg-[#111827]/8 rounded-full"
                />
              )}
            </div>

            {/* Pinned resume button — always visible, safe-area aware */}
            {open && (
              <div
                className="px-3 pt-3 shrink-0"
                style={{ paddingBottom: "max(12px, env(safe-area-inset-bottom, 12px))" }}
              >
                <MobileResumeButton onClose={closeMenu} />
              </div>
            )}
          </motion.div>
        </div>
      </motion.header>

      {/* Backdrop — tap outside to close */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-40"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}

export default Navbar;

