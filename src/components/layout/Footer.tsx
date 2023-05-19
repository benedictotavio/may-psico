import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <footer className="py-3 my-2 text-center">
        <h3>Mayara Viera</h3>
        <ul className="nav justify-content-center border-bottom pt-md-4 pb-md-4 mb-3">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Linkedin
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Instagram
            </a>
          </li>
        </ul>
        <p className="text-center text-body-secondary">© 2023 Company, Inc</p>
      </footer>
    </div>
  );
};

export default Footer;
