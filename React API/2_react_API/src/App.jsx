import { useState, useEffect } from 'react'

import axios from "axios";

function App() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  
    useEffect( () => {
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setMyData(res.data))
        .catch((error) => setIsError(error.message) 
      )
    }, [])
    

  return (
    <>
        <h1>Axios titorials</h1>

        {isError != "" && <h2>{isError}</h2> }

        {myData.map((res) => {
          const {id, title, body} = res;

          return(
            <div>
              <h2>ID : {id}</h2>
              <p>Title : {title}</p>
            </div>
          )
        })}
    </>
  )
}

export default App
