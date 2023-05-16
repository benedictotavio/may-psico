import "./app.css";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import { RoutesDOM } from "./routes";

export function App() {
  return (
    <>
      <Navbar />
      <div>
        <RoutesDOM />
      </div>
      <Footer />
    </>
  );
}
