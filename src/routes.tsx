import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/layout/navbar/Navbar";
import ButtonFloat from "./components/items/buttons/ButtonFloat";
import Blog from "./pages/Blog";
import Footer from "./components/layout/footer/Footer";
import BlogPostView from "./components/view/blog/posts/BlogPostView";
import OtherServices from "./pages/OtherServices";
import Login from "./pages/admin/Login";

const routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ButtonFloat />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPostView />} />
        <Route path="/others" element={<OtherServices />} />
        <Route path="admin" element={<Login />} />
        <Route path="admin/posts" element={<h1>Admin</h1>} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export { routes as RoutesDOM };
