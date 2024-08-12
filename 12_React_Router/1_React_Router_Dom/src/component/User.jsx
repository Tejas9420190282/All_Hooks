import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const params = useParams();

    return (
        <>
            <h1>The user Name is : {params.username} </h1>
        </>
    )
}

export default User
