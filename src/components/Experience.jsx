import React from "react";

const Experience = () => {
  return (
    <div id="work">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start md:justify-between gap-3">
          <h1
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            className="uppercase  font-[400] md:text-[50px] text-[35px] mb-4 leading-[90%] tracking-[0%] text-[#FFFFFF] "
          >
            My Experience
          </h1>
          <div
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            className="flex flex-col gap-8 md:w-[600px] w-[343px] "
          >
            <div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <h3 className="text-[#ffffff] text-[18px] md:text-[24px] font-medium">
                  Freelance Developer
                </h3>
                <p className="text-[#C7C7C7] text-[16px] md:text-[18px] font-[400]">
                  Nov 2025 — Present{" "}
                </p>
              </div>
              <p
                style={{ fontFamily: "'Manrope', sans-serif" }}
                className="text-[#C7C7C7] font-[400] text-[16px] md:text-[18px] mt-[15px]"
              >
                As a freelance developer, I architect and develop responsive,
                accessible web applications and websites using modern front-end
                and back-end technologies. I work directly with clients to
                gather requirements and deliver tailored, high-performance
                solutions that align with their business objectives and
                technical specifications.
              </p>
            </div>
            <div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <h3 className="text-[#ffffff] text-[18px] md:text-[24px] font-medium">
                  Full-Stack Intern
                </h3>
                <p className="text-[#C7C7C7] text-[16px] md:text-[18px] font-[400]">
                  Aug 2025 — Oct 2025
                </p>
              </div>
              <p className="text-[#D3E97A] text-[16px] md:text-[18px] font-[600] my-[15px] ">
                Tech. Studio
              </p>
              <p
                style={{ fontFamily: "'Manrope', sans-serif" }}
                className="text-[#C7C7C7] font-[400] text-[16px] md:text-[18px] "
              >
                As a full-stack intern, I support both front-end and back-end
                development by contributing to feature implementation,
                performance optimization, and codebase maintenance, while
                building hands-on experience with modern web technologies and
                development practices.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="border border-[#484848] my-[50px]" />
    </div>
  );
};

export default Experience;
