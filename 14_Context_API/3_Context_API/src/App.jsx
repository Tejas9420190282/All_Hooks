import { useState, createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child1 from '../../2_Contet_Api/src/component/Child1';


export const data1 = createContext();
export const data2 = createContext();

function App() {
  
  const n1 = "Tejas";
  const n2 = "Shimpi";

  return (
    <>
        
        <data1.Provider value={n1}>
          <data2.Provider value={n2}>
              <Child1 />
          </data2.Provider>
        </data1.Provider>
    </>
  )
}

export default App
