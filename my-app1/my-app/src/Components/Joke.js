// JavaScript source code

import React from "react"

function Joke(props) {
    return (
        <div>
            <h3 style={{ display: props.question ? "block" : "none" }}>Question:{props.question}</h3>
            <h3 style={{ color: !props.question && "#0000aa" }}>Answer:{props.punchLine}</h3>            
         </div>
        )
}

export default Joke
