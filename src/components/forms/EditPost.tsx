import { BlogPost } from "../../interfaces/blogpost.interface"

type EditPostProps = {
    post: BlogPost
}

const EditPost = ({ post }: EditPostProps) => {
    return (
        <form onSubmit={() => {}}>
            <div>
                <input type="text" id="title" value={post.title} />
            </div>
            <div>
                <textarea id="content" value={post.text} />
            </div>
            <div>
                <input readOnly type="text" id="date" value={post.datePost.toLocaleDateString()} />
            </div>
        </form>
    )
}

export default EditPost