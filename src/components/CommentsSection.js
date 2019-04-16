import React from "react"
import Comment from "./Comment.js"
import AddNewComment from "./AddNewComment.js";
import { throws } from "assert";

class CommentsSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: this.props.comments
        }
    }
    render() {
        const comments = []
        for (const comment of this.state.comments) {
            comments.push(<Comment text={comment.text} author={comment.author}></Comment>)
        }

        const commentsCounter = this.state.comments.length === 1 ? <div>({this.state.comments.length} Comment)</div> : <div>({this.state.comments.length} Comments)</div>

        return (
        <div>
            {commentsCounter}
            {comments}
            <AddNewComment onAddNewComment={this.addNewComment}></AddNewComment>
        </div>
        )
    }

    addNewComment = (text, author)=>{
        this.setState({
            comments: [...this.state.comments, {author: author, text: text}]
        })
    }
}

export default CommentsSection;