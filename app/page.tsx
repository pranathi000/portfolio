import Header from "@/components/Header";
import Articles from "@/components/Articles";
import Research from "@/components/Research";
import Projects from "@/components/Projects";
import Discoveries from "@/components/Discoveries";
import ThingsILove from "@/components/ThingsILove";
import AIEvolution from "@/components/AIEvolution";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="w-full">
      <Header />
      <Articles />
      <Research />
      <Projects />
      <Discoveries />
      <ThingsILove />
      <AIEvolution />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
