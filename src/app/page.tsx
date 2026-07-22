import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Workflow } from "@/components/sections/Workflow";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden">
      <Hero />
      <About />
      <Workflow />
      <Experience />
      <Projects />
      <TechStack />
      <Certifications />
      <Contact />
    </main>
  );
}
