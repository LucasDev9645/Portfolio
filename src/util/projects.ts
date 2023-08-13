import carAgencyImage from "../assets/img/lfmotorsD1.png";
import gitHubImage from "../assets/img/github (4).png";
import findZipCodeImage from "../assets/img/busquecep.png";
import disneyImage from "../assets/img/disney+ 1.png";
import todoListImage from "../assets/img/todolist1.png";
import contactListImage from "../assets/img/Screenshot_1 (2).png";

export const projects = [
  {
    id: 1,
    image: carAgencyImage,
    skills: ["Html", "Css", "Bootstrap"],
    title: "Agência de Carros Luxuosos",
    description:
      "A aplicação consiste em uma landing page de uma agência luxuosa de carros esportivos, onde podemos ver veículos, preços, e algumas descrições.",
    site: "https://projeto-agencia-carro-luxo.vercel.app",
    code: "https://github.com/LucasDev9645/Projeto_Agencia_Carro_Luxo",
  },
  {
    id: 2,
    image: gitHubImage,
    skills: ["React", "Typescript", "React-router-dom", "Api"],
    title: "Busca Github",
    description:
      "A aplicação consiste em uma busca de dados de usuários no github , onde podemos ver perfil, localidade, seguidores e nome.",
    site: "https://projeto-github-react-ts.vercel.app",
    code: "https://github.com/LucasDev9645/Projeto_Github_ReactTs",
  },
  {
    id: 3,
    image: findZipCodeImage,
    skills: ["Html", "Css", "Javascript", "Api"],
    title: "Busca Cep",
    description:
      "A aplicação é um buscador de cep, onde digita um cep e número então e feita uma validação, e retornado a rua e cidade então podemos salvar o endereço.",
    site: "https://busca-cep-gamma.vercel.app",
    code: "https://github.com/LucasDev9645/Busca_Cep",
  },
  {
    id: 4,
    image: disneyImage,
    skills: ["Html", "Css", "Javascript", "Sass", "Gulp"],
    title: "Clone Disney Plus",
    description:
      "A aplicação consiste em um clone da landing page do Disney+ , onde podemos ver os produtos e planos da disney.",
    site: "https://clone-disneyplus-seven-omega.vercel.app/",
    code: "https://github.com/LucasDev9645/clone_disneyplus",
  },
  {
    id: 5,
    image: todoListImage,
    skills: ["React", "Redux", "Typescript", "Styled-Components"],
    title: "To-do List",
    description:
      "A aplicação é um To-do List, onde podemos salvar tarefas, editar, apagar, colocar prioridades, marca tarefa como concluída.",
    site: "https://projeto-to-do-list-eight.vercel.app",
    code: "https://github.com/LucasDev9645/Projeto_To-do_List",
  },
  {
    id: 6,
    image: contactListImage,
    skills: ["Html", "Css", "Javascript"],
    title: "Agenda de Contatos",
    description:
      "A aplicação consiste em uma Lista de contatos com nome e número, onde podemos cadastrar contatos na lista e são mostrados em tela.",
    site: "https://agenda-contato-eight.vercel.app/",
    code: "https://github.com/LucasDev9645/Agenda_Contato",
  },
];
