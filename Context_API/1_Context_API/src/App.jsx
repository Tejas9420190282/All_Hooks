import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Comp1 from "./component/Comp1"


{/*           1) create provider */}
export const  data = createContext();

function App() {

  
  const name = "Tejas Shimpi";
  
  return (
    <>
{/*           2) Provider        */}
        
        <data.Provider value={name}>
          <Comp1 />
        </data.Provider>
    </>

  )
}

export default App




/*  
    1) Context create
    2) Provider
    3) Consumer
*/