import React from "react";
import { useState } from "react";

function Whithout_useMemo_Hook() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(110);

  const multiply = () => {
    console.log("&&&&&&&& Without useMemo hook &&&&&&&&");
    return add * 10;
  };

  return (
    <>
      <h1>Without using useemo Hook</h1>

      <p>{multiply()}</p>
      <button onClick={() => setAdd(add + 1)}>Addition</button>
      <h1>{add}</h1>
      <br />

      <button onClick={() => setMinus(minus - 1)}>Substraction</button>
      <h1>{minus}</h1>
    </>
  );
}

export default Whithout_useMemo_Hook;


/* 
    -   here When we press Add button, the multiply function called automatic because we take a refrence of add value's. so it jenual.
    -   but the problem is when we press Substraction button, the function calling of multiply function without any reason.
*/