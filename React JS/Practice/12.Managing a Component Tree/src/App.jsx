import React, { useState } from 'react'
import './App.css'
import ToDoItem from "./components/ToDoItem";
import InputArea from './components/InputArea'

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((preItems) => {
      return [...preItems, inputText]
    });
  }

  function deleteItem(id) {
    setItems((preItems) => {
      return preItems.filter((item, index) => {
        return index !== id;
      })
    })
  }

  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <InputArea onAdd={addItem} />
        <div>
          <ul>
            {items.map((todoItem, index) => (<ToDoItem key={index} id={index} text={todoItem} onChecked={deleteItem} />))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App