import carAgencyImage from "../assets/img/lfmotorsD1.png";
import gitHubImage from "../assets/img/github (4).png";
import findZipCodeImage from "../assets/img/busquecep.png";
import disneyImage from "../assets/img/disney+ 1.png";
import efoodImage from "../assets/img/efood.png";
import myBirthdayImage from "../assets/img/meu-niver.png";
import contactListsImage from "../assets/img/agenda.png";

export const projects = [
  {
    id: 1,
    image: efoodImage,
    skills: [
      "React",
      "Redux",
      "Typescript",
      "Styled-Components",
      "API",
      "Formik",
    ],
    title: "Efood",
    description:
      " A aplicação propõe uma cuidadosa seleção de estabelecimentos gastronômicos, apresentando seus requintados cardápios. Nesse espaço, é possível agregar itens ao carrinho e realizar o pagamento de maneira conveniente, por meio de transações eletrônicas utilizando cartão.",
    site: "https://projeto-efood.vercel.app/",
    code: "https://github.com/LucasDev9645/Projeto_Efood",
  },
  {
    id: 2,
    image: carAgencyImage,
    skills: ["Html", "Css", "Bootstrap"],
    title: "Agência de Carros Luxuosos",
    description:
      "A aplicação é um convite ao mundo da velocidade e elegância, uma landing page que exibe a coleção de carros esportivos de uma agência de luxo. Revela-se uma vitrine de máquinas poderosas, seus preços e breves narrativas que contam histórias de desempenho e estilo.",
    site: "https://projeto-agencia-carro-luxo.vercel.app",
    code: "https://github.com/LucasDev9645/Projeto_Agencia_Carro_Luxo",
  },
  {
    id: 3,
    image: disneyImage,
    skills: ["Html", "Css", "Javascript", "Sass", "Gulp"],
    title: "Clone Disney Plus",
    description:
      "A aplicação é uma viagem encantada ao universo Disney: uma mágica landing page onde planos e produtos se tornam portais para um mundo de aventuras e magia. Explore e descubra o encanto que te aguarda.",
    site: "https://clone-disneyplus-seven-omega.vercel.app/",
    code: "https://github.com/LucasDev9645/clone_disneyplus",
  },
  {
    id: 4,
    image: contactListsImage,
    skills: ["React", "Redux", "Typescript", "Styled-Components"],
    title: "Agenda de Contatos Online",
    description:
      "A aplicação oferece uma lista de contatos, possibilitando o cadastro, exclusão e edição de informações como nome, número e email. Os contatos são apresentados de forma organizada e visualmente atraente na tela.",
    site: "https://lista-contatos-online.vercel.app/",
    code: "https://github.com/LucasDev9645/Lista_Contatos_Online",
  },
  {
    id: 5,
    image: myBirthdayImage,
    skills: ["Html", "Sass", "Javascript", "Parcel"],
    title: "Meu Aniversário",
    description:
      "A aplicação tem por objetivo apresentar uma refinada contagem regressiva até a data especial do meu aniversário, revelando também o local onde será celebrado este momento memorável.",
    site: "https://projeto-meu-aniversario.vercel.app/",
    code: "https://github.com/LucasDev9645/projeto_meu_aniversario",
  },
  {
    id: 6,
    image: findZipCodeImage,
    skills: ["Html", "Css", "Javascript", "Api"],
    title: "Busca Cep",
    description:
      "A aplicação é uma bússola urbana: insira um código postal e número, desbloqueie a magia das ruas e cidades. Salve o caminho, trace suas histórias.",
    site: "https://busca-cep-gamma.vercel.app",
    code: "https://github.com/LucasDev9645/Busca_Cep",
  },
  {
    id: 7,
    image: gitHubImage,
    skills: ["React", "Typescript", "React-router-dom", "Api"],
    title: "Busca Github",
    description:
      "A aplicação oferece uma busca direta de usuários no GitHub: ao inserir um nome de usuário, revela informações essenciais como perfil, localidade, número de seguidores e nome associado. É uma ferramenta funcional e prática para explorar perfis na plataforma GitHub.",
    site: "https://projeto-github-react-ts.vercel.app",
    code: "https://github.com/LucasDev9645/Projeto_Github_ReactTs",
  },
];
