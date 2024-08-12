import React, { memo } from 'react'

function Memo_Header() {

    console.log("Memo Header render......");

    return (
        <>
            <h1>Memo header component</h1>
        </>
    )
}

export default memo(Memo_Header)
