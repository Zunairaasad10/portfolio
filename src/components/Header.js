import { useState } from "react";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <h1 className="logo">Zunaira Asad</h1>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Navigation links */}
      <nav className={isOpen ? "nav open" : "nav"}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a> 
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>  
      </nav>
    </header>
  );
}

export default Header;
