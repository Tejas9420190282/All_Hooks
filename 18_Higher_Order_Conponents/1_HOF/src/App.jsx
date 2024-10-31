import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import HOF from './components/HOF'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <HOF cmp={Counter} clr={"red"} />

        <HOF cmp={Counter} clr={"blue"} />

        <HOF cmp={Counter} clr={"skyblue"} />
    </>
  )
}

export default App
