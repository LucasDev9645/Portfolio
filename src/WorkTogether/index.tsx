import Button from "../Button";
import { Title } from "../styles/globalStyle";
import { WorkTogetherStyle } from "./style";

const WorkTogether = () => {
  return (
    <WorkTogetherStyle className="container">
      <Title>Vamos Trabalhar Juntos.</Title>
      <form>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Sua Mensagem..." />
        <Button name="Enviar Mensagem"></Button>
      </form>
    </WorkTogetherStyle>
  );
};

export default WorkTogether;
