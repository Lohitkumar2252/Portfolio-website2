import React, { useRef, useState } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import { PullCord } from "pullcord";
import "pullcord/pullcord.css";
import { PullHint } from "./components/PullHint";
import lightModeToggle from "./main";
import AboutSectionNew from "./components/AboutSectionNew";

const App = () => {
  const [isLightMode, setIsLightMode] = useState(false);


  return (
    <div>
      <div className="container mx-auto max-w-384 relative ">
        <PullCord
          className="pullcord-left "
          onPull={() => {
            lightModeToggle();
            setIsLightMode(!isLightMode);
          }}
          config={{
            gravity: 1175, 
            damping: 0.93, 
            iterations: 22,
            stretchMax: 50, 
          }}
        />

        <PullHint />
        <Navbar />
        <HeroSection/>
        <AboutSectionNew />
        <ProjectsSection />
        <Footer />
      </div>
    </div>
  );
};

export default App;
