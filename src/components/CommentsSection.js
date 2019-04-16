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

        debugger;

        return (
        <div>
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