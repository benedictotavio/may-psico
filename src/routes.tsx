import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/layout/Navbar";
import ButtonFloat from "./components/buttons/ButtonFloat";

const routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ButtonFloat />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export { routes as RoutesDOM };
