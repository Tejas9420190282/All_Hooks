import React, { useState } from 'react'

function HOC(OldComp) {
    return function initialFun(prop) {

        const [count, setCount] = useState(0);

        return <OldComp {...prop} count={count} increseBy={(n) => setCount(count + n)} decreseBy={(n) => setCount(count - n)} />
    }
}

export default HOC
