import AboutMe from "../AboutMe";
import AcademicEducation from "../AcademicEducation";
import Button from "../Button";
import Header from "../Header";

import { DescriptionHome, StyledHome, TitleHome } from "./style";

const Home = () => {
  return (
    <>
      <main className="container">
        <StyledHome>
          <h2>Hello,</h2>
          <TitleHome>I am Lucas Freitas.</TitleHome>
          <DescriptionHome>
            Olá! Sou um estudante entusiasmado de desenvolvimento frontend em
            busca da harmonia perfeita entre design e tecnologia. Minha jornada
            como aspirante a desenvolvedor frontend é impulsionada pelo desejo
            de criar experiências digitais que transcendam a estética
            convencional e ofereçam interações cativantes.
          </DescriptionHome>
          <Button name="Entre em Contato" />
        </StyledHome>
      </main>
      <Header />
      <AboutMe />
      <AcademicEducation />
    </>
  );
};

export default Home;
