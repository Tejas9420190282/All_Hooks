import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    </>
  )
}

export default App



// Higher order components = a function that takes a components as an input and returns a new components. it's like adding extra new feature to a components without changing its actual code.


// Q) in Which sinario, Higher Order Components we should use ?
// =====>    If we want to shair commen code in Multiple components in that situation, we can use Higher Order Component