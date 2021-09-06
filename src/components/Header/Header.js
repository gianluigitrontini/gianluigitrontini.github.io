import React, { useRef, useState, useEffect } from "react";
import AnimatedLogo from "../../assets/images/animated-logo.gif";
import { Link } from "react-scroll";

function Header() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const header = useRef(null);
  const links = useRef(null);
  const hamburgerIcon = useRef(null);
  const hamburgerToggle = useRef(null);
  const mobileNav = useRef(null);

  useEffect(() => {
    const body = document.querySelector("body");
    isHamburgerOpen
      ? body.classList.add("overflow-y-hidden")
      : body.classList.remove("overflow-y-hidden");
  }, [isHamburgerOpen]);

  return (
    <header
      ref={header}
      className={`${isHamburgerOpen ? "header-fixed-mobile" : ""}`}
    >
      <div className="container">
        <div className="mobile--row">
          <div className="logo-box">
            <img className="logo" src={AnimatedLogo} alt="" />
          </div>
          <button
            className="navbar-toggler collapsed"
            id="hamburger-toggle"
            ref={hamburgerToggle}
            type="button"
            data-toggle="collapse"
            data-target="#myNavbar"
            aria-controls="myNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
          >
            <div
              className={`animated-icon ${isHamburgerOpen ? "open" : ""}`}
              ref={hamburgerIcon}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          <div
            className={`mobile-menu--container ${
              isHamburgerOpen ? "show" : ""
            }`}
            ref={mobileNav}
          >
            <nav className="nav--mobile">
              <ul>
                <li>
                <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                  <button
                    onClick={() => setIsHamburgerOpen(false)}
                    ref={links}
                    className="about"
                  >
                    About
                  </button>
                  </Link>
                </li>
                <li>
                <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button onClick={() => setIsHamburgerOpen(false)} className="projects">Projects</button>
              </Link>
                </li>
                <li>
                <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                  <button
                    onClick={() => setIsHamburgerOpen(false)}
                    ref={links}
                    className="contact"
                  >
                    Contact
                  </button>
                  </Link>
                </li>
                <li className="text-center">
                  <span className="block text-xs uppercase">
                    Select Your Language
                  </span>
                  <div className="container--language-selector">
                    {/* <LanguageSelector/> */}
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <nav className="nav--desktop">
          <ul>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button className="about">About</button>
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button className="projects">Projects</button>
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button className="contact">Contact</button>
              </Link>
            </li>
            <li className="container--language-selector">
              {/* <LanguageSelector/> */}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
