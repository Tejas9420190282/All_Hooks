
import './App.css'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login'

function App() {
  
  const router = createBrowserRouter ([
    {
      path: "/",
      element: <><Navbar /> <Home /></>
    },
    {
      path: "/login",
      element: <><Navbar/> <Login /></>
    },
    {
      path: "/contact",
      element: <><Navbar/><Contact/></>
    },
    {
      path : "/about",
      element: <><Navbar/><About/></>
    }
  ])
  

  return (
    <>
      
      <RouterProvider router = {router} />
    </>
  )
}

export default App
