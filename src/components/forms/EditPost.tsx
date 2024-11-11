import { BlogPost } from "../../interfaces/blogpost.interface"
import styles from "./EditPost.module.css";

type EditPostProps = {
    post: BlogPost
}

const EditPost = ({ post }: EditPostProps) => {

    const handleDelete = () => {
        window.confirm("Tem certeza que deseja deletar essa postagem?") && window.location.reload();
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
    }

    return (
        <>
            <form onSubmit={handleSubmit} className={styles.form_edit}>
                <img src={post.img} alt={post.altImage} />
                <div>
                    <input type="text" id="title" value={post.title} />
                </div>
                <div>
                    <textarea className={styles.form_textarea} id="content" value={post.text} />
                </div>
                <div>
                    <input readOnly type="text" id="date" value={post.datePost.toLocaleDateString()} />
                </div>
                <div className={styles.form_buttons}>
                    <div>
                        <button type="submit">Salvar</button>
                    </div>
                    <div>
                        <button onClick={handleDelete}>Deletar</button>
                    </div>
                </div>
            </form>
        </>

    )
}

export default EditPost