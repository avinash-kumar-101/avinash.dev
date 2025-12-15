import Navbar from "./components/layout/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Services from "./sections/Services"
import Certificates from "./sections/Certificates"
import Experience from "./sections/Experience"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"

function App() {
  return (
    <div className="min-h-screen bg-primary text-textMain">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-24 lg:space-y-32">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Certificates />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App


