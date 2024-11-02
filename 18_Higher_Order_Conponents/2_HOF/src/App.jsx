
import './App.css'
import Click_Counter from './componens/Click_Counter'
import Hover_Counter from './componens/Hover_Counter'



function App() {
  

  return (
    <>
        <Click_Counter />

        <h1 className='mt-20 mb-20'>=================</h1>

        <Hover_Counter />        
    </>
  )
}

export default App



// Higher order components = a function that takes a components as an input and returns a new components. it's like adding extra new feature to a components without changing its actual code.


// Q) in Which sinario, Higher Order Components we should use ?
// =====>    If we want to shair commen code in Multiple components in that situation, we can use Higher Order Component