import React from 'react'

function Form({Fname, Lname, education}) {
    return (
        <>
            <p>First Name : {Fname}</p>
            <p>Last Name : {Lname}</p>
            <p>Eduction : {education}</p>

            <h2>===================</h2>
        </>
    )
}

export default Form
