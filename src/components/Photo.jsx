import React from "react"
import dogImage from "../images/dog.jpg"

class Photo extends React.Component {
    render() {
        return <img src={dogImage}></img>
    }
}

export default Photo;