import React, { useContext } from 'react'
import Footer from './Footer'
import { AppContext } from '../context/AppContext'

function Contact() {

    const {phone} = useContext(AppContext);

    return (
        <>
            <h2>Contact</h2>

            <h3>Phone : {phone}</h3>
        </>
    )
}

export default Contact
