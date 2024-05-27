import React from "react";

import {
  AboutArea,
  AboutText,
  Photo,
  PhotoEffect,
  PhotoWrapper,
  SocialMidia,
} from "./Style";

import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

import Foto from "../../Assets/foto.webp";

const styleSocialMidia = {
  color: "white",
  fontSize: "50px",
  cursor: "pointer",
};

const SocialMidias = [
  {
    Icon: (
      <FaGithub
        style={styleSocialMidia}
        onMouseOver={({ target }) => (target.style.fill = "grey")}
        onMouseOut={({ target }) => (target.style.fill = "white")}
      />
    ),
    Link: "https://github.com/Joaotrein",
  },
  {
    Icon: (
      <FaLinkedin
        style={styleSocialMidia}
        onMouseOver={({ target }) => (target.style.fill = "#0077B3")}
        onMouseOut={({ target }) => (target.style.fill = "white")}
      />
    ),
    Link: "https://www.linkedin.com/in/joão-pedro-grahl-trein-11b65a239/",
  },
  {
    Icon: (
      <FaInstagramSquare
        style={styleSocialMidia}
        onMouseOver={({ target }) => (target.style.fill = "#E4405F")}
        onMouseOut={({ target }) => (target.style.fill = "white")}
      />
    ),
    Link: "https://www.instagram.com/jpgtrein/",
  },
];

const About = () => {
  return (
    <>
      <AboutArea>
        <AboutText>
          <h1>Hi! I'am João 👋</h1>
          <p>
            I am an SEO analyst and full-stack developer with a focus on data
            science and analysis. I have been in the programming field for 3
            years and have developed several projects. I have a great passion
            for Artificial Intelligence and machine learning, and I enjoy
            studying data mathematics in my spare time.
          </p>
          <SocialMidia>
            {SocialMidias.map((item, index) => (
              <a
                key={index}
                href={item.Link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.Icon}
              </a>
            ))}
          </SocialMidia>
        </AboutText>

        <PhotoWrapper>
          <PhotoEffect />
          <Photo src={Foto} alt="Foto João" />
        </PhotoWrapper>
      </AboutArea>
    </>
  );
};

export default About;
