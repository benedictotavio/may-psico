import styles from "./Navbar.module.css";
import img_logo from "../../assets/imgs/logo_2.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={img_logo} alt="" srcset="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#about">
                  Sobre mim
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#info_question">
                  Informações
                </a>
              </li>
              <li className="nav-item">
                <Link className = 'nav-link' to='/contact'>
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
