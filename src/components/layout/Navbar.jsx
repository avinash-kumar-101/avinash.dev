function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-primary/80 backdrop-blur-xl border-b border-slate-800">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        <h1 className="text-lg font-semibold text-textMain">
          Avinash Kumar
        </h1>

        <div className="hidden sm:flex gap-6 text-sm text-slate-300">
          <a href="#about" className="hover:text-accent">About</a>
          <a href="#skills" className="hover:text-accent">Skills</a>
          <a href="#services" className="hover:text-accent">Services</a>
          <a href="#projects" className="hover:text-accent">Projects</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;