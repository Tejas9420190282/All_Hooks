import { createContext, useState } from 'react'
import './App.css'

import Comp1 from "./component/Comp1"


/* 1) create provider */

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