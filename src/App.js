import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./Components/pages/Container";
import Home from "./Components/pages/Home";
import NoPage from "./Components/pages/NoPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./Components/pages/Formulario";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route index element={<Home />}></Route>
          <Route path= "contact" element={<Formulario />}></Route>
          <Route path="*" element={<NoPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
