import React, { createContext } from 'react'

export const AppContext = createContext();

const ContextProvider = (prop) => {


    const phone = "+91 9420190282";

    const name = "Tejas";

    return (
        <AppContext.Provider value={{phone, name}}>
            {prop.children}
        </AppContext.Provider>
    )
}

export default ContextProvider