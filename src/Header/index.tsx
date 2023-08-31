import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/img/logo1.svg";

import { HeaderStyle } from "./styled";

const Header = () => {
  const [menuMobile, setMenuMobile] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = menuMobile ? "hidden" : "auto";
  }, [menuMobile]);

  return (
    <HeaderStyle>
      <div>
        <Link to="/">
          <img src={logo} alt="logo do lucas freitas" />
        </Link>
      </div>
      <div onClick={() => setMenuMobile(!menuMobile)} className="mobileMenu">
        <div className="hidden">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <nav className={`${menuMobile ? "active" : ""}`}>
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
      </div>
    </HeaderStyle>
  );
};

export default Header;
