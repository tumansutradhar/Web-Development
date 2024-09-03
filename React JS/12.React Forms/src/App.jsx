import React, { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick(event) {
    setHeading(name);
    event.preventDefault();
  }

  return (
    <>
      <div className="container">
        <h1>Hello {headingText}</h1>
        <form onSubmit={handleClick}>
          <input type="text" placeholder="What's your name?" value={name} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div >
    </>
  )
}

export default App