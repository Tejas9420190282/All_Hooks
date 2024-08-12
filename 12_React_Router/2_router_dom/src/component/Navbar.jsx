import React from 'react'
import { Link, NavLink } from 'react-router-dom'



function Navbar() {
    return (
        <>
            <ul className='flex justify-center items-center gap-14 mb-24 text-xl'>
                <NavLink to="/home"  className={(e) => {return e.isActive ? "text-red-500" : ""}}><li >Home</li></NavLink>
                <NavLink to="/contact" className={(e) => {return e.isActive ? "text-red-500" : ""}}><li >Contact</li></NavLink>
                <NavLink to="/about" className={(e) => {return e.isActive ? "text-red-500" : ""}}><li >About</li></NavLink>
            </ul>
        </>
    )
}

export default Navbar
