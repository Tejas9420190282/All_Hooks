import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './component/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Form Fname={"Tejas"} Lname={"Shimpi"} education={"MCs"} />

        <Form Fname={"Shubh"} Lname={"Patil"} education={"MCs"} />

        <Form Fname={"Akash"} Lname={"Sapkal"} education={"BCs"} />
    </>
  )
}

export default App
