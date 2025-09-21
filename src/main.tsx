import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Xmas from "./pages/Xmas";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="CREA">
        <Route index element={<Home />} />
        <Route path="inicio" element={<Home />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="sobre-nosotros" element={<About />} />
        <Route path="xmas" element={<Xmas />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
