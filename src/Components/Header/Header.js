import React from "react";
import { HeadContainer } from "./Style";
import CV from "../../Currículo - ADP - Intern.pdf"

function Header() {
  return (
    <>
      <HeadContainer>
        <nav>
          <a href="a">Sobre</a>
          <a href="a">Habilidades</a>
          <a href="a">Experiência</a>
          <a href="a">Projetos</a>
          <a href="a">Contato</a>
          <span>|</span>
          <a href={CV} download="Resume - João Trein" target="_blank" rel="noreferrer">
            <button>Baixar CV</button>
          </a>
        </nav>
      </HeadContainer>
    </>
  );
}

export default Header;
