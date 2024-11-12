import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Comp1 from './components/comp1'
import Comp2 from './components/Comp2'
import Comp3 from './components/Comp3'
import URL_Not_Fount from './components/URL_Not_Fount'

function App() {
  
  const router = createBrowserRouter([
    {
      path : "/comp1",
      element : <><Navbar /><Comp1 /></>,
    },
    {
      path : "/comp2",
      element : <><Navbar /><Comp2 /></>,
    },
    {
      path : "/comp3",
      element : <><Navbar /><Comp3 /></>,
    },
    {
      path : "*",   // "*" matches any URl in react router 
      element : <><URL_Not_Fount /></>,
    },
  ])

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
