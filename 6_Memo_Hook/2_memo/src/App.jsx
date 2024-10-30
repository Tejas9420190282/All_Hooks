import { useState, useCallback } from 'react'
import './App.css'

import Without_memo_hook from './component/Without_memo_hook';
import Memo_Hook from './component/Memo_Hook';


function App() {
  
  const [add, setAdd] = useState(0);



  return (
    <>
     
{/*       
      <div>
        <h1>Learning useCallback</h1>
        <Memo_Hook />
        <h1>{add}</h1>
        <button onClick={() => setAdd(add+1)}>Addition</button>
      </div>
 */} 

      <div>
        <h1>Learning useCallback</h1>
        <Without_memo_hook />
        <h1>{add}</h1>
        <button onClick={() => setAdd(add+1)}>Addition</button>
      </div>

    </>
  )
}

export default App
