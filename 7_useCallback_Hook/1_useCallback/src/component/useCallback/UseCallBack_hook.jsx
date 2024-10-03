import React, { useCallback, useState } from 'react'
import UseCallback_Demo from './UseCallback_Demo';

function UseCallBack_hook() {

    const [count, setCount] = useState(0);

    const [add, setAdd] = useState(500);

    const ABC = useCallback(() => {
        
    }, [add])

    return (
        <>
            <UseCallback_Demo ABC={ABC} />

            <h2>Count : {count}</h2>
            <button onClick={() => setCount(count+1)}>count+1</button>

            <h2>Add : {add}</h2>
            <button onClick={() => setAdd(add+5)}>add+5</button>
        </>
    )
}

export default UseCallBack_hook
