import React from "react";
import HOC from "./HOC";

function Click_Counter(prop) {

    const {count, increseBy, decreseBy} = prop

    return (
        <>
            <h1>Count : {count}</h1>

            <div className="flex justify-center items-center gap-5 mt-5">
                <button className="px-10" onClick={decreseBy}>-1</button>
                <button className="px-10" onClick={increseBy}>+1</button>
            </div>
        </>
    );
}

export default HOC(Click_Counter);
