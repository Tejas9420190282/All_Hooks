import React, { useMemo, useState } from 'react'

function Memo_hook() {
    
    const [show, setShow] = useState(false);

    const id = useMemo(() => {
       
        return Math.random() * 18;
    }, [])

    return (
        <>
            <p>unique id : {id}</p>

            <button style={{backgroundColor:"blue"}} onClick={() => setShow((prev) => !prev)}>
                {show ? "Reveal" : "Hide"}
            </button>

            <p>{show ? "Api keys" : "**********"}</p>
        </>
    )
}

export default Memo_hook
