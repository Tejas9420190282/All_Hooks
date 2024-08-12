import React, { useMemo, useState } from 'react'

function With_useMemo_Hook() {

    const [add, setAdd] = useState(0);
    const [minus, setMinus] = useState(100);

    const multiply = useMemo( function multiplication(){

        console.log("=========+ With useMemo hook +=========")
        return add*10
    }, [add])
    
    
    return (
    <>
        <div>
            <h1>With usMemo hook</h1>
            <p>{multiply}</p>
            <button onClick={() => setAdd(add + 1)}>Addition</button>
            <h1>{add}</h1>
            <button onClick={() => setMinus(minus - 1)}>Substraction</button>
            <h1>{minus}</h1>

        </div>    
    </>    
    )
}

export default With_useMemo_Hook


/* 
    Here, When we press the Add button, the multiplication function calls because we have taken there refrence.
    and not calls when we click on minus button because we use useMemo hook.
*/