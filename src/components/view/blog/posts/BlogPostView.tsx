import { useParams } from "react-router-dom";
import data from "../../../../data/posts";
import styles from "./BlogPostView.module.css";
import { BlogPost } from "../../../../interfaces/blogpost.interface";

const BlogPostView = () => {
  const { id } = useParams<{ id: string }>();
  const idAsNumber: number = parseInt(id as string, 10);
  const dataPost: BlogPost = data[idAsNumber > 0 ? idAsNumber - 1 : 1];

  return (
    <section id={styles.blog_post}>
      <div id={styles.blog_image}>
        <figure>
          <img
            src={dataPost.img}
            alt={dataPost.altImage}
            className="img img-fluid rounded float-left"
          />
          <figcaption>
            <h1>{dataPost.title}</h1>
          </figcaption>
          <progress id="file" max="100" value="70" />
        </figure>
      </div>

      {/* Convert text string from posts to HTML text */}
      <div
        className="px-4"
        dangerouslySetInnerHTML={{ __html: dataPost.text }}
      ></div>
    </section>
  );
};

export default BlogPostView;
