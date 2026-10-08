import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const AboutSection = () => {
  const aboutMeText = [
  "Custom-built Made around your business & your goals.",
  "Mobile-first Works smoothly on every screen.",
  "Clean & modern Easy to use and easy to understand.",
  "Clear communication No confusion about the work or the process."
];
  return (
    <section className=" h-[90vh] p-10 flex flex-row-reverse max-h-150">
      <div className="left w-1/2 p-10  bg-bg-medium rounded-4xl ">
        <h2 className="text-4xl font-semibold text-text-main font-primary">The Person Behind the Work</h2>
        <p className="text-text-muted capitalize text-base leading-6 mt-3 font-secondary">I'm a frontend developer who builds modern websites for businesses. websites that look professional, are easy to use, and help your customers understand what you offer.
</p>
        <ul className="mt-10 flex flex-col gap-10 ml-10 font-secondary">
          {aboutMeText.map((text, index) => (
            <li key={index} className="text-text-muted text-lg ">
              {text}
            </li>
          ))}
        </ul>
      </div>
      <div className="right">
        <DotLottieReact src="/aboutImgDark.lottie" loop autoplay />
      </div>
    </section>
  );
};

export default AboutSection;
