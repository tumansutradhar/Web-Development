import React from 'react'
import './App.css'
import Login from './components/Login'

var userIsRegistered = false;

function App() {
  return (
    <>
      <div className="container"><Login isRegistered={userIsRegistered} /></div>
    </>
  )
}

export default App