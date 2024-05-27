import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { HeadContainer } from "./Style";
import CV from "../../Currículo - ADP - Intern.pdf";

function Header() {
  return (
    <>
      <HeadContainer>
        <nav>
          <ScrollLink to="curiosidades" smooth={true} duration={500}>
            About
          </ScrollLink>
          <ScrollLink to="habilidades" smooth={true} duration={500}>
            Skills
          </ScrollLink>
          <ScrollLink to="experiencia" smooth={true} duration={500}>
            Experience
          </ScrollLink>
          <ScrollLink to="projetos" smooth={true} duration={500}>
            Projects
          </ScrollLink>
          {/* <ScrollLink to="contato" smooth={true} duration={500}>
            Contato
          </ScrollLink> */}
          <span>|</span>
          <a
            href={CV}
            download="Resume - João Trein"
            target="_blank"
            rel="noreferrer"
          >
            <button>Download Resume</button>
          </a>
        </nav>
      </HeadContainer>
    </>
  );
}

export default Header;
