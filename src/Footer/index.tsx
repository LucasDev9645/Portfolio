import WhatsappImage from "../assets/img/icons8-whatsapp.svg";
import linkedinImage from "../assets/img/icons8-linkedin.svg";
import gitHubImage from "../assets/img/icons8-github.svg";

import { FooterStyle } from "./style";

const Footer = () => {
  return (
    <FooterStyle>
      <a href="https://wa.me/5531973041723">
        <img src={WhatsappImage} alt="ícone contato whatsapp" />
      </a>
      <a href="https://www.linkedin.com/in/lucas-dev-freitas">
        <img src={linkedinImage} alt="ícone de linkedim" />
      </a>
      <a href="https://github.com/LucasDev9645">
        <img src={gitHubImage} alt="ícone do github" />
      </a>
      <br /> Made by LucasFreitas - 2023
    </FooterStyle>
  );
};

export default Footer;
