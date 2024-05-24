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
          <h1>Olá! Eu sou o João 👋</h1>
          <p>
            Eu sou analista de SEO e desenvolvedor fullstack com foco em ciência
            e análise de dados. Estou na área da programação há 3 anos e já
            desenvolvi diversos projetos. Tenho uma grande paixão por
            Inteligência Artificial e aprendizado de máquinas e gosto de estudar
            matemática para dados nas horas vagas.
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
