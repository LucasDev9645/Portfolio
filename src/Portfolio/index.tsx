import { projects } from "../util/projects";
import Tag from "../Tag";

import imageSite from "../assets/img/pagina-da-internet 1.png";
import imageGit from "../assets/img/icons8-github-24 1.png";

import { Title } from "../styles/globalStyle";
import { ContainerButton, PortfolioContainer, ProjectImage } from "./style";

const Portfolio = () => {
  return (
    <PortfolioContainer className="container">
      <Title>Meus Projetos.</Title>
      <div>
        <ul>
          {projects.map((item) => (
            <li key={item.id}>
              <ProjectImage src={item.image} alt={item.title} />

              {item.skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ContainerButton>
                <button onClick={() => window.open(item.site, "_blank")}>
                  <img src={imageSite} alt="" />
                  Visitar Site
                </button>
                <button onClick={() => window.open(item.code, "_blank")}>
                  <img src={imageGit} alt="" />
                  Ver Código
                </button>
              </ContainerButton>
            </li>
          ))}
        </ul>
      </div>
    </PortfolioContainer>
  );
};

export default Portfolio;
