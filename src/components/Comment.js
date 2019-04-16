import React from "react"

class Comment extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h2>{this.props.author}</h2>
                {this.props.text}
            </div>
        )
    }
}

export default Comment;