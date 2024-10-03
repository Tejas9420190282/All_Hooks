import React, { memo, useCallback, useState } from 'react'
import Memo_demo from './Memo_demo';


function UseMemo() {

    const [count, setCount] = useState(0);

    const [add, setAdd] = useState(500);

    const ABC = () => {

    }

    return (
        <>
            <Memo_demo ABC={ABC} />
            
            <h2>Count : {count+1}</h2>
            <button onClick={() => setCount(count+1)}>count+1</button>

            <h2>Add : {add+1}</h2>
            <button onClick={() => setAdd(add+1)}>Add+1</button>
        </>    
    )
}

export default memo(UseMemo)
