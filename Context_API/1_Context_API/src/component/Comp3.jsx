import React from 'react'

import { data } from '../App'

function Comp3() {
    return (
        <>
            <data.Consumer>
                {
                    (name) => {
                        return (
                            <div>
                                <h1>Name : {name}</h1>
                                <p>Using Context API</p>
                            </div>      
                        )
                    }
                }
            </data.Consumer>
        </>
    )
}

export default Comp3
