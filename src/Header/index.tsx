import logo from "../assets/img/logo1.svg";
import { HeaderStyle } from "./styled";

const Header = () => {
  return (
    <HeaderStyle>
      <div>
        <img src={logo} alt="" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="">Sobre Mim</a>
          </li>
          <li>
            <a href="">Serviços</a>
          </li>
          <li>
            <a href="">Portfólio</a>
          </li>
          <li>
            <a href="">Currículo</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
        </ul>
      </nav>
    </HeaderStyle>
  );
};

export default Header;
