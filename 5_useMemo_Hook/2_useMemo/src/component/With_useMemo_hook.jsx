import React, { useMemo, useState } from 'react'

function With_useMemo_hook() {

    const [num, setNum] = useState(0);
    const [count, setCount] = useState(0);

    const calciSqure = (number) => {

        console.log("Calculation done 👍");
        return number*number;
    }

    const result = useMemo( () => {
        
        return calciSqure(num), [num]
    }, [num])

    return (
    <>
        <h1>With useMemo Hook</h1>
        <input type='number' value={num} onChange={(e) => setNum(e.target.value) } />
        <h1>Square of number : {result}</h1>

        <button onClick={() => setCount(count + 1)}>Count++</button>
        <h1>Count : {count}</h1>
    </>    
    )
}

export default With_useMemo_hook
