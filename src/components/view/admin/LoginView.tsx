import LoginForm from "../../forms/LoginForm";
import styles from "./LoginView.module.css";

const LoginView = () => {
    return (
        <div className={styles.login_view}>
            <LoginForm />
        </div>
    );
};

export default LoginView;