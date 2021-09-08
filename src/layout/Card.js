import React from 'react'
import "./Card.css"

export default (props) => {
    const cardStyle = {
        backgroundColor: props.color || "#8BAD39",
        borderColor: props.color || "#8BAD39",
    }

    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{props.name}</div>
            <div className="Content">
                <img className="Image" src={props.img} alt={props.name} width="100" height="100" ></img>
                {props.children}
            </div>
        </div>
    )
}