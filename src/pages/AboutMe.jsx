import React from "react";
import Nav from "../components/Nav";
import Aboutme from "../components/Aboutme";
import Capabilities from "../components/Capabilities";
import Contact from "../components/Contact";
import Experience from "../components/Experience";

const AboutMe = () => {
  return (
    <>
      <Nav />
      <Aboutme />
      <Capabilities />
      <Experience />
      <Contact />
    </>
  );
};

export default AboutMe;
