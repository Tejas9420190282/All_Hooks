import React, { useState } from 'react'

function Without_useMemo_hook() {

    const [num, setNum] = useState(0);
    const [count, setCount] = useState(0);

    const calciSqure = (number) => {

        console.log("Calculation done 👎");
        return number*number;
    }

    const result = calciSqure(num);

    return (
        <>
            <h1>With_out useMemo Hook</h1>
            <input type='number' value={num} onChange={(e) => setNum(e.target.value)} />

            <h1>Squre of Number : {result}</h1>

            <button onClick={() => setCount(count + 1)}>Count++</button>
            <h1>Counter : {count}</h1>

        </>
    )
}

export default Without_useMemo_hook
