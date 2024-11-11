import BlogCard from "../../../items/cards/BlogCard";
import styles from "./Blogview.module.css";
import data from "../../../../data/posts";
import { BlogPost } from "../../../../interfaces/blogpost.interface";

const Blogview = () => {
  return (
    <div className={styles.content}>
      {data.length > 0 ? (
        data.map((posts: BlogPost, i: number) => (
          <BlogCard
            altImage={posts.altImage}
            datePost={posts.datePost}
            img={posts.img}
            text={posts.text}
            title={posts.title}
            key={i}
            id={i + 1}
          />
        ))
      ) : (
        <h2>Não existem posts disponiveis!</h2>
      )}
    </div>
  );
};

export default Blogview;
