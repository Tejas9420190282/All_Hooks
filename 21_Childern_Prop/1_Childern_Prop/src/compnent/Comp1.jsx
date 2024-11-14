import React from "react";

function Comp1(prop) {
    return (
        <>
            <h1>Hello {prop.name}</h1>
            {prop.children}
        </>
    );
}

export default Comp1;
