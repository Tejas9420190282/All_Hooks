import { useEffect, useState } from "react";

import "./App.css";

import axios from "axios";

function App() {
  const [myData, setMyData] = useState([]);

  // Note : using Promises

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setMyData(res.data));
  }, []);

  return (
    <>
      <h1>Axios titorials</h1>

      {myData.map((res) => {
        const { id, title, body } = res;

        return (
          
            <div className="p-[2rem] border border-[#888]">
              <h2>ID : {id}</h2>
              <h2>Title : {title}</h2>
              <p>Body : {body}</p>
            </div>
          
        );
      })}
    </>
  );
}

export default App;

/*  
    1) npm install axios 

    2) 

    3) 
*/
/* 
    https://jsonplaceholder.typicode.com/posts 
*/
