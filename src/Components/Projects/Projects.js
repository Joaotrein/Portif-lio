import {
  ProjectCardText,
  ProjectImage,
  ProjectsArea,
  ProjectsCard,
  Tag,
  TagsContainer,
} from "./Style";
import ProjetoCriptoeduca from "../../Assets/Projeto-criptoeduca.webp";
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
    link: "https://youtube.com",
    Github: "https://github.com/Joaotrein/ProjetoCriptomoeda",
  },
];

const Projects = () => {
  return (
    <ProjectsArea>
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

            <a href={item.link} target="_blank" rel="noreferrer">
              <CiShare1 color="white" fontSize="30px" />
            </a>
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
