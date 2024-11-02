import React from 'react'
import HOC from './HOC'
import { useState } from 'react'

function Hover_Counter(prop) {

    const {count, increseBy, decreseBy} = prop

    return (
        <>
            <h1>Count : {count}</h1>

            <div className='flex justify-center items-center gap-5 mt-5'>
                <button className='px-10 ' onMouseOver={() => decreseBy(1)} >-1</button>
                <button className='px-10 ' onMouseOver={() => increseBy(1)} >+1</button>
            </div>

            <div className='flex justify-center items-center gap-5 mt-5'>
                <button className='px-9' onMouseOver={() => decreseBy(10)}>-10</button>
                <button className='px-9' onMouseOver={() => increseBy(10)}>+10</button>
            </div>
        </>
    )
}

export default HOC(Hover_Counter)
