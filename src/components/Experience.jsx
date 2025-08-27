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
                  Nov 2023 — Present{" "}
                </p>
              </div>
              <p
                style={{ fontFamily: "'Manrope', sans-serif" }}
                className="text-[#C7C7C7] font-[400] text-[16px] md:text-[18px] mt-[15px]"
              >
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <h3 className="text-[#ffffff] text-[18px] md:text-[24px] font-medium">
                  Full-Stack Intern
                </h3>
                <p className="text-[#C7C7C7] text-[16px] md:text-[18px] font-[400]">
                  Aug 2025 — Present{" "}
                </p>
              </div>
              <p className="text-[#D3E97A] text-[16px] md:text-[18px] font-[600] my-[15px] ">
                Tech. Studio
              </p>
              <p
                style={{ fontFamily: "'Manrope', sans-serif" }}
                className="text-[#C7C7C7] font-[400] text-[16px] md:text-[18px] "
              >
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur.
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
