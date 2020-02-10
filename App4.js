import React from "react"
import Joke from "./components/Joke"
import jokeData from "./jokeData"

function App() {

    const jokeComponents = jokeData.map( 
        function(joke) {
            return <Joke key={joke.id} expectation={joke.expectation} punchLine={joke.punchLine} />
        }
    )

    // const jokeComponents = jokeData.map(joke => <Joke key={joke.id} expectation={joke.expectation} punchLine={joke.punchLine} />)
    
    return (
        <div>
            {jokeComponents}
        </div>
    )

  
}

export default App


  // return (<div>
    //     <Joke punchLine="Bad Joke 1 punch line"/>
    //     <Joke expectation="Bad Joke 2" punchLine="Bad Joke 2 punch line"/>
    //     <Joke expectation="Bad Joke 3" punchLine="Bad Joke 3 punch line"/>
    //     <Joke expectation="Bad Joke 4" punchLine="Bad Joke 5 punch line"/>
    // </div>)