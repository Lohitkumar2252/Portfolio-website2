import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <div className="container mx-auto max-w-384">
        <Navbar />
        <HeroSection />
        <AboutSection/>
        <ProjectsSection/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
