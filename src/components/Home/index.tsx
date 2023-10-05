import { Link } from "react-router-dom";

import Button from "../Button";

import { Title } from "../../styles/globalStyle";
import * as S from "./style";

const Home = () => {
  return (
    <main className="container">
      <S.StyledHome>
        <h2>Hello,</h2>
        <Title>I am Lucas Freitas.</Title>
        <S.DescriptionHome>
          Olá! Sou um estudante entusiasmado de desenvolvimento frontend em
          busca da harmonia perfeita entre design e tecnologia. Minha jornada
          como aspirante a desenvolvedor frontend é impulsionada pelo desejo de
          criar experiências digitais que transcendam a estética convencional e
          ofereçam interações cativantes.
        </S.DescriptionHome>
        <Link to="/contato">
          <Button name="Entre em Contato" />
        </Link>
      </S.StyledHome>
    </main>
  );
};

export default Home;
