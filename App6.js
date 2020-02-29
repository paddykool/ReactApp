import React from "react"

function handleClick(){
    console.log("I was clicked")
}

function handleMouseOver(){
    console.log("The mouse was hovered over the image")
}


function App (){
    return (
        <div>
            <img onMouseOver={handleMouseOver} src="https://www.fillmurray.com/200/100"/>
            <br />
            <br />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default App