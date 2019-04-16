import React from "react"
import Photo from "./Photo.js"
import CommentsSection from "./CommentsSection.js"

class Post extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Photo image={this.props.postData.image}></Photo>
                <CommentsSection comments={this.props.postData.comments}></CommentsSection>
            </div>)
    }
}

export default Post;