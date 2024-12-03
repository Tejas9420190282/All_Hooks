import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(
            "this useEffect run after any change happend in this page, because it has no dependency....."
        );
    });

    /*  
      - useEffect with no dependency calls after any cange happend in the page.....
  */

    return (
        <>
            <div>
                <h1>Count : {count}</h1>

                <div
                    style={{
                        display: "flex",
                        justifyItems: "center",
                        alignItems: "center",
                        gap: "30px",
                    }}
                >
                    <button onClick={() => setCount(count - 1)}>-1</button>
                    <button onClick={() => setCount(count + 1)}>+1</button>
                </div>
            </div>
        </>
    );
}

export default App;
