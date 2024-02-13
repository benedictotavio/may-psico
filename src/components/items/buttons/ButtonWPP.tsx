import styles from "./ButtonWpp.module.css";

const ButtonWPP = ({text = "Agendar uma consulta"}: {text?: string}) => {
  return (
    <a className={styles.btn_wpp_link} href="https://wa.link/m87fyg" target='blank' alt='button link to schedule a psychology session for Mayara Vieira'>
      <button name="link" aria-label={text} className={styles.btn_wpp}>
        {text}
      </button>
    </a>
  );
};

export default ButtonWPP;
