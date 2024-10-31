import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { toggleTheme } from './Reducer';

function Theme() {

    const theme = useSelector((state) => state.theme);

    const dispatch = useDispatch()

    return (
        <>
            <h1>Current theme {theme == "Dark" ? "Dark" : "Light"}</h1>

            <button onClick={() => dispatch(toggleTheme())}>Change theme into {theme == "Dark" ? "Light" : "Dark"}</button>
        </>
    )
}

export default Theme
