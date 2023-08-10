import { Link } from "react-router-dom";

import logo from "../assets/img/logo1.svg";

import { HeaderStyle } from "./styled";

const Header = () => {
  return (
    <HeaderStyle>
      <div>
        <Link to="/">
          <img src={logo} alt="logo do lucas freitas" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/sobre-mim">Sobre Mim</Link>
          </li>
          <li>
            <Link to="/servicos">Serviços</Link>
          </li>
          <li>
            <Link to="/projetos">Portfólio</Link>
          </li>
          <li>
            <Link to="/curriculo">Currículo</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </nav>
    </HeaderStyle>
  );
};

export default Header;
