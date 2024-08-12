import React, { useState } from 'react'

function No_useMemo_hook() {

    const [show, setShow] = useState(false);

    const id = Math.random() * 18;

    return (
        <>
            <p>Unique id : {id}</p>

            <button style={{backgroundColor : "blue"}} onClick={() => setShow((prev) => !prev)}>
                {show ? "Reveal" : "Hide"}
            </button>

            <p>{show ? "Api keys" : "*******"}</p>
        </>
    )
}

export default No_useMemo_hook
