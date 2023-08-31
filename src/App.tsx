import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import AboutMe from "./AboutMe";
import MyServices from "./MyServices";
import Portfolio from "./Portfolio";
import Curriculum from "./Curriculum";
import WorkTogether from "./WorkTogether";
// import Footer from "./Footer";

import GlobalStyle from "./styles/globalStyle";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre-mim" element={<AboutMe />} />
        <Route path="servicos" element={<MyServices />} />
        <Route path="projetos" element={<Portfolio />} />
        <Route path="curriculo" element={<Curriculum />} />
        <Route path="contato" element={<WorkTogether />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
