import React from "react";

function HOF(prop) {
    return (
        <>
            <div className="p-8 mt-10 my-10" style={{ backgroundColor: prop.clr }}>
                <prop.cmp />
            </div>
        </>
    );
}

export default HOF;
