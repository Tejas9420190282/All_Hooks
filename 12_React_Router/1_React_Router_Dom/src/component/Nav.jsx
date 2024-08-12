import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <>
            <nav>
                <Link to='/home'><li>Home</li></Link>
                <Link to='/about'><li>About</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
                <Link to='/login'><li>Login</li></Link>
            </nav>
        </>
    )
}

export default Nav
