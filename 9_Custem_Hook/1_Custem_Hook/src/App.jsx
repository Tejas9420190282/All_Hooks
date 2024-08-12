import  React from 'react'

import './App.css'

import Counter1 from './component/Counter1';
import Counter2 from './component/Counter2';

function App() {

  
  return (
    <>
      <p>Counter 2....................</p>
      <Counter1  />

      <hr />
      
      <p>Counter 2....................</p>
      <Counter2 />
    </>
  )
}

export default App

/*  
  i)    React allows us to create our own hook is called as Custem hook

  ii)   When developer create hook according to his custumization is known as Custom hook
  iii)  custom hook is similar to function in JavaScript whose names with "use".
  iv)   we can use in-build hooks in custom hook as well.


*/
