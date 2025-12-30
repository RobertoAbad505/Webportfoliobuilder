import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Achievements } from "./components/Achievements";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Languages } from "./components/Languages";
import { Testimonials } from "./components/Testimonials";
import { LanguageProvider } from "../contexts/LanguageContext";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-950">
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        {/* <Achievements /> */}
        {/* <Testimonials /> */}
        <Education />
        <Languages />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}