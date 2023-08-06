import { AcademicEducationStyle, ListAcademicEducation } from "./style";

const AcademicEducation = () => {
  return (
    <AcademicEducationStyle className="container">
      <h1>Serviços</h1>
      <ListAcademicEducation>
        <div>
          <h2>Desevolvimento de Sites</h2>
          <p>
            Desenvolvimento de sites empresariais. Faça sua empresa ser
            facilmente encontrada online.
          </p>
        </div>
        <div>
          <h2>Desenvolvimento de Aplicações Web</h2>
          <p>
            Desenvolvimento de aplicações web como sistemas de gerenciamento,
            feito sob medida.
          </p>
        </div>
        <div>
          <h2>Criação de Layouts</h2>
          <p>
            Criação de protótipos de interfaces web e mobile para validar sua
            ideia antes de por em prática.
          </p>
        </div>
      </ListAcademicEducation>
    </AcademicEducationStyle>
  );
};

export default AcademicEducation;
