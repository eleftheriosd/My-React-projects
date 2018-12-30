// JavaScript source code

import React from "react";
import Joke from "./Joke";
import jokesData from "../jokesData"

function App() {
    console.log(jokesData)
    const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)
    console.log(jokeComponents)
    console.log( jokeComponents[1].props)

    return (
        <div>
            {jokeComponents}
        </div>
        )
}
export default App
