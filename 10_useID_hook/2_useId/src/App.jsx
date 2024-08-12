import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import No_useId from './component/No_useId'
import UseId_Hook from './component/UseId_Hook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

        <h1>Without Using useID Hook 👇</h1>

        <No_useId  label={"full_Name"} type={"text"} name={"Tejas Shimpi"} />

        <No_useId label={"Email Address"} type={"email"}  name={"email"} />

        <No_useId label={"Mobile number"} type={"number"} name={"mobile"}  />

        <hr />

        <br />

        <h1>Using useID Hook 👇</h1>

        <UseId_Hook label={"full_Name"} type={"text"} name={"Tejas Shimpi"} />
        <UseId_Hook label={"full_Name"} type={"text"} name={"Tejas Shimpi"} />
        <UseId_Hook label={"full_Name"} type={"text"} name={"Tejas Shimpi"} />
    </>
  )
}

export default App
