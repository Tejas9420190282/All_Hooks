import React, { useState } from 'react'

function Not_useMemo_Hook() {

    const [num, setNum] = useState(0);
    const [count, setCount] = useState(0);

    const claciSqr = (number) => {

        console.log("Without useMemo hook");
        return number*number;
    }

    const result = claciSqr(num);

    return (
        <>
            <h1>Without useMemo hook</h1>
            <input type='number' value={num} onChange={(e) => setNum(e.target.value)} />

            <p>Squre : {result}</p>
            <button onClick={() => setCount(count + 1)}>Count++</button>
            <p>Count : {count}</p>


        </>
    )
}

export default Not_useMemo_Hook
