import React, { lazy, Suspense } from "react"
import Navbar from "./components/layout/Navbar"
import Hero from "./sections/Hero"
import Preloader from "./components/ui/Preloader"
import WhatsAppButton from "./components/ui/WhatsAppButton"

// Lazy load sections below the fold
const About = lazy(() => import("./sections/About"))
const Experience = lazy(() => import("./sections/Experience"))
const Projects = lazy(() => import("./sections/Projects"))
const Skills = lazy(() => import("./sections/Skills"))
const Services = lazy(() => import("./sections/Services"))
const Certificates = lazy(() => import("./sections/Certificates"))
const Contact = lazy(() => import("./sections/Contact"))
const Footer = lazy(() => import("./sections/Footer"))

// Light fallback placeholder to prevent layout shifts
const SectionFallback = () => <div className="min-h-[200px]" />

function App() {
  return (
    <div className="min-h-screen bg-[#f8f4ee] text-[#111827] overflow-x-hidden">
      <Preloader />
      <Navbar />

      <main>
        <Hero />

        {/* Full-bleed wrapper — sections handle their own full-width via negative margins */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<SectionFallback />}>
            <About />
          </Suspense>
          
          <Suspense fallback={<SectionFallback />}>
            <Experience />
          </Suspense>
          
          <Suspense fallback={<SectionFallback />}>
            <Projects />
          </Suspense>
          
          <Suspense fallback={<SectionFallback />}>
            <Skills />
          </Suspense>
          
          <Suspense fallback={<SectionFallback />}>
            <Services />
          </Suspense>
          
          <Suspense fallback={<SectionFallback />}>
            <Certificates />
          </Suspense>
          
          <Suspense fallback={<SectionFallback />}>
            <Contact />
          </Suspense>
        </div>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      <WhatsAppButton />
    </div>
  )
}

export default App

