import React from "react"

function Joke(props) {
    console.log(props)
    console.log(props.expectation)
    if(props.expectation === undefined)
        console.log("props.Joke was undefined")

    return (
        <div>
            <br />
            <h2 style={{display: props.expectation ? "block" : "none"}}>Bad Joke: {props.expectation}</h2>
            <p>Bad Joke punch line: {props.punchLine}</p>
            <br />
            <hr />
        </div>
    )
}

export default Joke
