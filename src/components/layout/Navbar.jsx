import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="fixed top-0 inset-x-0 z-50 bg-primary/80 backdrop-blur-xl border-b border-slate-800">
        <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

          {/* LOGO */}
          <h1 className="text-lg font-semibold text-textMain">
            Avinash Kumar
          </h1>

          {/* DESKTOP LINKS (UNCHANGED) */}
          <div className="hidden sm:flex gap-6 text-sm text-slate-300">
            <a href="#about" className="hover:text-accent">About</a>
            <a href="#skills" className="hover:text-accent">Skills</a>
            <a href="#services" className="hover:text-accent">Services</a>
            <a href="#projects" className="hover:text-accent">Projects</a>
            <a href="#contact" className="hover:text-accent">Contact</a>
          </div>

          {/* MOBILE MENU ICON */}
          <button
            className="sm:hidden text-2xl text-slate-200"
            onClick={() => setOpen(true)}
          >
            <FiMenu />
          </button>

        </nav>
      </header>

      {/* ===== MOBILE OVERLAY ===== */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setOpen(false)}
      />

      {/* ===== MOBILE SLIDE MENU ===== */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-xs bg-primary z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-slate-800">
          <span className="text-textMain font-semibold">Menu</span>
          <button
            className="text-2xl text-slate-300"
            onClick={() => setOpen(false)}
          >
            <FiX />
          </button>
        </div>

        {/* LINKS */}
        <div className="flex flex-col gap-6 p-6 text-slate-200 text-base">
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;