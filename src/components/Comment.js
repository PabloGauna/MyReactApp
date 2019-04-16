import React from "react"

class Comment extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <b>{this.props.author}: </b>
                {this.props.text}
            </div>
        )
    }
}

export default Comment;