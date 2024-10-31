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



// Higher order components = a function that takes a components as an input and returns a new components. it's like adding extra new feature to a components without changing its actual code.
