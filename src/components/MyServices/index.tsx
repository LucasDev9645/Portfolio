import webDevelopmentImage from "../../assets/img/code-icon.svg";
import webLayoutImage from "../../assets/img/diamond-icon.svg";
import siteDevelopmentImage from "../../assets/img/terminal-icon.svg";

import { Title } from "../../styles/globalStyle";
import * as S from "./style";

const MyServices = () => {
  return (
    <S.ServicesStyle className="container">
      <Title>Serviços.</Title>
      <S.ListServices>
        <div>
          <img src={webDevelopmentImage} alt="ícone desenvolvimento de sites" />
          <h2>
            Desevolvimento de
            <br /> Sites
          </h2>
          <p>
            Desenvolvimento de sites empresariais. Faça sua empresa ser
            facilmente encontrada online.
          </p>
        </div>
        <div>
          <img
            src={siteDevelopmentImage}
            alt="ícone desenvolvimento de aplicações web"
          />
          <h2>
            Desenvolvimento de
            <br /> Aplicações Web
          </h2>
          <p>
            Desenvolvimento de aplicações web como sistemas de gerenciamento,
            feito sob medida.
          </p>
        </div>
        <div>
          <img src={webLayoutImage} alt="ícone criação de layouts" />
          <h2>
            Criação de
            <br /> Layouts
          </h2>
          <p>
            Criação de protótipos de interfaces web e mobile para validar sua
            ideia antes de por em prática.
          </p>
        </div>
      </S.ListServices>
    </S.ServicesStyle>
  );
};

export default MyServices;
