import React from 'react'
import UseCounter from '../custem_hook/useCounter'

function Counter1() {

    const [count, increment, decrement] = UseCounter();

    return (
        <>
            <button onClick={increment}>+1</button>
            <p>count : {count}</p>
            <button onClick={decrement}>-1</button>
        </>
    )
}

export default Counter1
