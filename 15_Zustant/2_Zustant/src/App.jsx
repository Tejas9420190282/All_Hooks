
import useStore from "./Store";
import "./App.css";


function App() {
  
  const {
    counter, incrementCounter, decrementCounter, incrementBy, decrementBy, reset
  } = useStore();

  return (
    <>
      <h1>{counter}</h1>
      
      <div className="flex mt-5 gap-5">
        <button onClick={incrementCounter}>+1</button>
        <button onClick={() => incrementBy(10)}>Increase by 10</button>
      </div>
      
      <div className="flex mt-5 gap-5">
        <button onClick={decrementCounter}>-1</button>
        <button onClick={() => decrementBy(10)}>Decrease by 10</button>
      </div>

      <button className="px-10 mt-5" onClick={reset}>Reset Counter</button>
    </>
  );
}

export default App;
