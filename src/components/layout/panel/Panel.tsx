import { NavLink } from "react-router-dom";
import { BlogPost } from "../../../interfaces/blogpost.interface";
import styles from "./Panel.module.css"
import { GrView } from "react-icons/gr";

interface IPanelProps {
  items: BlogPost[];
}

const Panel = ({ items }: IPanelProps) => {
  return (
    <div className={styles.panel}>
      <table className="table">
        <thead className={styles.table_header}>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Image</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody class={styles.table_body}>
          {items.length > 0 ? (
            items.map((item) => (
              <tr scope="row" key={item.id}>
                <td>{item.id}</td>
                <td>
                  <div>
                    <div>
                      <p>{item.title}</p>
                    </div>
                    <div>
                      <NavLink to={`/admin/posts/${item.id}`}>
                        <button className={styles.btn_view_table}>
                          <i>
                            <GrView />
                          </i>
                          <span>Visualizar</span>
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </td>
                <td>
                  <img src={item.img} alt={item.altImage} style={{ width: '100px', height: 'auto' }} />
                </td>
                <td>{item.datePost.toLocaleDateString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>No blog posts available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Panel;
