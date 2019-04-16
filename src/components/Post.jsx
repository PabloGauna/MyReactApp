import React from "react"
import Photo from "./Photo.jsx"
import CommentsSection from "./CommentsSection.jsx"

class Post extends React.Component {
    render() {
        return (
            <div>
                <Photo></Photo>
                <CommentsSection></CommentsSection>
            </div>)
    }
}

export default Post;