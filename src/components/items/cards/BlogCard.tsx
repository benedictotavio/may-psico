import styles from "./BlogCard.module.css";
import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from 'react-icons/hi2'
import { useEffect, useState } from "preact/hooks";
import Loading from "../../layout/loading/Loading";
import { BlogPost } from "../../../interfaces/blogpost.interface";

const BlogCard = ({ title, img, altImage, text, datePost, id }: BlogPost) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1350);
    }, []);

    return (
        <div className={`${styles.card_content} card`}>
            {isLoading ? <Loading /> : <><div className={styles.card_img}>
                <img className="card-img-top" src={img || 'https://images.pexels.com/photos/4471315/pexels-photo-4471315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&ddr=1'} alt={altImage} />
            </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text" dangerouslySetInnerHTML={{ __html: text.split('.').slice(0, 3).join(".") + '...' }}></p>
                    <p className="card-text"><small className="text-muted">Post enviado em {datePost ? datePost.toLocaleDateString('pt', {
                        dateStyle: 'long'
                    }) : new Date().toLocaleDateString('pt', {
                        dateStyle: 'long'
                    })}</small></p>
                    <Link to={`/blog/${id}`}>
                        <button className="btn btn-primary btn-sm float-right">
                            Leia mais <HiOutlineArrowLongRight />
                        </button>
                    </Link>
                </div>
                </>
            }
        </div>
    )
}
export default BlogCard

