import React from "react"
import "./App.css"
import Without_useMemo_hook from "./component/Without_useMemo_hook"
import With_useMemo_hook from "./component/With_useMemo_hook"


function App() {
  
  

  return (
    <>   
        <Without_useMemo_hook />

        <hr />

        <With_useMemo_hook />
        
    </>
  )
}

export default App
