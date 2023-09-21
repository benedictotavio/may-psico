import { FaWhatsapp } from "react-icons/fa";
import styles from "./ButtonFloat.module.css";

const ButtonFloat = () => {
  return (
    <>
      <a href="https://wa.link/m87fyg" className={styles.float} target="_blank">
          <FaWhatsapp />
      </a>
    </>
  );
};

export default ButtonFloat;
