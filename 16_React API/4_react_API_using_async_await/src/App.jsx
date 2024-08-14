import { useState, useEffect } from 'react'
import axios from "axios";

function App() {
  const [myData, setMyData] = useState([]);
  const [error, setError] = useState("");

  const getApiData = async() => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setMyData(res.data);
    
    } catch (error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    getApiData();
  }, [])
  

  return (
    <>
          { error != "" && <h1>{error}</h1>}
          {myData.map((res) => {
            const {id, body} = res;

            return(
              <div>
                <h2>ID : {id}</h2>
                <p>Title : {body}</p>
              </div>
            )
          })}  
          
    </>
  )
}

export default App
