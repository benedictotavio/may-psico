import { useMemo, useState } from "preact/hooks";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { NavLink, useParams } from "react-router-dom";
import styles from "./PostsSectionView.module.css";
import { BlogPost } from "../../../interfaces/blogpost.interface";
import data from "../../../data/posts";
import EditPost from "../../forms/EditPost";

const PostsSectionView = () => {
    const { id } = useParams();
    const [post, setPost] = useState<BlogPost | null>(null);

    const postData = () => {
        const foundPost = data.find((post) => post.id === Number(id));
        setPost(foundPost || null);
    }

    useMemo(() => {
        postData();
    }, [id])

    return (
        <div className={styles.post_section}>
            <div>
                <button className={styles.button_back}>
                    <NavLink to="/admin/posts">
                        <p>
                            <IoChevronBackCircleOutline size={32} />
                            Voltar
                        </p>
                    </NavLink>
                </button>
            </div>
            <div>
                <h1>Postagem</h1>
                {
                    post && (
                        <div>
                            <img src={post.img} alt={post.altImage} />
                            <EditPost post={post} />
                        </div>
                    )
                }
            </div>
            <div>
                <button>
                    Salvar
                </button>
                <button>
                    Excluir
                </button>
            </div>
        </div>
    )
};

export default PostsSectionView;