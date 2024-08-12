import { useState } from 'react'

import './App.css'

function App() {

  const [text, setText] = useState();
  
  const updateText =(e)=> {
    setText(e.target.value)
  }

  return (
    <>
        <div>
          <h1>{text}</h1>
          <br />
          <input type='text' className='bg-white text-black' placeholder=' type here...' value={text} onChange={updateText} />  
        </div>    
    </>
  )
}

export default App
