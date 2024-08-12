import { useState, useEffect } from 'react'
import axios from "./axios";

function App() {
  const [myData, setMydata] = useState([])
  const [error, setError] = useState()

  const getData = async () => {
    
    try {
      const res = await axios.get("/posts")
      setMydata(res.data);
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect( () => {
    getData();
  })
  
  return (
    <>
        <div>
          {error != "" && <h1>{error}</h1>}

          {myData.map((result) => {
            const {id} = result;
            
            return(
              <div>
                <p>ID : {id}</p>
              </div>
            )        
          })}
        </div>      
    </>
  )
}
export default App
