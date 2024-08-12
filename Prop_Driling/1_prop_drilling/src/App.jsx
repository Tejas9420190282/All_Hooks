import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp1 from './component/Comp1';

function App() {
  
  const name = "Tejas Shimpi";

  return (
    <>
      <Comp1 name = {name}/>
    </>
  )
}

export default App
