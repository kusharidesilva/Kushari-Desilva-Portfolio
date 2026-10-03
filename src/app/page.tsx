import About from "@/components/About";
import Achievements from "@/components/Achievements";
import BackToTop from "@/components/BackToTop";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GraphicDesigns from "@/components/GraphicDesigns";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import ScrollProgress from "@/components/ScrollProgress";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GraphicDesigns />
        <Research />
        <Achievements />
        <Timeline />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
