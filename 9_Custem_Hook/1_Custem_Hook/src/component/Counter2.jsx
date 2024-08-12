import React from 'react'
import UseCounter from '../custem_hook/useCounter'

function Counter2() {

    const [count, increment, decrement] = UseCounter(100);

    return (
        <>
            <button onClick={increment}>+1</button>
            <p>Count : {count}</p>
            <button onClick={decrement}>-1</button>
        </>
    )
}

export default Counter2

