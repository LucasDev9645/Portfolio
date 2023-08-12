import Tag from "../Tag";

import imageTest from "../assets/img/disney+ 1.png";
import imageSite from "../assets/img/pagina-da-internet 1.png";
import imageGit from "../assets/img/icons8-github-24 1.png";

import { Title } from "../styles/globalStyle";
import { ContainerButton, PortfolioContainer } from "./style";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: imageTest,
      title: "Ecommerce Games",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea reprehenderit in voluptate velit esse cillum dolore.",
    },
    {
      id: 2,
      image: imageTest,
      title: "Ecommerce Games",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea reprehenderit in voluptate velit esse cillum dolore.",
    },
    {
      id: 3,
      image: imageTest,
      title: "Ecommerce Games",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea reprehenderit in voluptate velit esse cillum dolore.",
    },
    {
      id: 4,
      image: imageTest,
      title: "Ecommerce Games",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea reprehenderit in voluptate velit esse cillum dolore.",
    },
    {
      id: 5,
      image: imageTest,
      title: "Ecommerce Games",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea reprehenderit in voluptate velit esse cillum dolore.",
    },
    {
      id: 6,
      image: imageTest,
      title: "Ecommerce Games",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea reprehenderit in voluptate velit esse cillum dolore.",
    },
  ];

  return (
    <>
      <PortfolioContainer className="container">
        <Title>Meus Projetos.</Title>
        <div>
          <ul>
            {projects.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt="" />
                <Tag>Html</Tag>
                <Tag>Css</Tag>
                <Tag>Javascript</Tag>
                <Tag>Gulp</Tag>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ContainerButton>
                  <button>
                    <img src={imageSite} alt="" />
                    Visitar Site
                  </button>
                  <button>
                    <img src={imageGit} alt="" />
                    Ver Código
                  </button>
                </ContainerButton>
              </li>
            ))}
          </ul>
        </div>
      </PortfolioContainer>
    </>
  );
};

export default Portfolio;
