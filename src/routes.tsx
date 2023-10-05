import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import MyServices from "./components/MyServices";
import Portfolio from "./components/Portfolio";
import Curriculum from "./components/Curriculum";
import WorkTogether from "./components/WorkTogether";

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="sobre-mim" element={<AboutMe />} />
      <Route path="servicos" element={<MyServices />} />
      <Route path="projetos" element={<Portfolio />} />
      <Route path="curriculo" element={<Curriculum />} />
      <Route path="contato" element={<WorkTogether />} />
    </Routes>
  );
};

export default ApplicationRoutes;
