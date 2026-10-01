import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const AboutSection = () => {
  const aboutMeText = [
    "Computer Science student building for the web ",
    "Focused on modern React & interactive frontend experiences",
    " I prefer building from scratch over relying on templates",
    "Detail-focused on UI, responsiveness & user experience",
    "Currently seeking internships & freelance opportunities",
  ];
  return (
    <section className=" h-[90vh] p-10 flex flex-row-reverse max-h-150">
      <div className="left w-1/2 p-5">
        <h2 className="text-5xl font-semibold text-text-main ">About me</h2>
        <ul className="mt-20 flex flex-col gap-10 ml-10">
          {aboutMeText.map((text, index) => (
            <li key={index} className="text-text-muted text-lg ">
              {text}
            </li>
          ))}
        </ul>
      </div>
      <div className="right">
        <DotLottieReact 
        src="/aboutImgDark.lottie"
        loop 
        autoplay 
      />
      </div>
    </section>
  );
};

export default AboutSection;
