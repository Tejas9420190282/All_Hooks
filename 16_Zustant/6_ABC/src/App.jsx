import './App.css'
import useStore from './store'

function App() {

  const { counter, 
    increase,
    decrease, 
    increaseBy,
    decreaseBy,
    resetCounter } = useStore();

  return (
    <>
      <div>
        <h1>{counter}</h1>
        <div className='flex mt-5 gap-3'>
          <button onClick={increase}>+</button>
          <button onClick={() => increaseBy(10)}>Increse by 10</button>
        </div>
        <div className='flex mt-3 gap-3'>
          <button onClick={decrease}>-</button>
          <button onClick={() => decreaseBy(10)}>Decrese by 10</button>
        </div>
        <button className='mt-3 px-12' onClick={resetCounter}>Reset counter</button>
      </div>
    </>
  )
}

export default App
