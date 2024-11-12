import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className='flex gap-20 mb-20'>
                <NavLink to="/comp1" className={(e) => { return e.isActive ? "bg-red-300 text-red-700 p-3 font-bold" : ""}}>Comp1</NavLink>
                <NavLink to="/comp2" className={(e) => { return e.isActive ? "bg-red-300 text-red-700 p-3 font-bold" : ""}}>Comp2</NavLink>
                <NavLink to="/comp3" className={(e) => { return e.isActive ? "bg-red-300 text-red-700 p-3 font-bold" : ""}}>Comp3</NavLink>
            </nav>
        </>
    )
}

export default Navbar
