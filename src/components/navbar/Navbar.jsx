import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Navbar.css";

const Navbar = () => {
  const [toggleButton, setToggleButton] = useState(false);
  const [selectedNav, setSelectedNav] = useState("home");

  const Menu = () => (
    <>
      <p className={`navLink ${selectedNav === "home" ? "active" : ""}`}>
        <a href="#home" onClick={() => setSelectedNav("home")}>
          Home
        </a>
      </p>
      <p className={`navLink ${selectedNav === "about" ? "active" : ""}`}>
        <a href="#about" onClick={() => setSelectedNav("about")}>
          Skills
        </a>
      </p>
      <p className={`navLink ${selectedNav === "projects" ? "active" : ""}`}>
        <a href="#projects" onClick={() => setSelectedNav("projects")}>
          Projects
        </a>
      </p>
      <p className={`navLink ${selectedNav === "experience" ? "active" : ""}`}>
        <a href="#experience" onClick={() => setSelectedNav("experience")}>
          Experience
        </a>
      </p>
      <p className={`navLink ${selectedNav === "contact" ? "active" : ""}`}>
        <a href="#contact" onClick={() => setSelectedNav("contact")}>
          Contact
        </a>
      </p>
    </>
  );

  return (
    <div className="portfolio__navbar">
      <div className="portfolio__navbar-logo">
        <p>Yogesh</p>
        <p>Achare</p>
      </div>
      <div className="portfolio__navbar-menu">
        <Menu />
      </div>
      <div className="portfolio__navbar-menu_mobile">
        {toggleButton ? (
          <RiCloseLine
            size={27}
            color="#fff"
            onClick={() => setToggleButton((prev) => (prev = !prev))}
          />
        ) : (
          <RiMenu3Line
            size={27}
            color="#fff"
            onClick={() => setToggleButton((prev) => (prev = !prev))}
          />
        )}
        {toggleButton && (
          <div className="portfolio__navbar-menu_mobile_container scale-up-center">
            <div className="portfolio__navbar-menu_mobile_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
