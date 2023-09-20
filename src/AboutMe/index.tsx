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
            Sou Lucas Freitas um jovem sonhador em busca de uma oportunidade,
            estou estudando constantemente desenvolvimento web a 1 ano. e também
            faço graduação em engenharia de software buscando me aprofundar mais
            em conhecimentos para agregar em minha carreira profissional.
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
