import { useState } from 'react'
import './App.css'
import Not_useId from './component/Not_useId'
import UseId_hook from './component/UseId_hook'

function App(props) {
  const [count, setCount] = useState(0)

  return (
    <>
        <Not_useId title={"Server"} />
        <Not_useId title={"Client"} />

        <p>Here when we click on Server's lable the it focuses on server's input box. But when we click on Clients lable then also it focues on Server's inputs box if we doesn't use useId hook   </p>

        <hr />

        <h1>useId Hook 👇</h1>

        <UseId_hook name={"A"}/>

        <UseId_hook name={"B"}/>
    </>
  )
}

export default App
