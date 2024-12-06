import React, { useReducer } from 'react'

function Counter() {

    const initialState =  0;
    

    const reducer = (state, action) => {
        switch(action) {

            case "INCREMENT" : return state + 1;

            case "DECREMENT" : return state - 1;

            default : return state;
        }
    }

    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <div>
                <h1>Count : {count}</h1>

                <div style={{display:"flex"}}>
                    <button onClick={() => dispatch("DECREMENT")}>-1</button>
                    <button onClick={() => dispatch("INCREMENT")}>+1</button>
                </div>
            </div>
        </>        
    )
}

export default Counter
