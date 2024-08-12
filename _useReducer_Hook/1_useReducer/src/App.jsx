import { useState } from 'react'

import { useReducer } from 'react'

import './App.css'

function App() {
  
  
  const [count, setCount] = useState(0)

  useReducer

  return (
    <>
        <button onClick={ () => setCount(prev => prev + 1)}>Increase</button>

        <h1>Count : {count}</h1>

        <button onClick={ () => setCount(prev => prev - 1)}>Decrese</button>
    </>
  )
}

export default App
