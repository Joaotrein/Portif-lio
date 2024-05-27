import React from "react";
import { BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";
import { DiDjango } from "react-icons/di";
import { FaGitAlt, FaRProject } from "react-icons/fa";
import {
  IoLogoCss3,
  IoLogoDocker,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoPython,
  IoLogoReact,
} from "react-icons/io5";
import { SiFlask, SiMysql, SiPandas, SiScikitlearn } from "react-icons/si";
import { Skill, SkillsArea } from "./Style";

const Tecnologys = [
  {
    Name: "Javascript",
    Icon: <IoLogoJavascript fontSize="80px" color="yellow" />,
  },
  {
    Name: "Python",
    Icon: <IoLogoPython fontSize="80px" color="#2d77c0" />,
  },
  {
    Name: "HTML",
    Icon: <IoLogoHtml5 fontSize="80px" color="#dd4a24" />,
  },
  {
    Name: "CSS",
    Icon: <IoLogoCss3 fontSize="80px" color="#2862e9" />,
  },
  {
    Name: "R",
    Icon: <FaRProject fontSize="80px" color="#1d62b1" />,
  },
  {
    Name: "React",
    Icon: <IoLogoReact fontSize="80px" color="#00ffff" />,
  },
  {
    Name: "Nodejs",
    Icon: <IoLogoNodejs fontSize="80px" color="#629c4c" />,
  },

  {
    Name: "Pandas",
    Icon: <SiPandas fontSize="80px" color="#1a0f59" />,
  },
  {
    Name: "Scikitlearn",
    Icon: <SiScikitlearn fontSize="80px" color="#f09437" />,
  },
  // {
  //   Name: "Flask",
  //   Icon: <SiFlask fontSize="80px" color="#989898" />,
  // },
  // {
  //   Name: "Django",
  //   Icon: <DiDjango fontSize="80px" color="#003a28" />,
  // },
  {
    Name: "MongoDB",
    Icon: <BiLogoMongodb fontSize="80px" color="#06473c" />,
  },
  {
    Name: "Mysql",
    Icon: <SiMysql fontSize="80px" color="#005984" />,
  },
  {
    Name: "Postgresql",
    Icon: <BiLogoPostgresql fontSize="80px" color="#31648c" />,
  },
  // {
  //   Name: "Git",
  //   Icon: <FaGitAlt fontSize="80px" color="#f34f1f" />,
  // },
  // {
  //   Name: "Docker",
  //   Icon: <IoLogoDocker fontSize="80px" color="#0598c2" />,
  // },
];

const Skills = ({ id }) => {
  return (
    <>
      <SkillsArea id={id}>
        <h2>Technologies I am developing</h2>
        <Skill>
          {Tecnologys.map((item, index) => (
            <li key={index}>
              {item.Icon}
              <span>{item.Name}</span>
            </li>
          ))}
        </Skill>
      </SkillsArea>
    </>
  );
};

export default Skills;
