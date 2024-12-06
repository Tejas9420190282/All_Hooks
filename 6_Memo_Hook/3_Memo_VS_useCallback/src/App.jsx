import { useCallback, useState } from 'react'
import './App.css'
import Without_Memo_1 from './2_Memo_Hook/Without_Memo_1';
import With_Memo_2 from './2_Memo_Hook/With_Memo_2';
import Without_UseCallback_1 from './1_useCallback_Hook/Without_UseCallback_1';
import With_UseCallback_2 from './1_useCallback_Hook/With_UseCallback_2';

function App() {
  const [count, setCount] = useState(0);


  const [minus, setMinus] = useState(999);

  const ABC = useCallback(() => {

  }, [])
  
  const PQR = () => {

  }

  return (
    <>
    {/* 
        <h1>Count : {count}</h1>

        <button onClick={() => setCount(count + 1)}>Count + 1</button>

         <Without_Memo_1 />   //  OR     <With_Memo_2 />    

        <h1>------------------------------------------</h1>
 */}

        <p>useCallback Hook.................</p>

        <h1>Minus : {minus}</h1>
        <button onClick={() => setMinus(minus - 5)}>Minus - 5</button>

        {   <With_UseCallback_2 ABC={ABC} />               //  OR    <Without_UseCallback_1 PQR={PQR} />  
}

    </>
  )
}

export default App
