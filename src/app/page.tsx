
import About from "@/components/About";
import Contact from "@/components/Contact";
import CursorBubbles from "@/components/CursorBubbles";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <main
        id="home"
        className="min-h-screen bg-[#080b12] text-white"
      >
        <CursorBubbles/>
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Journey />
          <Contact/>
        </div>

      </main>
      <Footer />
    </>
  );
}
