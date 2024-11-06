/*    
I have to send data from App.jsx to C3.jsx if App.jsx calls <C1 /> and C1 calls <C2 /> and C2 calls <C3 />.
*/

import { createContext } from "react";
import "./App.css";
import C1 from "./Components/C1";

// step 1 =====> createContext  ===> declair veriable and use createContext() and export it.
export const data1 = createContext();
export const data2 = createContext();
export const data3 = createContext();

function App() {
    const name = "Tejas Shimpi";
    const education = "MCs";
    const Percantage = "77%";

    return (
        <>
          {/* step 2 ====>  Provider */}
          
            <data1.Provider value={name}>
                <data2.Provider value={education}>
                    <data3.Provider value={Percantage}>
                        <C1 />
                    </data3.Provider>
                </data2.Provider>
            </data1.Provider>
        </>
    );
}

export default App;
