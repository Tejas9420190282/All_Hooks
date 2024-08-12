
import React from 'react'

import './App.css'
import UseInternateStatus from './custom_hook/useInternateStatus'


function App() {

  const isOnline = UseInternateStatus();

  return (
    <>
        <div>{isOnline ? "✅Connected to Internate" : "❌Disconnect to Internate"}</div>
    </>
  )
}

export default App
