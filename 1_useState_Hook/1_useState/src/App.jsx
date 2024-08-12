import { useState } from 'react'
import './App.css'

function App() {
  
  const [counter, setCounter] = useState(0);


  return (
    
    <>
 
        <button onClick={() => setCounter(counter + 1)}>+1</button>
        <br />  <br />
        {counter}
        <br />  <br />
        <button onClick={() => setCounter(counter -1)}>-1</button>
 
    </>
  )
}

export default App
