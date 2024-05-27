import {
  ProjectCardText,
  ProjectImage,
  ProjectsArea,
  ProjectsCard,
  Tag,
  TagsContainer,
} from "./Style";
import ProjetoCriptoeduca from "../../Assets/Projeto-criptoeduca.webp";
import ProjetoPandas from "../../Assets/foto-pandas.webp";
import ProjetoSKlearn from "../../Assets/sklearn-foto.webp";

import { CiShare1 } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    Nome: "CriptoEduca",
    imagem: ProjetoCriptoeduca,
    Desc: "This project was my technical high school final project for web development. It consists of a learning path focused on teaching people who are new to the world of cryptocurrencies. It includes various informative topics on the subject, as well as a chatbot created with DialogFlow and the use of several APIs to enhance the experience.",
    tags: [
      "ReactJs",
      "Styled-Components",
      "MongoDb",
      "Express",
      "CORS",
      "JSON",
      "API Requests",
      "DialogFlow",
    ],
    link: "https://projetocriptomoeda-front.onrender.com",
    showLink: true,
    Github: "https://github.com/Joaotrein/ProjetoCriptomoeda",
  },
  {
    Nome: "Pandas",
    imagem: ProjetoPandas,
    Desc: "This repository contains my main projects studying Pandas, a Python library widely used for data visualization and analysis in the fields of data science and data analysis.",
    tags: ["Python", "Pandas", "Regex", "JSON", "CSV files", "Data Analysis"],
    link: "",
    showLink: false,
    Github: "https://github.com/Joaotrein/Pandas-Python-Lib",
  },
  {
    Nome: "SKLearn",
    imagem: ProjetoSKlearn,
    Desc: "This repository serves as a comprehensive collection of my primary projects dedicated to studying SKLearn, a Python library extensively employed in the realms of data science and analysis. It encapsulates a diverse range of projects aimed at exploring SKLearn's functionalities. Through this repository, I aim to document my journey of mastering SKLearn",
    tags: [
      "Python",
      "Pandas",
      "SKlearn",
      "Machine Learning",
      "Clusters",
      "JSON",
      "CSV files",
      "Data Analysis",
      "LinearSVC",
      "Accuracy Score",
      "Plots",
      "Standard Scaler",
    ],
    link: "",
    showLink: false,
    Github: "https://github.com/Joaotrein/SKlearn",
  },
];

const Projects = ({ id }) => {
  return (
    <ProjectsArea id={id}>
      <h2>Personal Projects</h2>
      {projects.map((item, index) => (
        <ProjectsCard key={index}>
          <ProjectCardText>
            <h3>{item.Nome}</h3>
            <p>{item.Desc}</p>
            <TagsContainer>
              {item.tags.map((tag, tagIndex) => (
                <Tag key={tagIndex}>{tag}</Tag>
              ))}
            </TagsContainer>
            <p>Click below!</p>
            {item.showLink ? (
              <a href={item.link} target="_blank" rel="noreferrer">
                <CiShare1 color="white" fontSize="30px" />
              </a>
            ) : null}
            <a href={item.Github} target="_blank" rel="noreferrer">
              <FaGithub color="white" fontSize="30px" />
            </a>
          </ProjectCardText>
          <ProjectImage>
            <img src={item.imagem} alt="Projects" />
          </ProjectImage>
        </ProjectsCard>
      ))}
    </ProjectsArea>
  );
};

export default Projects;
