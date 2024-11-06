/*    
I have to send data from App.jsx to Comp3.jsx if App.jsx calls <Com1 /> and Comp1 calls <Comp2 /> and Comp2 calls <Comp3 />.
*/



import "./App.css";
import { createContext } from "react";
import Comp1 from "./Components/Comp1";

// step 1 =====> createContext  ===> declair veriable and use createContext() and export it.
export const data1 = createContext();
export const data2 = createContext();

function App() {
    const FName = "Tejas";
    const LName = "Shimpi";

    return (
        <>

        {/* step 2 ====>  Provider */}
            <data1.Provider value={FName}>
                <data2.Provider value={LName}>
                    <Comp1 />
                </data2.Provider>
            </data1.Provider>
        </>
    );
}

export default App;


