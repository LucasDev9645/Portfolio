import imageCurriculum from "../assets/img/imagem.svg";
import imageSave from "../assets/img/save.svg";

import { Title } from "../styles/globalStyle";
import { StylesCurriculum, StylesCurriculumContainer } from "./style";

const Curriculum = () => {
  return (
    <StylesCurriculumContainer className="container">
      <Title>Currículo.</Title>
      <StylesCurriculum>
        <img src={imageCurriculum} alt="" />
        <div>
          <p>
            Nome
            <span>
              <b>Lucas freitas</b>
            </span>
          </p>

          <p>
            Idade
            <span>
              <b>26 anos</b>
            </span>
          </p>
          <p>
            Formação
            <span>
              <b>Engenharia de software-Unopar 2022</b>
            </span>
          </p>
          <p>
            Cidade
            <span>
              <b>Santa luzia-MG</b>
            </span>
          </p>
          <p>
            Telefone
            <span>
              <b>+55 (31) 97304-1723</b>
            </span>
          </p>
          <p>
            Email
            <span>
              <b>Lucasdev9645@gmail.com</b>
            </span>
          </p>
          <p>
            Exp
            <span>
              <b>
                Html, Css, React, VueJs, Styled-Components,
                <br /> JavaScript, Sass, Jest, Gulp, Grunt, TypeScript,
                Tailwind,
                <br />
                Bootstrap, NextJs, Redux, jQuery, Less, Git
              </b>
            </span>
          </p>
          <p>
            Idiomas
            <span>
              <b>Inglês(tecnico)</b>
            </span>
          </p>
          <button>
            <img src={imageSave} alt="" />
            Baixe meu currículo completo
          </button>
        </div>
      </StylesCurriculum>
    </StylesCurriculumContainer>
  );
};

export default Curriculum;
