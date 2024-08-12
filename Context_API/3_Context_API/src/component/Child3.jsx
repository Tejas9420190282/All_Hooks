import React from 'react'
import { data1, data2 } from '../App'

function Child3() {
    return (
        <>
            <data2.Consumer>
                {
                    (n2) => {
                        return(
                            <>
                                <data1.Consumer>
                                    {
                                        (n1) => {
                                            return (
                                                <>
                                                    <h1>Name1 : {n1}</h1>
                                                    <h2>Name2 : {n2}</h2>
                                                    <p>Using ContextAPI......</p>
                                                </>
                                            )
                                        }
                                    }
                                </data1.Consumer>
                            </>
                        )
                    }
                }
            </data2.Consumer>
        </>
    )
}

export default Child3
