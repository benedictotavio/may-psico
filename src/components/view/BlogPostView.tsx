import { useParams } from "react-router-dom";
import data from '../../data/posts'
import styles from './BlogPostView.module.css'
const BlogPostView = () => {

  const { id } = useParams<{ id: string }>();
  const idAsNumber = parseInt(id as string, 10);
  const dataPost = data[idAsNumber > 0 ? idAsNumber - 1 : 1];
  return (
    <section id={styles.blog_post}>
      <div className='d-flex justify-content-center'>
        <figure>
          <img src={dataPost.img} width={window.innerWidth * 0.35} className='img img-fluid rounded float-left' />
          <figcaption>
            <h1>{dataPost.title}</h1>
          </figcaption>
          <progress id="file" max="100" value="70">70%</progress>
        </figure>
      </div>
      <div className='px-4 text-justify'>
        <p>{dataPost.text}</p>
      </div>
    </section>
  )

}

export default BlogPostView