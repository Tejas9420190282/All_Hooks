import { useEffect, useState } from 'react'
import './App.css'

function App() {
  
  const [num, setNum] = useState(0)

  useEffect( () => {
    setTimeout(() => {
      setNum(num => num + 1)
    }, 2000);
  } )

  const [number, setNumber] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setNumber(number => number + 1);
    }, 2000);
  }, [])

  return (
    <>
      <h1>We haven't use any dependencies in useEffect hook so it render {num} times!</h1>

      <hr />

      <h1>we have use empty dependencies so Render the Number {number} times</h1>
    </>
  )
}
export default App
