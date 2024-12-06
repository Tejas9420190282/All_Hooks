import React from 'react'
import { useReducer } from 'react';

function Theme() {

    const initialState = "Dark";

    const reducer = (state, action) => {
        switch (action) {
            case "toggleTheme": return state === "Dark" ? "Light" : "Dark"
        
            default:
                return state;
        }
    }

    const [theme, dispatch] = useReducer(reducer, initialState);    

    return (
        <>
            <h1>Theme : {theme}</h1>

            <button onClick={() => dispatch("toggleTheme")}>Change the them into {theme === "Dark" ? "Light" : "Dark"}</button>
        </>    
    )
}

export default Theme
