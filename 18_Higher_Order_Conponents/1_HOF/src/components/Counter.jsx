import React, { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Count : {count}</h1>

            <div className='flex gap-5 justify-center items-center mt-8'>
                <button onClick={() => setCount(count - 1)}>-1</button>
                <button onClick={() => setCount(count + 1)}>+1</button>
            </div>

            <div className='flex gap-5 justify-center items-center mt-2'>
                <button onClick={() => setCount(count - 10)}>-10</button>
                <button onClick={() => setCount(count + 10)}>+10</button>
            </div>
        </>
    )
}

export default Counter
