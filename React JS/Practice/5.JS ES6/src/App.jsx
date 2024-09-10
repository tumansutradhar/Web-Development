import React from 'react'
import './App.css'
import * as Calculator from "./calculator";

function App() {
  return (
    <>
      <ul>
        <li>{Calculator.add(1, 2)}</li>
        <li>{Calculator.multiply(2, 3)}</li>
        <li>{Calculator.subtract(7, 2)}</li>
        <li>{Calculator.divide(5, 2)}</li>
      </ul>
    </>
  )
}

export default App