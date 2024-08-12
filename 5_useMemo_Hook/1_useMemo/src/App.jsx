import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Whithout_useMemo_Hook from './component/Whithout_useMemo_Hook'
import With_useMemo_Hook from './component/With_useMemo_Hook'

function App() {
  
  

  return (
    <>
        <Whithout_useMemo_Hook />

        <hr />

        <With_useMemo_Hook />
    </>
  )
}

export default App


