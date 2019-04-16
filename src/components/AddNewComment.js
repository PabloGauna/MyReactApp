import React from "react"

class AddNewComment extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            newCommentAuthor: "Pablo Gauna",
            newCommentText: ""
        }
    }

    handleChange = (event)=>{
        this.setState({
            newCommentText: event.target.value
        })
    }

    onAddClicked = ()=>{
        this.props.addNewComment(this.state.newCommentText, this.state.newCommentAuthor)
    }

    render() {
        return (
            <div>
                <input value={this.state.newCommentText} onChange={this.handleChange}></input>
                <button onClick={this.onAddClicked}>Add</button>
            </div>
        )
    }
}

export default AddNewComment;