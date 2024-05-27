import React from "react";
import { Card, CardText, ExperienceArea } from "./Style";
import LogoV4 from "../../Assets/LogoV4.webp";

const ExperienceList = [
  {
    Logo: LogoV4,
    Título: "SEO Analyst",
    Habilidades: [
      "Web Page optimizer",
      "Content Analyst",
      "SEO Content Writer",
      "SEO Analytics com Python",
      "SEMrush, Google Search Console, GA4, Screaming Frog",
    ],
    Tempo: "Jan 2023 - Present",
  },
];
const Experience = ({id}) => {
  return (
    <>
      <ExperienceArea id={id}>
        <h2>Professional Experience</h2>
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
