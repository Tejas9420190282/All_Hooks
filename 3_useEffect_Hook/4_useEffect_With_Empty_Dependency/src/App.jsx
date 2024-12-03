import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  
  useEffect(() => {
    
    console.log("Welcome in the App");
    
    alert("Welcome in the App");

  }, [])

  /*  
      - When we call useEffect with empty dependency, then that useEffect calls after 1st time openning (1st time refresh the page)
  */
  

  return (
    <>
        <h1>Hello user.....!</h1>
    </>
  )
}

export default App
