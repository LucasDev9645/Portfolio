import photo from "../assets/img/foto-perfil.png";
import { AboutMeStyled, Box } from "./style";

const AboutMe = () => {
  return (
    <AboutMeStyled className="container">
      <div>
        <h1>Sobre Mim</h1>
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
  );
};

export default AboutMe;
