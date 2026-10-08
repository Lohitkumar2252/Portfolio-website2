import React, { useState } from "react";

const Navbar = () => {
  const links = ["Home", "About", "Projects", "Contact"];
  const [selected, setselected] = useState("Home");
  return (
    <nav className="h-[60px] mx-auto w-200 mt-5 rounded-4xl flex items-center p-2 bg-bg-medium justify-between border border-navbar-border">
      <h1 className=" font-primary text-text-main font-bold text-xl ml-5">LOHIT KUMAR</h1>
      <ul className="flex gap-2 items-center text-base text-text-muted">
        {links.map((link) => (
          <li 
            key={link}
            
            className={ `font-secondary px-5 py-2 rounded-4xl h-full ${link === selected && "bg-text-main text-bg-dark"}`}
          >
            <a href={`#${link}`} onClick={() => setselected(link)} className="h-full block">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
