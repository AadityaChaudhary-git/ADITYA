
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import FloatingDoodles from "@/components/ui/FloatingDoodles";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow relative z-10">
        <FloatingDoodles />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}