import React from "react"

class Photo extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return <img src={this.props.image}></img>
    }
}

export default Photo;