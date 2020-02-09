import React from "react"

function Joke(props) {
    console.log(props)
    console.log(props.joke)
    if(props.joke === undefined)
        console.log("props.Joke was undefined")

    return (
        <div>
            <h2 style={{display: props.joke ? "block" : "none"}}>Bad Joke: {props.joke}</h2>
            <p>Bad Joke punch line: {props.punchLine}</p>
            <hr />
        </div>
    )
}

export default Joke
