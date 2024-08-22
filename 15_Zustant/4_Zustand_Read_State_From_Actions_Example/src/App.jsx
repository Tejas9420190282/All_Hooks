import { useState } from 'react'
import './App.css'
import useStore from './store'

function App() {

  //  const [counter, setCounter] = useState(0)

  const {
    counter,
    increaseCounter,
    decreaseCounter,
    increaseBy,
    decreaseBy,
    resetCounter,
  } = useStore();

  return (
    <>
      <div>
        <h1>{counter}</h1>
        <div className='flex mt-5 gap-3'>
          <button onClick={increaseCounter}>+</button>
          <button onClick={() =>increaseBy(10)}>Increase By 10</button>
        </div>
        <div className='flex mt-3 gap-3'>
          <button onClick={decreaseCounter}>-</button>
          <button onClick={() => decreaseBy(10)}>Decrease By 10</button>
        </div>
        <button className='mt-3 px-14' onClick={resetCounter}>Reset Counter</button>
      </div>
    </>
  )
}

export default App
