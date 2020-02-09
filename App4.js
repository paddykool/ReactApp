import React from "react"
import Joke from "./components/Joke"

function App() {
    return (<div>
        <Joke punchLine="Bad Joke 1 punch line"/>
        <Joke joke="Bad Joke 1" punchLine="Bad Joke 1 punch line"/>
        <Joke joke="Bad Joke 2" punchLine="Bad Joke 2 punch line"/>
        <Joke joke="Bad Joke 3" punchLine="Bad Joke 3 punch line"/>
    </div>)
}

export default App