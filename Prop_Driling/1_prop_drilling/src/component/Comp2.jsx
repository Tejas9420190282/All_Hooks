import React from 'react'
import Comp3 from './Comp3'

function Comp2(prop) {
    return (
        <>
            <Comp3 name = {prop.name}/>
        </>
    )
}

export default Comp2
