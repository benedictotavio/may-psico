import { BlogPost } from "../../interfaces/blogpost.interface"
import styles from "./EditPost.module.css";
import { AiFillDelete, AiFillSave } from "react-icons/ai";

type EditPostProps = {
    post: BlogPost
}

const EditPost = ({ post }: EditPostProps) => {

    const handleDelete = () => {
        window.confirm("Tem certeza que deseja deletar essa postagem?") ? window.location.reload() : null;
    }

    const handleSave = (e: any) => {
        e.preventDefault();
    }

    return (
        <>
            <form className={styles.form_edit}>
                <div className={styles.form_image}>
                    <img src={post.img} alt={post.altImage} />
                </div>
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
                    
                        <button type="submit" onClick={handleSave}>
                            <i>
                                <AiFillSave />
                            </i>
                            <span>
                                Salvar
                            </span>
                        </button>
                   
                        <button type="submit" onClick={handleDelete}>
                            <i>
                                <AiFillDelete />
                            </i>
                            <span>
                                Deletar
                            </span>
                        </button>
                </div>
            </form>
        </>

    )
}

export default EditPost