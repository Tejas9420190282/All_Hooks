import { useCallback, useState } from 'react'
import './App.css'
import Header from './component/Header';
import Memo_Header from './component/Memo_Header';

function App() {
  
  const [count, setCount] = useState(0);
  
  const newFunction = useCallback( (count) => {
    
  }, [count]) /*  () => {} */

  return (
    <>
{/*      
      <Header newFunction = {newFunction}/>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(prev => prev + 1)}>Click here</button>
      </div>
*/}     
      
      
      <hr />
 
      <Memo_Header newFunction = {newFunction}/>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(prev => prev + 1)}>Click here</button>
      </div>
 
    </>
  )
}

export default App
