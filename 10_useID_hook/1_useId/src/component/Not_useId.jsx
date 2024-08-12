import React from 'react'

function Not_useId(props) {

    

    return (
        <>
            <h1>{props.title}</h1>
            
            <label htmlFor='firstName'>First Name</label>

            <input type='text' id='firstName'  />

            <label htmlFor='lastName'>Last Name</label>

            <input type='text' id='lastName' />
        </>
    )
}

export default Not_useId
