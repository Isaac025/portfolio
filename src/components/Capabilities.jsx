import React from "react";
import profile from "../assets/hero2.png";

const Capabilities = () => {
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "REACT",
    "Accessibility",
    "NodeJs",
    "Tailwind Css",
  ];

  return (
    <div>
      <div className="container">
        <img
          src={profile}
          alt=""
          className="my-[50px] md:my-[60px] mx-auto rounded-[10px] max-w-[90%] w-full"
        />
        <div className="flex flex-col md:flex-row items-start md:justify-between gap-3">
          <h1
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            className="uppercase  font-[400] md:text-[50px] text-[35px] mb-4 leading-[90%] tracking-[0%] text-[#FFFFFF] "
          >
            My Capabilities
          </h1>
          <div className="flex flex-col gap-4">
            <p className="font-[400] text-[16px] md:text-[18px] leading-[160%] tracking-[0%] md:leading-[150%] text-[#C7C7C7] md:w-[600px] w-[343px]">
              I’m always looking to add more to my skills as a MERN stack
              full-stack developer, I build responsive web applications, work on
              both frontend design and backend logic, and continuously explore
              new technologies to grow as a developer.
            </p>
            <div className="flex flex-wrap gap-4 md:w-[600px] w-[343px]">
              {skills.map((skill, index) => {
                return (
                  <div
                    key={index}
                    className="border border-[#484848] md:w-[124px] w-[102px] md:h-[56px] h-[46px] rounded-[100px] flex items-center justify-center"
                  >
                    <p
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      className="text-[#FFFFFF] font-[700] text-[14px] md:text-[16px] uppercase "
                    >
                      {skill}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <hr className="border border-[#484848] my-[50px]" />
    </div>
  );
};

export default Capabilities;
