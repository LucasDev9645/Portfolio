import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import ApplicationRoutes from "./routes";

import GlobalStyle from "./styles/globalStyle";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <ApplicationRoutes />
    </BrowserRouter>
  );
};

export default App;
