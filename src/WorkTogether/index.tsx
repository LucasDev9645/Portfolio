import { FormEvent, useState } from "react";
import EmailJSResponseStatus from "@emailjs/browser";

import Button from "../Button";
import { emailRegex } from "../util/validate";

import WhatsappImage from "../assets/img/icons8-whatsapp.svg";
import linkedinImage from "../assets/img/icons8-linkedin.svg";
import gitHubImage from "../assets/img/icons8-github.svg";

import { Title } from "../styles/globalStyle";
import { MyContact, WorkTogetherStyle } from "./style";

type Props = {
  from_name: string;
  message: string;
  email: string;
};

const WorkTogether = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(false);

  function validateEmail() {
    if (!emailRegex.test(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  }

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
      <Title>Entre em Contato.</Title>
      <div>
        <form onSubmit={sendEmail}>
          <input
            required
            type="text"
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            required
            type="text"
            placeholder="Email"
            onBlur={validateEmail}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {emailError && <p className="styleError">E-mail Inválido</p>}
          <textarea
            required
            placeholder="Sua Mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <Button name="Enviar Mensagem" disabled={emailError}></Button>
        </form>
      </div>

      <MyContact>
        <a href="https://wa.me/5531973041723">
          <img src={WhatsappImage} alt="ícone contato whatsapp" />
        </a>
        <a href="https://www.linkedin.com/in/lucas-dev-freitas">
          <img src={linkedinImage} alt="ícone de linkedim" />
        </a>
        <a href="https://github.com/LucasDev9645">
          <img src={gitHubImage} alt="ícone do github" />
        </a>
      </MyContact>
    </WorkTogetherStyle>
  );
};

export default WorkTogether;
