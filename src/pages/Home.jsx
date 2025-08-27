import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import About from "../components/About";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Featured />
      <About />
      <Contact />
    </>
  );
};

export default Home;
