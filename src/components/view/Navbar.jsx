import { useState } from "react";
import styled from "styled-components";
import { Transition } from "@headlessui/react";
import "hover.css";
import { NavLink } from "react-router-dom";
import boxlogo from "../assets/boxlogo.png";
import Hamburger from "./Hamburger";
import Close from "./Close";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <>
      <Nav
        className="max-w-full via-red-500 to-pink-500 container mx-auto px-10 flex  justify-around
      h-14 fixed items-center z-10"
      >
        <div className="logo-container">
          <img
            src={boxlogo}
            alt="hshblock box logo"
            className="object-cover h-14 w-full"
          />
        </div>
        <Navlinks className="nav-links flex justify-evenly align-end text-lg font-bold min-w-min list-none">
          <li>
            <NavLink to="/" className="hvr-pulse-shrink">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/privacy" className="hvr-pulse-shrink">
              Privacy
            </NavLink>
          </li>
          <li>
            <NavLink to="/disclaimer" className="hvr-pulse-shrink">
              Disclaimer
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/whitepaper"
              target="_blank"
              rel="noreferrer"
              className="hvr-pulse-shrink"
            >
              Whitepaper
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hvr-pulse-shrink"
              rel="noopener"
              target="_blank"
              to="/whitelist"
            >
              Whitelist
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/contact-us" className="hvr-pulse-shrink">
              Contact us
            </NavLink>
          </li> */}
        </Navlinks>

        <div className="px-4 cursor-pointer w-full md:hidden flex justify-end items-end">
          <button onClick={handleToggle}>
            {navbarOpen ? <Close /> : <Hamburger />}
          </button>
        </div>

        <Transition
          show={navbarOpen}
          enter="transition ease-in duration-200 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <MobileNav classname="h-full w-full">
                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <li>
                    <NavLink to="/" className="hvr-pulse-shrink">
                      Home
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/privacy" className="hvr-pulse-shrink">
                      Privacy
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/disclaimer" className="hvr-pulse-shrink">
                      Disclaimer
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/whitepaper"
                      target="_blank"
                      rel="noreferrer"
                      className="hvr-pulse-shrink"
                    >
                      Whitepaper
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className="hvr-pulse-shrink"
                      rel="noopener"
                      target="_blank"
                      to="/whitelist"
                    >
                      Whitelist
                    </NavLink>
                  </li>
                  {/* <li>
                    <NavLink to="/contact-us" className="hvr-pulse-shrink">
                      Contact us
                    </NavLink>
                  </li> */}
                </div>
              </MobileNav>
            </div>
          )}
        </Transition>
      </Nav>
    </>
  );
};

export default Navbar;

const Nav = styled.nav`
  background: #fbf6f6;
  border-bottom: 1px solid black;

  //! Media Query
  @media (min-width: 640px) {
    li {
      padding: 5px;
      margin-left: 8px;
    }
  }

  /* @media (max-width: 638.98px) {
    background: orange;
  }

  @media (min-width: 640px) {
    background: red;
  }

  @media (min-width: 1024px) {
    background: blue;
    height: 5rem;
  }

  @media (min-width: 1280px) {
    background: green;
  }

  @media (min-width: 1536px) {
    background: yellow;
  } */
`;

const Navlinks = styled.nav`
  width: 60%;
  color: #f8a70a;
  margin-left: 10rem;
  li {
  }

  @media (max-width: 638.98px) {
    background: #fbf6f6;
    display: block;
    position: absolute;
    margin-top: 17rem;
    width: 100%;
    text-align: center;
    display: none;
  }
`;

const MobileNav = styled.div`
  background: #fbf6f6;
  color: #f8a70a;
  font-size: 1.2rem;
  font-weight: bold;
  position: absolute;
  width: 100%;
  height: 60vh;
  margin-top: 1.8rem;
  left: 0;
  text-align: center;
  li {
    list-style: none;
    padding: 1rem;
  }
`;
