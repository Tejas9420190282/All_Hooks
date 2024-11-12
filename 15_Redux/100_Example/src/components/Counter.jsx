import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decreseBy, increseBy } from './Reducer';

function Counter() {

    const count = useSelector((state) => state.count);

    const dispatch = useDispatch();

    return (
        <>
            <h1>Count : {count}</h1>

            <div>
                <button  onClick={() => dispatch(decreseBy(2))}>-2</button>
                <button onClick={() => dispatch(increseBy(2))}>+2</button>
            </div>
        </>
    )
}

export default Counter
