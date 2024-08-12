import { useState } from 'react'

import './App.css'

function App() {

  const [name, changeName] = useState("Tejas");
  
  const updateText =(e)=> {
    
    changeName(e.target.value)
  }

  return (
    <>
        <div>
            <h1>{name}</h1>
            <input type='text' placeholder='Type here......' value={name} onChange={updateText}></input>
        </div>
    </>
  )
}

export default App
