import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './App.css'
import Login from './components/Login'
import Forget_Pass from './components/Forget_Pass'
import Create_Acc from './components/Create_Acc'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    }, 
    {
      path: "/forget-password",
      element: <Forget_Pass />
    },
    {
      path: "/create-acc",
      element: <Create_Acc />
    }
  ])

  return (
    <>
      <RouterProvider router={router} /> 
      
    </>
  )
}

export default App
