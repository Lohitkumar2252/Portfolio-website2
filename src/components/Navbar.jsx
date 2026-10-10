import React, { useState } from "react";

const Navbar = () => {
  const links = ["Home", "About", "Projects", "Contact"];
  const [selected, setselected] = useState("Home");
  return (
    <nav className=" mx-auto max-w-[25rem] sm:max-w-150 lg:max-w-200 rounded-4xl flex items-center p-2 bg-bg-medium justify-between border border-navbar-border sticky top-5 z-50">
      <h1 className=" font-primary text-text-main font-bold text-base ml-5">LOHIT KUMAR</h1>
      <div className="menu mr-5 sm:hidden">
        <img src="/menu-line.svg" alt="menu" className="w-5 h-5" />
      </div>
      <ul className="sm:flex hidden items-center text-sm text-text-muted">
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
