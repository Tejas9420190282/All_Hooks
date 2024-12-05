import React, { useMemo, useState } from 'react'

function UseMemo_hook() {

    const [num, setNum] = useState(0);
    const [count, setCount] = useState(0);

    const calciSqr = (number) => {

        console.log("with useMemo hook.......");
        return number*number;
    }

    const result = useMemo( () => {
        
        return calciSqr(num);
    }, [num]) 

    return (
        <>
            <h1>With useMemo hook</h1>
            <input type='number' value={num} onChange={(e) => setNum(e.target.value)} />
            <p>Squre : {result}</p>

            <button onClick={() => setCount(count + 1)}>Count++</button>
            <p>Count : {count}</p>
        </>
    )
}

export default UseMemo_hook
