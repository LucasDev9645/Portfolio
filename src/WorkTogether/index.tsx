import { FormEvent, useState } from "react";
import EmailJSResponseStatus from "@emailjs/browser";

import Button from "../Button";

import { Title } from "../styles/globalStyle";
import { WorkTogetherStyle } from "./style";

type Props = {
  from_name: string;
  message: string;
  email: string;
};

const WorkTogether = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams: Props = {
      from_name: name,
      message: message,
      email: email,
    };

    EmailJSResponseStatus.send(
      "service_dlmarne",
      "template_6haczdp",
      templateParams,
      "Et8uGRogiBnaO0cJK"
    )
      .then(() => {
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  return (
    <WorkTogetherStyle className="container">
      <Title>Vamos Trabalhar Juntos?</Title>
      <div>
        <h1>
          Se você gostou do meu trabalho e deseja transformar sua ideia em
          realidade ou contar comigo em sua equipe, não hesite em entrar em
          contato! Estou ansioso para colaborar e juntos fazer grandes coisas
          acontecerem !
        </h1>
        <form onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <textarea
            placeholder="Sua Mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <Button name="Enviar Mensagem"></Button>
        </form>
      </div>
    </WorkTogetherStyle>
  );
};

export default WorkTogether;
