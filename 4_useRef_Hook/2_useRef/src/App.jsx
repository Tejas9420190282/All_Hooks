import { useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  
  const [num, setNum] = useState(1);

/*   let a = 0;    // we want to increase the value of a by 1, when the code re-rended      

    useEffect( () => {
      a = a+ 1;
      console.log(`Re-rendering and value of a is, ${a}`);     // but it's not increses
  })


*/

    const a = useRef(0);    // when we use useRef hook
    

  useEffect( () => {
    
    a.current = a.current + 1;
    console.log(`Re-rendering and value of a is, ${a.current}`);     // then the value of a increses by whne the code re-render
  })


  /*  
      -  When we call useEffect without any dependency, that useEffect excutes after every render of component.
      -  ie. When any change happend in same page, the useEffect calls . 
  */
  
  
  return (
    <>
       <button onClick={() => setNum((prev) => prev + 1)}>Count is : {num}</button>
    </>
  )
}

export default App
































