import React from "react";

export default function Slide(props) {
    return (
        <div className="slide" style={{minWidth: props.sliderWidth, maxWidth: props.sliderWidth}}>
            <h1>{props.content.header}</h1>
            <p>{props.content.body}</p>
        </div>
    )
}
