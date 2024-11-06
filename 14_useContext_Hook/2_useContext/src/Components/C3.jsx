import React from 'react'
import { useContext } from 'react'
import { data1, data2, data3 } from '../App'

function C3() {

    // Step 3 ===> use useContext(ver_name)

    const name = useContext(data1);
    const education = useContext(data2);
    const percantage = useContext(data3);

    return (
        <>
            <h2>Name : {name}</h2>
            <h2>Name : {education}</h2>
            <h2>Name : {percantage}</h2>
        </>
    )
}

export default C3
