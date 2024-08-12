import React from 'react'

function No_useId(props) {
    return (
        <>
            <label htmlFor='user-input'>{props.label} : </label>

            <input id='user-input' type={props.type} name={props.name} />
        </>
    )
}

export default No_useId
