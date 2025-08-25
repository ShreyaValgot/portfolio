 import Hero from "./components/Hero";
import ProjectSection from "./components/ProjectSection";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />

      <section id="projects">
        <ProjectSection />
      </section>

      <section id="about">
        <About />
      </section>

        <section id="contact">
        <Contact />
        </section>

    </main>
  );
}
