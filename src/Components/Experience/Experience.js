import React from "react";
import { Card, CardText, ExperienceArea } from "./Style";
import LogoV4 from "../../Assets/LogoV4.webp";

const ExperienceList = [
  {
    Logo: LogoV4,
    Título: "Analista de SEO",
    Habilidades: [
      "Otimizador de páginas web",
      "Analista de Conteúdo",
      "Redator SEO",
      "SEO Analytics com Python",
      "SEMrush, Google Search Console, GA4, Screaming Frog",
    ],
    Tempo: "Jan 2023 - Presente",
  },
];
const Experience = () => {
  return (
    <>
      <ExperienceArea>
        <h2>Experiências profissionais</h2>
        {ExperienceList.map((item) => (
          <Card>
            <img src={item.Logo} alt="Logo da empresa" />
            <CardText>
              <h3>{item.Título}</h3>
              <ul>
                {item.Habilidades.map((habilidade, idx) => (
                  <li key={idx}>{habilidade}</li>
                ))}
              </ul>
            </CardText>
            <span>{item.Tempo}</span>
          </Card>
        ))}
      </ExperienceArea>
    </>
  );
};

export default Experience;
