import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className='flex justify-start gap-10 list-none text-xl py-5 pl-5 bg-black text-white'>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
                <Link to="/login"><li>Login</li></Link>
            </nav> 
        </>    
    )
}

export default Navbar
