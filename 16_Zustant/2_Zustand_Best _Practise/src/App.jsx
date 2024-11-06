import React, { useState } from "react";
import "./App.css";
import useStore from "./store";
import {
    incrementCounter,
    decrementCounter,
    incrementBy,
    decrementBy,
    resetCounter,
} from "./actions"

function App() {
  //  const [counter, setCounter] = useState(0)

  const {
    counter, 
//  increamentCounter,
//  decrementCounter,
//  incrementBy,
//  decrementBy,
//  resetCounter,
  
  } = useStore();

  return (
    <>
      <div>
        <h1>{counter}</h1>

        <div className="flex gap-3 mt-5">
          <button onClick={incrementCounter}>+</button>
          <button onClick={() => incrementBy(10)}>Increase by 10</button>
        </div>

        <div className="flex gap-3 mt-3">
          <button onClick={decrementCounter}>-</button>
          <button onClick={() => decrementBy(10)}>Decrease by 10</button>
        </div>
 
        <button className="mt-3 px-14" onClick={resetCounter}>
          Reset Counter
        </button>

      </div>
    </>
  );
}

export default App;


/* 
import { useState } from 'react'
import './App.css'
import useStore from './store';


function App() {

//  const [count, setCount] = useState(0)

  const {
    counter,
    incrementCounter,
    decrementCounter,
    increaseBy,
    decreaseBy,
    resetCounter,

  } = useStore();

  return (
    <>
      <h1>{counter}</h1>

      <div className='flex mt-3 gap-3'>
        <button onClick={incrementCounter}>+</button>
        <button onClick={() => increaseBy(10)}>Increase by 10</button>
      </div>

      <div className='flex mt-3 gap-3'>
        <button onClick={decrementCounter}>-</button>
        <button onClick={() => decreaseBy(10)}>Decrease by 10</button>
      </div>

      <button className='mt-3 px-12' onClick={resetCounter}>Reset Counter</button>
    </>
  )
}

export default App
 */
