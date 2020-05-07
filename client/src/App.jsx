import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import JokeState from "./context/joke/JokeState";

import "./App.css";

// Component imports
import Jokes from "./components/jokes/Jokes";

function App() {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <JokeState>
      <Jokes />
    </JokeState>
  );
}

export default App;
