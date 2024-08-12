import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './component/Home'
import Contact from './component/Contact'
import About from './component/About'
import Navbar from './component/Navbar'
import User from './component/User'

function App() {
  
  const router = createBrowserRouter([
    {
      path : "/home",
      element : <><Navbar /><Home /></> 
    },
    {
      path : "/contact",
      element : <><Navbar /><Contact /></>
    },
    {
      path : "/about",
      element : <><Navbar /><About /></>
    },
    {
      path : "/user/:username",
      element : <><Navbar /><User /></>
    }
  ])

  return (
    <>
       <RouterProvider router = {router}/>
    </>
  )
}

export default App
