import { useState } from 'react'
import './App.css'

function App() {
  
  const [name, setName] = useState("Technical Guruji");
  const [profection, setProfection] = useState("Subscriber");

  const stateHandler =()=> {

    setName("Tejas Shimpi");
    setProfection("Student");
  }

  return (
    <>
      <div>
       <p> Name : {name}</p>
 
        <p>Profection : {profection}</p>

        <br />

        <button onClick={stateHandler}>Click here</button>
      </div>
    </>
  )
}

export default App
