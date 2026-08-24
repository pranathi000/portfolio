import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Research from "@/components/Research";
import Publications from "@/components/Publications";
import Log from "@/components/Log";
import Systems from "@/components/Systems";
import Projects from "@/components/Projects";
import Writing from "@/components/Writing";
import EducationContributions from "@/components/EducationContributions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main id="top" className="mx-auto max-w-site px-5 md:px-10">
        <Hero />
        <About />
        <Research />
        <Publications />
        <Log />
        <Systems />
        <Projects />
        <Writing />
        <EducationContributions />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
