import React from "react";
import HOC from "./HOC";

function Hover_Counter(prop) {
    
    const {count, increseBy, decreseBy} = prop
    
    return (
        <>
            <h1>Count : {count}</h1>

            <div className="flex justify-center items-center mt-3 gap-5">
                <button onMouseOver={() => decreseBy(2)}>-2</button>
                <button onMouseOver={() => increseBy(2)}>+2</button>
            </div>
        </>
    );
}

export default HOC(Hover_Counter);
