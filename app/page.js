import Hero from "./components/Hero.jsx";   // <- no @, just a relative path
console.log("HERO IMPORT:", Hero);

import ProjectSection from "./components/ProjectSection.jsx";

export default function Home() {
  return (
    <main className="pb-24">
      <Hero />
      <ProjectSection />
    </main>
  );
}