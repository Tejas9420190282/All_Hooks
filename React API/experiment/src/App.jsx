import { useEffect, useState } from 'react'

import axios from "./axios"

function App() {
  
  const [myData, setMyData] = useState([]);
  const [error, setError] = useState("");

  const getData = async () => {

    try {
      const res = await axios.get("/posts")
      setMyData(res.data);
    } catch (err) {
      setError(err.message);
    }
  }

  useEffect(() => {
    getData();
  })

  
  return (
    <>
        {error != "" && <h1>{error}</h1>}
    
        {myData.map((res) => {
          const {id, title} = res;

          return (
            <div style={{marginLeft:"25px"}}>
              <h2>ID : {id}</h2>
              <p>Title : {title}</p>
              <hr />
            </div>
          )
        })}
    </>
  )
}

export default App
