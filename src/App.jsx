import Navbar from "./components/layout/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Services from "./sections/Services"
import Certificates from "./sections/Certificates"
import Experience from "./sections/Experience"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

function App() {
  return (
    <div className="min-h-screen bg-[#f8f4ee] text-[#111827] overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />

        {/* Full-bleed wrapper — sections handle their own full-width via negative margins */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Services />
          <Certificates />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
