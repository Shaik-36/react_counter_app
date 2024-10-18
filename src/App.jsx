import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [couter, setCounter] = useState(0)

  function handleIncrease(){
     setCounter(couter +1)
  }

  function handleDecrease(){
    setCounter(couter -1)
 }

  return (
    <>
     <h1>Couter App</h1>
     <h3>Please click on the buttons to see the variations</h3>
     <h2>Count : {couter}</h2>
     <button onClick={handleIncrease}>+</button>
     <button onClick={handleDecrease}>-</button>

    </>
  )
}

export default App
