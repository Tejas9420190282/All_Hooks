import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';

function App() {
  
  const [count, setCount] = useState(0);

  useEffect(() => {

    console.log(`Count changed to ${count}`); 

  }, [count]);

  /*  
      - when we calls useEffect with dependency, that useEffect calls after that change happend that we have given as dependency.
      - i.e we have given dependency as [count], here when count changes, this useEffect calls.
  */

  const [num, setNum] = useState(101);


  return (
    <>
        <h1>Count : {count}</h1>

        <div style={{display:"flex", gap:"50px"}}>
          <button onClick={() => setCount(count - 2)}>-2</button>
          <button onClick={() => setCount(count + 2)}>+2</button>
        </div>

        <h1>=======================</h1>


        <h1>num : {num}</h1>

        <div style={{display:"flex", gap:"50px"}}>
          <button onClick={() => setNum(num - 5)}>-5</button>
          <button onClick={() => setNum(num + 5)}>+5</button>
        </div>
    </>
  )
}

export default App
