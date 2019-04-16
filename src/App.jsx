import React from "react"
import Post from "./components/Post.jsx"
import dogImage from "./images/dog.jpg"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [
            {
                id: "2342432",
                image: dogImage,
                comments: [{
                    author: "Pablo Gauna",
                    text: "This is the first comment."
                },
                {
                    author: "Pablo Gauna",
                    text: "This is the second comment."
                }]
            }]
        }
    }
    render() {
        const posts = [];

        for (const post of this.state.posts) {
            posts.push(<Post postData={post} key={post.id}></Post>)
          }
        return (
            <div>{posts}</div>           
        )
    }
}

export default App;