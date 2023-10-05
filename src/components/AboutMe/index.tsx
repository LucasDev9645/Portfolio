import TagSkills from "../TagSkills";
import { listSkills } from "../../util/skills";

import photo from "../../assets/img/foto-perfil.png";

import { Title } from "../../styles/globalStyle";
import * as S from "./style";

const AboutMe = () => {
  return (
    <>
      <S.AboutMeStyled className="container">
        <div>
          <Title>Sobre Mim.</Title>
          <p>
            Apresento-me como Lucas Freitas, um jovem sonhador, dedicado ao
            aprimoramento constante no desenvolvimento web ao longo de um ano.
            Atualmente, persigo minha graduação em engenharia de software,
            visando aprofundar meus conhecimentos e enriquecer minha trajetória
            profissional.
          </p>
        </div>
        <S.Box>
          <img src={photo} alt="foto lucas freitas" />
        </S.Box>
      </S.AboutMeStyled>
      <S.FormationStyled className="container">
        <div>
          <h1>Habilidades.</h1>
          {listSkills.map((skill) => (
            <TagSkills key={skill}>{skill}</TagSkills>
          ))}
        </div>
      </S.FormationStyled>
    </>
  );
};

export default AboutMe;
