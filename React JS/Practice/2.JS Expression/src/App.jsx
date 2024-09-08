import React from 'react'
import './App.css'

const name = "Tuman";
const date = new Date ();
// const year = date.getFullYear();

function App() {
  return (
    <>
      <div>
        <p>Created by {name}</p>
        {/* <p>Copyright {year}</p> */}
        <p>Copyright {date.getFullYear()}</p>
      </div>
    </>
  )
}

export default App
