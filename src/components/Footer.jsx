import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-bg-medium text-text-main text-2xl px-5 mt-10 py-10 sm:p-20 grid grid-cols-1 grid-rows-3 sm:grid-cols-4 sm:grid-rows-1  rounded-tr-4xl rounded-tl-4xl gap-5 sm:gap-10"
      id="Contact"
    >
      <div className="sm:text-6xl text-5xl text-text-main font-bold font-primary sm:col-span-2">
        {" "}
        <h2 className=" w-[80%] sm:w-1/2">LET’S BUILD SOMETHING GOOD.</h2>
      </div>
      
      <div className=" w-full flex flex-col gap-2 items-start sm:gap-3">
        <h4 className="text-2xl sm:text-3xl font-semibold text-text-main font-primary">
          Let's Connect
        </h4>
        
        <p className="text-text-muted text-sm sm:text-lg font-secondary">
          Let’s give your business a modern web experience.
        </p>
        <a
          target="_blank"
          href="https://www.instagram.com/lohit_kcodes/"
          className="text-white bg-primary-btn rounded-4xl sm:px-10 sm:py-2 flex items-center justify-center sm:text-lg text-sm px-5 py-2 font-bold font-secondary"
        >
          {" "}
          Get In Touch
        </a>
      </div>
      <div className="w-full flex-col items-center">
        <h4 className="text-2xl sm:text-3xl font-semibold text-text-main font-primary">
          Socials
        </h4>
        <ul className="text-text-muted text-sm sm:text-lg flex flex-col gap-1 mt-3 capitalize font-secondary">
          <li>
            <a target="_blank" href="https://github.com/Lohitkumar2252">github</a>
          </li>

          <li>
            <a href="#linkedin">linked in</a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/lohit_kcodes/">instagram</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
