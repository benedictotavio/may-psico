import BlogCard from "../items/cards/BlogCard";
import styles from "./Blogview.module.css";
import data from "../../data/posts"

const Blogview = () => {
  return (
    <div className={styles.content}>
      {
        data.map((posts,i) => (
          <BlogCard altImage={posts.altImage} datePost={posts.datePost} img={posts.img} text={posts.text} title={posts.title} key={i} id={i + 1}/>
        ))
      }
    </div>
  )
}

export default Blogview