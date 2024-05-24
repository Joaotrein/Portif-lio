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

import { CiShare1 } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    Nome: "CriptoEduca",
    imagem: ProjetoCriptoeduca,
    Desc: "Esse projeto foi meu TCC do ensino médio técnico para desenvolvimento web. Ele consiste em uma trilha de aprendizagem com foco em ensinar aquelas pessoas que estão conhecendo o mundo das criptomoedas.Ele constitui vários tópicos informativos sobre o tema, além de um chatbot feito com DialogFlow e o uso de algumas APIs para enriquecer a experiência.",
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
    Desc: "Esse repositório compõe os meus principais projetos estudando sobre Pandas, uma biblioteca do Python para visualização e análise de dados muito utilizada na área de data science e análise de dados.",
    tags: ["Python", "Pandas", "Regex", "JSON", "CSV files", "Data Analysis"],
    link: "",
    showLink: false,
    Github: "https://github.com/Joaotrein/Pandas-Python-Lib",
  },
];

const Projects = ({ id }) => {
  return (
    <ProjectsArea id={id}>
      <h2>Projetos pessoais</h2>
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
