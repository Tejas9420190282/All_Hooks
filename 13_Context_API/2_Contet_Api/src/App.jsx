import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child1 from './component/Child1';


export const data1 = createContext();
export const data2 = createContext();

function App() {
  
  const FName = "Tejas";
  const LName = "Shimpi";

  return (
    <>
        <data1.Provider value={FName}>
          <data2.Provider value={LName}>
              <Child1 />
          </data2.Provider>
        </data1.Provider>
    
    </>
  )
}

export default App
