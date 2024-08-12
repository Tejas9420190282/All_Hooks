import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Footer() {

    const {name} = useContext(AppContext);

    

    return (
        <>
            <h1>Footer</h1>

            <h2>Contact : {name}</h2>
        </>
    )
}

export default Footer
