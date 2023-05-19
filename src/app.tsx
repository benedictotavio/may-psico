import "./app.css";
import Footer from "./components/layout/Footer";
import { RoutesDOM } from "./routes";

export function App() {
  return (
    <>
      <div>
        <RoutesDOM />
      </div>
      <Footer />
    </>
  );
}
