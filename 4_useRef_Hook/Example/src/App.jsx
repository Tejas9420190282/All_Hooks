import { useRef, useState } from 'react'

import './App.css'

function App() {
  const [text, setText] = useState(0);
  
  const textRef = useRef();

  const reset = () => {

    setText("");
  }

  const curserOnText = () => {
    textRef.current.focus();
  }

  const changeClr = () => {
    textRef.current.style.color = "red"
  }

  const selectTheText = () => {
    textRef.current.select();
  }

  return (
    <>
      <div>
        <input type='input' ref={textRef} value={text} onChange={(e) => setText(e.target.value)} />
        <br />

        <button style={{margin:"30px"}} onClick={reset}>Reset</button>
        <button style={{margin:"30px"}} onClick={curserOnText}>Curser on Text</button>
        <button style={{margin:"30px"}} onClick={changeClr}>Change color</button>
        <button style={{margin:"30px"}} onClick={selectTheText}>Select the Text</button>
      </div>

    </>
  )
}

export default App
