import React, { useId } from 'react'

function UseId_hook(props) {

    const id = useId();

    return (
        <>
            <p>{props.name}</p>
            <label htmlFor={id + 'firstName'}>First Name</label>

            <input type='text' id={id + 'firstName'} />

            <label htmlFor={id + 'lastName'}>Last Name</label>

            <input type='text' id={id + 'lastName'} />
        </>    
    )
}

export default UseId_hook
