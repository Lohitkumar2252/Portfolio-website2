import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-bg-medium text-text-main text-2xl py-20 px-20 grid grid-cols-4 justify-items-center rounded-tr-4xl rounded-tl-4xl gap-10"
      id="Contact"
    >
      <div className="text-6xl text-text-main font-bold font-primary col-span-2">
        {" "}
        <h2 className="w-1/2">LET’S BUILD SOMETHING GOOD.</h2>
      </div>
      
      <div className=" flex flex-col gap-3">
        <h4 className="text-3xl font-semibold text-text-main font-primary">
          Let's Connect
        </h4>
        <p className="text-text-muted text-lg font-secondary">
          {" "}
          Have a project in mind?
        </p>
        <p className="text-text-muted text-lg font-secondary">
          Let’s turn your idea into a modern web experience.
        </p>
        <a
          target="_blank"
          href="https://www.instagram.com/lohit_kcodes/"
          className="text-white bg-primary-btn rounded-4xl px-10 p-2 flex items-center justify-center text-lg font-bold font-secondary"
        >
          {" "}
          Get In Touch
        </a>
      </div>
      <div className="">
        <h4 className="text-3xl font-semibold text-text-main font-primary">
          Socials
        </h4>
        <ul className="text-text-muted text-lg flex flex-col gap-1 mt-3 capitalize font-secondary">
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
