import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { decreseBy, increseBy } from './Reducer';

function Counter() {

    const count = useSelector((state) => state.count);

    const dispatch = useDispatch();

    return (
        <>
            <h1>Count : {count}</h1>

            <div style={{display:"flex"}}>
                <button onClick={() => dispatch(decreseBy(5))}>-5</button>
                <button onClick={() => dispatch(increseBy(5))}>+5</button>

            </div>
        </>
    )
}

export default Counter
