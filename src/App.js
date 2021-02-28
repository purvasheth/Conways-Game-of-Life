import "./App.css";

function App() {
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
      <button>Randomize</button>
      <button className="marginLeft">Next</button>
    </div>
  );
}

export default App;
