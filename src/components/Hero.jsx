import React from "react";
import hero from "../assets/hero2.png";
import { BsDot } from "react-icons/bs";
import arrow from "../assets/arrow.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className="container flex flex-col md:flex-row items-center justify-center gap-10 md:gap-5">
        <div>
          <h1
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            className="uppercase text-[#FFFFFF] font-[400] text-[35px] md:text-[60px] leading-[100%] md:leading-[90%] tracking-[0%] "
          >
            hi, i am <br /> Akano Isaac.
          </h1>
          <p
            style={{ fontFamily: "'Manrope', sans-serif" }}
            className="max-w-[544px] w-full text-[#C7C7C7] text-[16px] md:text-[18px] leading-[160%] md:leading-[150%] mt-[8px] md:mt-[15px]"
          >
            A Lagos based Full-Stack developer passionate about building
            accessible and user friendly websites.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <AnchorLink
              href="#contact"
              style={{ fontFamily: "'Manrope', sans-serif" }}
              className="bg-[#D3E97A] font-[700] text-[12px] text-[#0A0A0A] md:text-[16px]  uppercase rounded-[100px] w-[163px] h-[48px] md:w-[187px] md:h-[54px] flex items-center justify-center pl-[24px] py-[20px] pr-[6px] gap-2 md:gap-0"
            >
              Contact Me <BsDot size={50} className="hidden md:block" />{" "}
              <div className="w-[40px] h-[40px] rounded-full bg-[#0A0A0A] flex items-center justify-center md:hidden">
                <img src={arrow} alt="" />
              </div>
            </AnchorLink>
            <Link
              to="https://linkedin.com/in/akano-isaac-422475371"
              target="_blank"
              className="bg-[#222222] rounded-full w-[48px] cursor-pointer h-[48px] md:w-[54px] md:h-[54px] flex justify-center items-center "
            >
              <FaLinkedinIn color="#D3E97A" size={20} />
            </Link>
            <Link
              to="https://github.com/Isaac025"
              target="_blank"
              className="bg-[#222222] rounded-full w-[48px] h-[48px] cursor-pointer md:w-[54px] md:h-[54px] flex justify-center items-center "
            >
              <FaGithub color="#D3E97A" size={20} />
            </Link>
          </div>
        </div>
        <img
          src={hero}
          alt=""
          className="max-w-[600px] w-full h-[400px] md:h-[600px] object-cover rounded-[10px]"
        />
      </div>
      <hr alt="" className="my-[50px] md:my-[80px] border border-[#484848]  " />
    </div>
  );
};

export default Hero;
