import TagSkills from "../TagSkills";
import photo from "../assets/img/foto-perfil.png";

import { Title } from "../styles/globalStyle";
import { listSkills } from "../util/skills";
import { AboutMeStyled, Box, FormationStyled } from "./style";

const AboutMe = () => {
  return (
    <>
      <AboutMeStyled className="container">
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
        <Box>
          <img src={photo} alt="foto lucas freitas" />
        </Box>
      </AboutMeStyled>
      <FormationStyled className="container">
        <div>
          <h1>Habilidades.</h1>
          {listSkills.map((skill) => (
            <TagSkills key={skill}>{skill}</TagSkills>
          ))}
        </div>
      </FormationStyled>
    </>
  );
};

export default AboutMe;
