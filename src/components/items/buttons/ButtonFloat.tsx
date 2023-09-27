import { FaWhatsapp } from "react-icons/fa";
import styles from "./ButtonFloat.module.css";

const ButtonFloat = () => {
  return (
    <>
      <a href="https://wa.link/m87fyg" className={styles.float} target="_blank" aria-label="talk with Mayara Vieira in WhatsApp">
          <FaWhatsapp />
      </a>
    </>
  );
};

export default ButtonFloat;
