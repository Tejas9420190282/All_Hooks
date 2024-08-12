import { useEffect, useState } from 'react'

import './App.css'

function App() {
  
  const [num,setNum] = useState(0);

  useEffect(() => {
    console.log("page have been refreshed now ");
  }, [])

  useEffect( () => {
    console.log("Number change");
  }, [num])

  const abc =()=> {
    console.log("ABC");
  }

  return (
    <>
        <div>
          <button onClick={() => setNum(num + 1)}>+1 increase</button>
          <h1>{num}</h1>
          <button onClick={() => setNum(num - 1)}>-1 increase</button>
        </div>
    </>
  )
}

export default App
