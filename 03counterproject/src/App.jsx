
import './App.css'
import { useState } from 'react'





function App() {


  let [counter, setCounter] = useState(15);


  // let counter = 46;
  const value = () => {
    counter = counter + 1;
    setCounter(counter)
    console.log('Click', counter)
  }

  return (
    <>
      <h1>Abhishek Verma learn ReactJs</h1>
      <h3>Couter value: {counter}</h3>

      <button onClick={value}>Add value {counter}</button>
      <br />
      <br />
      <button>Remove value {counter}</button>
      <footer>
        <h3>Footer : {counter}</h3>
      </footer>
    </>
  )
}

export default App





