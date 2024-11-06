import React, { useContext } from 'react'
import { data1, data2 } from '../App';

function Comp3() {

    // step 3 =====> use useContext hook
    const FName = useContext(data1);
    const LName = useContext(data2);


    return (
        <>
            <h2>First Name : {FName}</h2>
            <h2>Last Name : {LName}</h2>
        </>
    )
}

export default Comp3
