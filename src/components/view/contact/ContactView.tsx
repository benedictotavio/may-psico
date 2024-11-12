import ContactForm from "../../forms/ContactForm";
import styles from "./ContactView.module.css";

const ContactView = () => {
  return (
    <div className={styles.contact_view}>
      <ContactForm />
    </div>
  );
};

export default ContactView;