import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from './Card';

function Movie() {
    
    const [myData, setMyData] = useState([]);

    const API = "https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1";

    useEffect(() => {
      
        axios.get(API)
        .then((result) => {
            console.log(result);
            setMyData(result.data.Search);

        }).catch((err) => {
            console.log(err.message);
            
        });

    }, [])
    

    return (
        <>
            {
                myData.map((responce, i) => {
                    return (
                        <div>
                            <Card responce={responce} index={i} />
                        </div>
                    )
                })
            }
        </>
    )
}

export default Movie
