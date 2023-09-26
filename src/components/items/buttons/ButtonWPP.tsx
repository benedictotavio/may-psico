import styles from "./ButtonWpp.module.css";

const ButtonWPP = () => {
  return (
    <a className={styles.btn_wpp_link} href="https://wa.link/m87fyg" target='blank' alt='button link to schedule a psychology session for Mayara Vieira' aria-label={`Learn more for psychology in ${window.location.hostname} `}>
      <button className={styles.btn_wpp}>
        Agendar uma consulta
      </button>
    </a>
  );
};

export default ButtonWPP;
