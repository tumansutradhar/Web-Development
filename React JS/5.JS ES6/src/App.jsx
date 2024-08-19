import React from "react";
import "./App.css";
import pi, { doublePi, tripalPi } from "./math";

function App() {
  return (
    <>
      <ul>
        <li>{pi}</li>
        <li>{doublePi()}</li>
        <li>{tripalPi()}</li>
      </ul>
    </>
  );
}

export default App;
