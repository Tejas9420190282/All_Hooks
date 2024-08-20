import {useState} from "react"
import './App.css'
import useStore from './store'

function App() {
  
  const counter = useStore((state) => state.counter)
  const increaseCounter = useStore((state) => state.increaseCounter)
  const decreaseCounter = useStore((state) => state.decreaseCounter)
  const increaseBy = useStore((state) => state.increaseBy)
  const decreaseBy = useStore((state) => state.decreaseBy)
  const resetCounter = useStore((state) => state.resetCounter)

//  const [counter, setCounter] = useState(0)

  return (
    <>
        <div>
            <h1>{counter}</h1>
            <div className="flex gap-5 mt-3">
              <button onClick={increaseCounter}>+</button>
              <button onClick={() => increaseBy(10)}>INCREASE BY 10</button>
            </div>
            <div className="flex gap-5 mt-3">
              <button onClick={decreaseCounter}>-</button>
              <button onClick={() => decreaseBy(10)}>DECREASE BY 10</button>
            </div>
            <button onClick={resetCounter} className="mt-3">RESET COUNTER</button>
        </div>
    </>
  )
}

export default App
