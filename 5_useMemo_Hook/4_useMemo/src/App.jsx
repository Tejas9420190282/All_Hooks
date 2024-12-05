import { useState } from 'react'
import './App.css'
import UseMemo_hook from './component/UseMemo_hook'
import Not_useMemo_Hook from './component/Not_useMemo_Hook'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Not_useMemo_Hook />
        <hr style={{margin:"30px"}} />
        <UseMemo_hook />      
    </>
  )
}

export default App
