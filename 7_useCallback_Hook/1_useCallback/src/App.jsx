import { useMemo, useState } from 'react'

import './App.css'


function App() {

  const [show, setShow] = useState(false);

  const id  = useMemo(() =>{
    
    return Math.random() * 18;
  }, []);

  return (
    <>
      <div>
        <p>Unique number : {id}</p>
        <button onClick={() => setShow((show) => !show)} style={{backgroundColor:"blue"}}>
          {show ? "Hide" : "Reveal"}
        </button>

        <p>{show ? "Some Api keys" : "*********"}</p>
      </div>
    </>
  )
}

export default App
