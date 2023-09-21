import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/layout/Navbar";
import ButtonFloat from "./components/items/buttons/ButtonFloat";
import Blog from "./pages/Blog";

const routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ButtonFloat />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export { routes as RoutesDOM };
