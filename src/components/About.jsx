import React from "react";
import hero from "../assets/hero2.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div id="about">
      <div className="container flex items-start justify-between">
        <h1
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          className="uppercase hidden md:block font-[400] text-[70px] leading-[90%] tracking-[0%] text-[#FFFFFF] "
        >
          About me
        </h1>
        <div
          style={{ fontFamily: "'Manrope', sans-serif" }}
          className="w-[650px]"
        >
          <h1
            style={{ fontFamily: "'Manrope', sans-serif" }}
            className="hidden md:block text-[#FFFFFF] text-[32px] leading-[140%] tracking-[0%] "
          >
            I am a full-stack developer based in Nigeria. Has Mechanical
            Engineering background.{" "}
          </h1>
          <p className="text-[18px] text-[#C7C7C7] leading-[150%] font-[400] mt-[20px] mb-[40px] hidden md:block ">
            I’m a full-stack developer based in Lagos, Nigeria, currently
            looking for exciting opportunities to grow and contribute. I’m
            actively exploring technologies like React.js, Next.js, and Node.js
            (Express), while also sharpening my skills in frontend design.
            Passionate about building user-friendly and efficient web
            applications, I’m always learning and working to improve my skill
            set. Outside of coding, I enjoy watching football, playing video
            games, and staying curious about new tech trends.
          </p>
          <p className="text-[18px] text-[#C7C7C7] leading-[150%] font-[400] md:hidden mb-[20px]">
            I am a full-Stack developer based in Lagos looking for exciting
            opportunities. Has Mechanical Engineering background. Likes to focus
            on accessibility when developing.
          </p>
          <Link
            to="/about"
            onClick={() => window.scrollTo(0, 0)}
            className="border-b-[2px] border-[#D3E97A] text-[#D3E97A] uppercase font-[700] text-[14px] md:text-[16px] mt-[40px]"
          >
            More about me
          </Link>
        </div>
      </div>
      <img
        src={hero}
        alt=""
        className="md:hidden w-[343px] h-[400px] block mx-auto mt-[40px]"
      />

      <hr
        alt=""
        className="mt-[50px] md:mt-[150px] mb-[30px] border border-[#484848]  "
      />
    </div>
  );
};

export default About;
