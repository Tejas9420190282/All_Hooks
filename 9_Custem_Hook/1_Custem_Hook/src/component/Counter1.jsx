import React from "react";
import UseCounter from "../custem_hook/useCounter";

function Counter1() {
    const [count, increment, decrement, reset] = UseCounter();

    return (
        <>
            <p>count : {count}</p>

            <div style={{display:"flex", justifyContent:"center", marginTop:"10px", marginBottom:"10px"  ,gap:"20px"}}>
                <button onClick={increment}>+1</button>
                <button onClick={decrement}>-1</button>
            </div>

            <button onClick={reset}>Reset Count</button>
        </>
    );
}

export default Counter1;
