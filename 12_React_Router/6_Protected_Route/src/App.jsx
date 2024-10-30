import { useState } from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Signin from './components/Signin';
import Login from './components/Login';

function App() {
  const [count, setCount] = useState(0);

  const route = createBrowserRouter([
    {
      path: "/",
      element: <><Signin /></>      
    },
    {
      path: "/login",
       element: <><Login /></>
    },
    {

    }
  ])

  return (
    <>
        <RouterProvider router={route} />
    </>
  )
}

export default App
