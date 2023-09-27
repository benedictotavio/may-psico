import styles from "./Navbar.module.css";
import img_logo_60 from "../../assets/imgs/media/logo_60w.jpg";
import img_logo from "../../assets/imgs/media/logo_75w.jpg";
import { Link } from "react-router-dom";
import { useState } from "preact/hooks";

const Navbar = () => {
  const [navbarEnabled, setNavbarEnabled] = useState(false);
  // console.log(navbarEnabled);
  // const toggleNavbar = () => {
  //   setNavbarEnabled(!navbarEnabled);
  // };

  return (
    <header className={styles.navbar}>

      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={img_logo} alt="image logo for Mayara Vieira Pyschology" aria-label={`Learn more for psychology in ${window.location.hostname} `} srcSet={`${img_logo_60} 35w, ${img_logo} 1250w`} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={navbarEnabled}
            aria-label="Toggle navigation"
            onClick={() => setNavbarEnabled(true)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={navbarEnabled ? "navbar-collapse collapse show" : "navbar-collapse collapse"} id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#home" onClick={() => setNavbarEnabled(false)}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#about" onClick={() => setNavbarEnabled(false)}>
                  Sobre mim
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#info_question" onClick={() => setNavbarEnabled(false)}>
                  Informações
                </a>
              </li>
              <li>
                <Link className='nav-link' to='/contact' onClick={() => setNavbarEnabled(false)}>
                  Contato
                </Link>
              </li>
              <li>
                <Link className='nav-link' to='/blog' onClick={() => setNavbarEnabled(false)}>
                  Blog
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
