import { useState } from 'react'
import './App.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom"

import Nav from './component/Nav'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Login from './component/Login'
import User from './component/User'

function App() {
  
  const router = createBrowserRouter ([
    {
      path : "/home",
      element : <><Nav /><Home /></>
    },
    {
      path : "/about",
      element : <><Nav /><About /></>
    },
    {
      path : "/contact",
      element : <><Nav /><Contact /></>
    }, 
    {
      path : "/login",
      element: <><Nav /><Login /></>
    },
    {
      path : "/user/:username",
      element : <><Nav /><User /></>
    }
  ])

  return (
    <>
        

        <RouterProvider router = {router} />
    </>
  )
}

export default App



/* 

  1) npm i react-router-dom

  2) import {createBrowserRouter} from 'react-router-dom'     in App.jsx

  3) const route = createBrowserRouter ([
        {
          path : "/abc",
          element : <ABC />
        },
        
          path : "/pqr",
          element : <PQR />
        },
        
          path : "/xyz",
          element : <XYZ />
        }
      ])

  4)  
*/
