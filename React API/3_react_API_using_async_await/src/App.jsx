import { useEffect, useState } from 'react'
import axios from "axios";
import './App.css'

function App() {
  const [myData, setMyData] = useState([])
  const [error, setError] = useState("");




/* 

    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setMyData(res.data))
      .catch((error) => setError( error.message))
    }, [])

*/  
  
//    Note =======> using Async Await

    const getApiData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setMyData(res.data);   
    }

    useEffect(() => {
      getApiData();
    }, [])

  return (
    <>
{/* 
        {error != "" && <p>{error}</p>  } 
        {myData.map((res) => {
          const {id, body} = res;

          return (
            <div>
              <h2>ID : {id}</h2>
              <p>BODY : {body}</p>
            </div>
          )
        })} 
*/}

        {myData.map((res) => {
          const {id, body} = res;

          return (
            <div>
              <h2>ID : {id}</h2>
              <p>BODY : {body}</p>
              <hr />
            </div>
          )
        })}

    </>
  )
}

export default App
