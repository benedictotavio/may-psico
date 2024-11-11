import { useState } from "preact/hooks";
import styles from "./LoginForm.module.css";
import MessageError from "../items/messages/MessageError";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: Event) => {
        e.preventDefault();

        if (isFieldsValid(email, password)) {
            window.location.href = "/admin/posts";
        }
    }

    const isFieldsValid = (email: string, password: string): boolean => {
        console.log(email, password);

        if (email === "" || password === "") {
            setErrorMessage("Por favor, preencha todos os campos");
            setError(true);
            return false;
        }

        if (email != import.meta.env.VITE_REACT_APP_USERNAME || password != import.meta.env.VITE_REACT_APP_PASSWORD) {
            setErrorMessage("Email ou senha inválidos");
            setError(true);
            return false;
        }

        setError(false);
        return true;
    }

    return (
        <form className={styles.login_form} onSubmit={handleSubmit}>
            <input type="text" value={email} placeholder="Email" onChange={e => setEmail((e.target as HTMLInputElement).value)} />
            <input type="password" value={password} placeholder="Senha" onChange={e => setPassword((e.target as HTMLInputElement).value)} />
            <input type="submit" value="Entrar" />
            {error && <MessageError message={errorMessage} onClose={() => setError(false)} />}
        </form>
    )
}
export default LoginForm;
