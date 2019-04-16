import React from "react"
import Comment from "./Comment.jsx"

class CommentsSection extends React.Component {
    render() {
        const comments = [];

        for (const comment of this.props.comments) {
            comments.push(<Comment text={comment.text} author={comment.author}></Comment>)
        }

        return (
        <div>
            {comments}
        </div>
        )
    }
}

export default CommentsSection;