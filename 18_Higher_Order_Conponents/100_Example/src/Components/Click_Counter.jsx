import React from "react";
import HOC from "./HOC";

function Click_Counter(prop) {

    const {count, increseBy, decreseBy} = prop

    return ( 
        <>
            <h1>Count : {count}</h1>

            <div className="flex justify-center items-center mt-3">
                <button onClick={() => decreseBy(2)}>-2</button>
                <button onClick={() => increseBy(2)}>+2</button>
            </div>
        </>
    );
}

export default HOC(Click_Counter);
