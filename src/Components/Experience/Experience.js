import React from "react";
import { Card, CardText, ExperienceArea } from "./Style";
import LogoV4 from "../../Assets/LogoV4.webp";
import LogoConv from "../../Assets/conv-logo.webp";

const ExperienceList = [
  {
    Logo: LogoConv,
    Título: "SEO Analyst - Focus on Data - Intern",
    Habilidades: [
      "SEO Analytics with Programming",
      "Sheets and Execel analysis",
      "Machine learning models for SEO projections results",
      "SEMrush, Google Search Console, GA4, Screaming Frog",
    ],
    Tempo: "Aug 2024 - Present",
  },
  {
    Logo: LogoV4,
    Título: "SEO Analyst",
    Habilidades: [
      "Web Page optimizer",
      "Content Analyst",
      "SEO Content Writer",
      "SEO Analytics With Python",
      "SEMrush, Google Search Console, GA4, Screaming Frog",
    ],
    Tempo: "Jan 2023 - Jul 2024",
  },
];
const Experience = ({ id }) => {
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
