import React from "react"
import useStore from './store'
import './App.css'

function App() {
  
  const {
    counter,
    increaseBy,
    decreaseBy,
  } = useStore()


  return (
    <>
      <div>
        <h1>{counter}</h1>
        <div className="mt-5 gap-5">
          <button onClick={() => increaseBy(10)}>Increase By 10</button>
          <button onClick={() => decreaseBy(10)}>Decrease By 10</button>
        </div>
      </div>
    </>
  )
}

export default App
