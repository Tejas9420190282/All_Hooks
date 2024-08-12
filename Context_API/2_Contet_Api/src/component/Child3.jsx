import React from 'react'
import { data1, data2 } from '../App'

function Child3() {
    return (
        <>
            <data1.Consumer>
                {
                    (FName) => {
                        return (
                            <data2.Consumer>
                                {
                                    (LName) => {
                                        return(
                                            <>
                                                <h1>First name : {FName}</h1>
                                                <h1>Last Name : {LName}</h1>
                                                <p>Using Context API</p>
                                            </>
                                        )
                                    }
                                }
                            </data2.Consumer>
                        )
                    }
                }
            </data1.Consumer>
        </>
    )
}

export default Child3
