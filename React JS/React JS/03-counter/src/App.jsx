import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      // setCounter(counter + 1);
      setCounter(prevCounter => prevCounter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      // setCounter(counter - 1);
      setCounter(prevCounter => prevCounter - 1);
    }
  };

  return (
    <>
      <h1>Counter Value: {counter}</h1>
      <button onClick={addValue}>Add Value +1</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value -1</button>
    </>
  );
}

export default App;
