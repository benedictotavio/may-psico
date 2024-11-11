import styles from "./MessageError.module.css";

type MessageErrorProps = {
    message: string;
    onClose?: () => void;
}
const MessageError = ({ message, onClose }: MessageErrorProps) => {

    const handleClose = () => {
        if (onClose) {
            onClose();
        }
    }

    return (
        <div className={styles.message_error}>
            <div className={styles.message_error_header}>
                <button onClick={handleClose}>X</button>
            </div>
            <p>{message}</p>
        </div>
    );
};

export default MessageError;