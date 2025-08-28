import React from "react";
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";
import { BsArrow90DegRight } from "react-icons/bs";
import { ImArrowUpRight2 } from "react-icons/im";
import { FaGithub } from "react-icons/fa6";

const Featured = () => {
  return (
    <div>
      <div className="container" id="work">
        <h1
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          className="font-[400] md:text-[70px] text-[40px] tracking-[-2%] md:tracking-[0%]  text-[#FFFFFF]"
        >
          Featured Projects
        </h1>
        <p
          style={{ fontFamily: "'Manrope', sans-serif" }}
          className="text-[#C7C7C7] text-[16px] md:text-[18px] w-[343px] lg:w-[550px]"
        >
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </p>
        <div className="flex flex-col gap-15 md:gap-25">
          <div className="flex flex-col md:flex-row items-center gap-15 mt-[30px] md:mt-[60px]">
            <div className="bg-[#1A1A1A] md:w-[600px] md:h-[600px] w-[343px] h-[343px] flex items-center justify-center rounded-[12px] relative">
              <div className="bg-[#0A0A0A] md:w-[154px] w-[123px] h-[30px]  md:h-[37px] rounded-[100px] flex items-center justify-center absolute top-[20px] left-[10px]">
                <h3
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                  className="text-[#FFFFFF] text-[14px] font-medium"
                >
                  Conceptual Work
                </h3>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={work1}
                  alt=""
                  className="max-w-[486px]  w-full rounded-[10px]"
                />
              </div>
            </div>
            <div className="md:w-[576px] w-[343px]">
              <h1
                style={{ fontFamily: "'Manrope', sans-serif" }}
                className="font-medium text-[24px] md:text-[32px] text-[#FFFFFF]"
              >
                Torii Gate – Full-Stack Real Estate Web Application
              </h1>
              <p className="w-full font-[400] text-[16px] md:text-[18px] text-[#C7C7C7] leading-[160%] md:leading-[150%]">
                Collaborated with a designer and a team of developers to build
                Torii Gate, a modern and responsive full-stack web application
                for property rentals and sales. Designed to serve both house
                hunters and property owners, the platform allows users to
                explore a wide range of listings by type, budget, and location,
                while enabling owners to easily upload and manage their
                properties.
              </p>
              <h3 className="text-[#FFFFFF] font-[600] md:text-[16px] uppercase my-[20px]">
                Project Info
              </h3>
              <hr className="border border-[#484848]" />
              <div className="text-[#FFFFFF] font-[600] md:text-[16px]  my-[20px] flex items-center justify-between">
                <p>Year</p>
                <p className="text-[#C7C7C7]">2025</p>
              </div>
              <hr className="border border-[#484848]" />
              <div className="text-[#FFFFFF] font-[600] md:text-[16px]  my-[20px] flex items-center justify-between">
                <p>Role</p>
                <p className="text-[#C7C7C7]">Full-Stack Developer</p>
              </div>
              <hr className="border border-[#484848]" />
              <div className="flex items-center gap-4 uppercase text-[#D3E97A] mt-[40px]">
                <a
                  href="https://torrri-gate.vercel.app/"
                  target="_blank"
                  className="flex items-center gap-2 border-b-[2px] border-[#D3E97A]"
                >
                  Live Demo <ImArrowUpRight2 color="#D3E97A" />
                </a>
                <a
                  href="https://github.com/Isaac025/torri-gate-backend"
                  target="_blank"
                  className="flex items-center gap-2 border-b-[2px] border-[#D3E97A]"
                >
                  See on Github <FaGithub color="#D3E97A" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-15">
            <div className="bg-[#1A1A1A] md:w-[600px] md:h-[600px] w-[343px] h-[343px] rounded-[12px] flex items-center justify-center">
              <div className="flex items-center justify-center">
                <img
                  src={work2}
                  alt=""
                  className="max-w-[486px] w-full rounded-[10px]"
                />
              </div>
            </div>
            <div className="md:w-[576px] w-[343px]">
              <h1
                style={{ fontFamily: "'Manrope', sans-serif" }}
                className="font-medium text-[24px] md:text-[32px] text-[#FFFFFF]"
              >
                World News – MERN Stack Blog Platform
              </h1>
              <p className="w-full font-[400] text-[16px] md:text-[18px] text-[#C7C7C7] leading-[160%] md:leading-[150%]">
                Built a full-stack blog site using the MERN stack (MongoDB,
                Express, React, Node.js) featuring categorized content across
                Technology, Startups, Lifestyle, and Finance. Designed with a
                focus on clear structure and accessibility, the platform allows
                users to browse all blog posts and view detailed pages for each
                article.
              </p>
              <h3 className="text-[#FFFFFF] font-[600] md:text-[16px] uppercase my-[20px]">
                Project Info
              </h3>
              <hr className="border border-[#484848]" />
              <div className="text-[#FFFFFF] font-[600] md:text-[16px]  my-[20px] flex items-center justify-between">
                <p>Year</p>
                <p className="text-[#C7C7C7]">2025</p>
              </div>
              <hr className="border border-[#484848]" />
              <div className="text-[#FFFFFF] font-[600] md:text-[16px]  my-[20px] flex items-center justify-between">
                <p>Role</p>
                <p className="text-[#C7C7C7]">Full-stack Developer</p>
              </div>
              <hr className="border border-[#484848]" />
              <div className="flex items-center gap-4 uppercase text-[#D3E97A] mt-[40px]">
                <a
                  href="https://quick-blog-frontend-five.vercel.app/"
                  target="_blank"
                  className="flex items-center gap-2 border-b-[2px] border-[#D3E97A]"
                >
                  Live Demo <ImArrowUpRight2 color="#D3E97A" />
                </a>
                <a
                  href="https://github.com/Isaac025/Quick-Blog-Backend"
                  target="_blank"
                  className="flex items-center gap-2 border-b-[2px] border-[#D3E97A]"
                >
                  See on Github <FaGithub color="#D3E97A" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-15">
            <div className="bg-[#1A1A1A] md:w-[600px] md:h-[600px] w-[343px] h-[343px] rounded-[12px] flex items-center justify-center relative">
              <div className="bg-[#0A0A0A] w-[154px] h-[37px] rounded-[100px] flex items-center justify-center absolute top-[20px] left-[10px]">
                <h3
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                  className="text-[#FFFFFF] text-[14px] font-medium"
                >
                  Challenge
                </h3>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={work3}
                  alt=""
                  className="max-w-[486px] w-full rounded-[10px]"
                />
              </div>
            </div>
            <div className="md:w-[576px] w-[343px]">
              <h1
                style={{ fontFamily: "'Manrope', sans-serif" }}
                className="font-medium text-[24px] md:text-[32px] text-[#FFFFFF]"
              >
                Introducing TaskDuty – Your Ultimate Task Management Hub
              </h1>
              <p className="w-full font-[400] text-[16px] md:text-[18px] text-[#C7C7C7] leading-[160%] md:leading-[150%]">
                Teamed up with a designer to bring TaskDuty to life — a sleek,
                responsive web platform that empowers users to create, edit,
                delete, and manage all their tasks effortlessly. Featuring
                dynamic content capabilities and a clean interface, TaskDuty
                helps users stay organized and productive every step of the way.
              </p>
              <h3 className="text-[#FFFFFF] font-[600] md:text-[16px] uppercase my-[20px]">
                Project Info
              </h3>
              <hr className="border border-[#484848]" />
              <div className="text-[#FFFFFF] font-[600] md:text-[16px]  my-[20px] flex items-center justify-between">
                <p>Year</p>
                <p className="text-[#C7C7C7]">2025</p>
              </div>
              <hr className="border border-[#484848]" />
              <div className="text-[#FFFFFF] font-[600] md:text-[16px]  my-[20px] flex items-center justify-between">
                <p>Role</p>
                <p className="text-[#C7C7C7]">Full-Stack Developer</p>
              </div>
              <hr className="border border-[#484848]" />
              <div className="flex items-center gap-4 uppercase text-[#D3E97A] mt-[40px]">
                <a
                  href="https://task-duty-frontend-tan.vercel.app/"
                  target="_blank"
                  className="flex items-center gap-2 border-b-[2px] border-[#D3E97A]"
                >
                  Live Demo <ImArrowUpRight2 color="#D3E97A" />
                </a>
                <a
                  href="https://github.com/Isaac025/TaskDuty-Frontend"
                  target="_blank"
                  className="flex items-center gap-2 border-b-[2px] border-[#D3E97A]"
                >
                  See on Github <FaGithub color="#D3E97A" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr alt="" className="my-[50px] md:my-[80px] border border-[#484848]  " />
    </div>
  );
};

export default Featured;
