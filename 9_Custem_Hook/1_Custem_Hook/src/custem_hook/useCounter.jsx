import React, { useState } from 'react'

function UseCounter(defaultValue = 0) {

    const [count, setCount] = useState(defaultValue);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return [count, increment, decrement]
}

export default UseCounter
