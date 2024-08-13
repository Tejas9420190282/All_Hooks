import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className='flex justify-start bg-black text-white text-xl gap-20 list-none pl-10 py-5'>
                <NavLink className={(e) => {return e.isActive? "text-blue-600" : ""}} to="/"><li>Home</li></NavLink>
                <NavLink className={(e) => {return e.isActive? "text-blue-600" : ""}} to="/login"><li>Login</li></NavLink>
                <NavLink className={(e) => {return e.isActive? "text-blue-600" : ""}} to="/contact"><li>Contact</li></NavLink>
                <NavLink className={(e) => {return e.isActive? "text-blue-600" : ""}} to="/about"><li>About</li></NavLink>
            </nav>
        </>
    )
}

export default Navbar
