import useStore from "./Store";
import "./App.css";

function App() {
  
  /*   
  const counter = useStore((state) => state.counter);
  const increaseCounter = useStore((state) => state.increaseCounter);
  const decreaseCounter = useStore((state) => state.decreaseCounter);
  const increaseBy = useStore((state) => state.increaseBy);
  const decreaseBy = useStore((state) => state.decreaseBy);
  const reset = useStore((state) => state.reset);
*/
  const {
    counter,
    increaseCounter,
    decreaseCounter,
    increaseBy,
    decreaseBy,
    reset,
  } = useStore();

  return (
    <>
      <h1>{counter}</h1>

      <div className="flex gap-5 mt-5">
        <button onClick={increaseCounter}>+</button>
        <button onClick={() => increaseBy(10)}>Increase By 10</button>
      </div>

      <div className="flex gap-5 mt-5">
        <button onClick={decreaseCounter}>-</button>
        <button onClick={() => decreaseBy(10)}>Decrease By 10</button>
      </div>

      <div className="mt-5">
        <button className="py-3 px-14" onClick={reset}>
          Reset Counter
        </button>
      </div>
    </>
  );
}
export default App;



