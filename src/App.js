import React, { useState } from "react"
import "./App.css";
import Grid from "./Grid";
import { clearArray, createArray, generateNewState } from "./utils";
const n = 40
const m = 40
function App() {
  const [array, setArray] = useState(clearArray(n, m))
  return (
    <div className="App">
      <h1>Conway's Game of Life</h1>
      <p>
        Its a single-player evolution game, where you determine the next state
        based only on the current state. This means that no external factors
        come into play. Its kinda like a `pure function`.
      </p>
      <p>
        The game depends on a certain rules. Read more about them
        <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"> here</a>
      </p>
      <button onClick={() => setArray(createArray(n, m))}>Randomize</button>
      <button className="marginLeft" onClick={() => setArray(generateNewState({ array, n, m }))}>Next</button>
      <button onClick={() => setArray(clearArray(n, m))} className="marginLeft">Clear</button>
      <Grid n={n} m={m} array={array} />
    </div>
  );
}

export default App;
