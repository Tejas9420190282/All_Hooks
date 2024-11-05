import { useState } from 'react'
import './App.css'
import Click_Counter from './Components/Click_Counter'
import Hover_Counter from './Components/Hover_Counter'


function App() {

  return (
    <>
        <Click_Counter />

        <h1 className='mt-5 mb-'>===========</h1>

        <Hover_Counter />
    </>
  )
}

export default App
