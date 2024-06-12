import Contact from "@/components/layouts/contact";
import Hero from "@/components/layouts/hero";
import MyProjects from "@/components/layouts/projects";
import Skills from "@/components/layouts/skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <MyProjects />
      <Contact />
    </>
  );
}
