import React, { useState, useEffect } from "react";
import AnimatedLogo from "../../../assets/images/animated-logo.gif";
import { HamburgerIcon } from "../../utils/Icon";
import useWindowSize from "../../../hooks/useWindowSize";

import { Link } from "react-scroll";

function Header() {
  const size = useWindowSize();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    isHamburgerOpen
      ? body.classList.add("overflow-y-hidden")
      : body.classList.remove("overflow-y-hidden");
  }, [isHamburgerOpen]);

  const navigation = [
    {
      name: "About",
    },
    {
      name: "Projects",
    },
    {
      name: "Contact",
    },
  ];

  const MobileNav = () => {
    return (
      <>
        <HamburgerIcon
          onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
          className="w-8 h-8"
        />

        <div
          className={`fixed top-0 left-0 right-0 bottom-0 flex-col items-center justify-center bg-white z-10 ${
            isHamburgerOpen ? "flex" : "hidden"
          }`}
        >
          <nav>
            <ul className="flex flex-col gap-8 text-center text-4xl">
              {navigation.map((nav, i) => (
                <li key={i}>
                  <Link
                    to={nav.name.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <button onClick={() => setIsHamburgerOpen(false)}>
                      {nav.name}
                    </button>
                  </Link>
                </li>
              ))}
              <li className="border-t-2 border-gray-500">
                <button
                  className="btn btn-outline text-2xl mt-8"
                  onClick={() => setIsHamburgerOpen(false)}
                >
                  Close
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  };

  const DesktopNav = () => {
    return (
      <nav>
        <ul className="flex items-center gap-8">
          {navigation.map((nav, i) => (
            <li key={i}>
              <Link
                to={nav.name.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button onClick={() => setIsHamburgerOpen(false)}>
                  {nav.name}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  return (
    <header>
      <div className="container">
        <div className="flex items-center justify-between w-full">
          <div className="logo-box">
            <img className="logo" src={AnimatedLogo} alt="" />
          </div>

          {size.width >= 1024 ? <DesktopNav /> : <MobileNav />}
        </div>
      </div>
    </header>
  );
}

export default Header;
