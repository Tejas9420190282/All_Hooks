import React, {useId} from 'react'

function UseId_Hook(props) {

    let uniqueID = useId()

    return (
        <>
            <label htmlFor={uniqueID}>{props.label} : </label>

            <input id={uniqueID} type={props.type} name={props.name} />
        </> 
    )
}

export default UseId_Hook
