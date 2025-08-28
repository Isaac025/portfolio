import React, { useState } from "react";
import { Link } from "react-router-dom";
import menu from "../assets/menu.png";
import { IoMdClose } from "react-icons/io";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="h-[96px]">
      <div className="container flex justify-between items-center">
        <h1
          style={{ fontFamily: "'Bebas Neue', serif" }}
          className="text-[#C7C7C7] uppercase text-[32px] font-[400]  leading-[150%] tracking-[-1%]"
        >
          <Link to="/">Akano Isaac</Link>
        </h1>
        <div
          style={{ fontFamily: "'Inter', sans-serif" }}
          className="text-[#C7C7C7] font-medium text-[16px] hidden lg:flex items-center gap-[32px] "
        >
          <AnchorLink href="#work" className="hover:text-[#D3E97A]">
            Work
          </AnchorLink>
          <AnchorLink href="#about" className="hover:text-[#D3E97A]">
            About
          </AnchorLink>
          <AnchorLink href="#contact" className="hover:text-[#D3E97A]">
            Contact
          </AnchorLink>
        </div>
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <IoMdClose size={30} className="text-white" />
            ) : (
              <img src={menu} alt="menu-icon" />
            )}
          </button>

          {menuOpen && (
            <div className="absolute top-[70px] left-0 w-full bg-[#1a1a1a] flex flex-col items-center gap-6 py-6 z-50 text-[#C7C7C7] font-medium text-[16px]">
              <AnchorLink href="#work" onClick={() => setMenuOpen(false)}>
                Work
              </AnchorLink>
              <AnchorLink href="#about" onClick={() => setMenuOpen(false)}>
                About
              </AnchorLink>
              <AnchorLink href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </AnchorLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
