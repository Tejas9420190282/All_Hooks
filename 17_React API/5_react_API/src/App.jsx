import { useState,useEffect } from 'react'
import axios from "axios"

const API = "https://jsonplaceholder.typicode.com"

function App() {
  const [myData, setMyData] = useState([]);
  const [error, setError] = useState("")

  const getApiData = async (url) => {
    try {
      const res = await axios.get(url)
      setMyData(res.data)
    } catch (err) {
      setError(err.message)
    }
  }

  useEffect( () => {
    getApiData(`${API}/posts`);
  }, [])

  return (
    <>
        {error != "" && <h1>{error}</h1>}
        {myData.map((res) => {
          const {id, title} = res;

          return (
            <div>
              <h2>ID : {id}</h2>
              <p>Title : {title}</p>
            </div>
          )
        })}
    </>
  )}
export default App
