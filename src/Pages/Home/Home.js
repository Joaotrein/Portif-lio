import React from "react";
import Header from "../../Components/Header/Header";
import Projects from "../../Components/Projects/Projects";
import About from "../../Components/AboutMe/About";
import Curiosity from "../../Components/Curiosity/Curiosity";
import Skills from "../../Components/Skills/Skills";
import Experience from "../../Components/Experience/Experience";



function Home() {
  return (
    <>
      <Header />
      <About />
      <Curiosity />
      <Skills />
      <Experience />
      <Projects />
    </>
  );
}

export default Home;
