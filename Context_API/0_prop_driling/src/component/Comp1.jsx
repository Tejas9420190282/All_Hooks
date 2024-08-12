import React from 'react'
import Comp2 from './Comp2'

function Comp1(prop) {
    return (
        <>
            <Comp2 name={prop.name} />
        </>
    )
}

export default Comp1
