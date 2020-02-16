import React from "react"
import Joke from "./components/Joke"
import jokeData from "./Data/jokeData"

function App() {

    // const jokeComponents = jokeData.map(function(jokedata) {
    //     return <Joke key={jokedata.id} expectation={jokedata.expectation} punchLine={jokedata.punchLine} />
    // })

    const jokeComponents = jokeData.map( joke => 
        <Joke key={joke.id} expectation={joke.expectation} punchLine={joke.punchLine} />
    )

    return (
        <div>
            {jokeComponents}
        </div>
    )

  
}

export default App



















