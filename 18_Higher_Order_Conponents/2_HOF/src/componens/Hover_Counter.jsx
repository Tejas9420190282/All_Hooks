import React from 'react'
import HOC from './HOC'

function Hover_Counter(prop) {

    const {count, increseBy, decreseBy} = prop

    return (
        <>
            <h1>Count : {count}</h1>

            <div className='flex justify-center items-center mt-5 gap-5'>
                <button className='px-10' onMouseOver={decreseBy}>-1</button>
                <button className='px-10' onMouseOver={increseBy}>+1</button>
            </div>
        </>
    )
}

export default HOC(Hover_Counter)
