import styles from "./Footer.module.css";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <footer className="py-3 my-2 text-center">
        <h3>
          <b>Mayara Vieira</b>
        </h3>
        <ul className="nav justify-content-center border-bottom pt-md-4 pb-md-4 mb-3">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary"
            aria-label='Go to Home' >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              target="blank"
              href="https://www.linkedin.com/in/mayara-vieira-705728166/"
              className="nav-link px-2 text-body-secondary"
              aria-label='Go to Linkedin' 
            >
              Linkedin
            </a>
          </li>
        </ul>
        <p className="text-center text-body-secondary">
          © {new Date().getFullYear()} Company, Inc&nbsp;|&nbsp;
          <span>
            <a target="blank" href="https://github.com/otaviobenedicto">
              <i>
                <AiFillGithub />
              </i>
              Created BY
            </a>
          </span>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
