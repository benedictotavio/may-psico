import BlogCard from "../items/cards/BlogCard";
import styles from "./Blogview.module.css";
import data from "../../data/posts"

const Blogview = () => {
  return (
    <div className={styles.content}>
      {
        data.map((posts) => (
          <BlogCard altImage={posts.altImage} datePost={posts.datePost} img={posts.img} text={posts.text} title={posts.title} />
        ))
      }
    </div>
  )
}

export default Blogview