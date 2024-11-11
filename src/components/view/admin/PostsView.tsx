import Panel from "../../layout/panel/Panel"
import data from "../../../data/posts"

const PostView = () => {
    return (
        <>
            <Panel items={data} />
        </>
    )
}

export default PostView