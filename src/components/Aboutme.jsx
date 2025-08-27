import React from "react";
import { Link } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";

const Aboutme = () => {
  return (
    <div id="about" className="mt-[80px]">
      <div className="container flex flex-col md:flex-row items-start justify-between">
        <h1
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          className="uppercase  font-[400] md:text-[70px] text-[35px] mb-4 leading-[90%] tracking-[0%] text-[#FFFFFF] "
        >
          About me
        </h1>
        <div
          style={{ fontFamily: "'Manrope', sans-serif" }}
          className="md:w-[700px] w-[343px]"
        >
          <h1
            style={{ fontFamily: "'Manrope', sans-serif" }}
            className=" text-[#FFFFFF] text-[24px] md:text-[32px] leading-[140%] tracking-[0%] "
          >
            I am a Full-Stack developer based in Nigeria. Has Mechanical
            Engineering background.{" "}
          </h1>
          <p className="text-[18px] text-[#C7C7C7] leading-[160%] w-[95%] md:leading-[150%] font-[400] mt-[20px] mb-[40px]  ">
            I’m a full-stack developer based in Lagos, Nigeria, currently
            looking for exciting opportunities to grow and contribute. I’m
            actively exploring technologies like React.js, Next.js, and Node.js
            (Express), while also sharpening my skills in frontend design.
            Passionate about building user-friendly and efficient web
            applications, I’m always learning and working to improve my skill
            set. Outside of coding, I enjoy watching football, playing video
            games, and staying curious about new tech trends.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <Link
              href="/resume.pdf"
              style={{ fontFamily: "'Manrope', sans-serif" }}
              className="bg-[#D3E97A] font-[700] text-[12px] uppercase text-[#0A0A0A] md:text-[14px]   rounded-[100px] w-[212px] h-[48px] md:w-[244px] md:h-[54px] flex items-center justify-center pl-[24px] py-[20px] pr-[6px] gap-3 md:gap-0"
            >
              Download Resume <BsDot size={50} className="hidden md:block" />{" "}
              <div className="w-[40px] h-[40px] rounded-full bg-[#0A0A0A] flex items-center justify-center md:hidden">
                <MdOutlineFileDownload
                  color="#FFFFFF"
                  className="w-[20px] h-[20px]"
                />
              </div>
            </Link>
            <Link
              to="https://linkedin.com/in/akano-isaac-422475371"
              target="_blank"
              className="bg-[#222222] rounded-full w-[48px] h-[48px] md:w-[54px] md:h-[54px] flex justify-center items-center "
            >
              <FaLinkedinIn color="#D3E97A" size={20} />
            </Link>
            <Link
              to="https://github.com/Isaac025"
              target="_blank"
              className="bg-[#222222] rounded-full w-[48px] h-[48px] md:w-[54px] md:h-[54px] flex justify-center items-center "
            >
              <FaGithub color="#D3E97A" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
