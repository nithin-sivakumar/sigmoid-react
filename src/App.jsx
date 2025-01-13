import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Services from "./components/Services";
import Action from "./components/Action";
import CaseStudies from "./components/CaseStudies";
import Process from "./components/Process";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { FaArrowRight } from "react-icons/fa6";

const App = () => {
  return (
    <main className="customFont overflow-y-scroll overflow-x-hidden h-screen w-full">
      <Navbar />
      <Hero />
      <Logos />
      <Services />
      <Action />
      <CaseStudies />
      <Process />
      <Team />
      <Contact />
      <Footer />
      <a
        href="#top"
        className="hidden size-16 border-4 border-darkColor border-dashed bg-primary absolute bottom-10 rounded-full right-10 text-darkColor xl:flex items-center justify-center text-[32px] hover:bg-darkColor hover:border-primary hover:text-primary transition-all duration-200 animate-bounce"
      >
        <FaArrowRight className="-rotate-90" />
      </a>
    </main>
  );
};

export default App;
