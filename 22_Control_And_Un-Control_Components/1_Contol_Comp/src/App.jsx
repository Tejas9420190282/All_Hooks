import { useState } from "react";
import "./App.css";

function App() {
    const [FName, setFName] = useState("");
    const [LName, setLName] = useState("");

    const handleFName = (e) => {
        setFName(e.target.value);
        console.log(FName);
    };

    const handleLName = (e) => {
        setLName(e.target.value);
        console.log(LName);
    };

    return (
        <>
            <form style={{}}>
                <label>
                    Enter first name :
                    <input
                        type="text"
                        value={FName}
                        onChange={handleFName}
                        placeholder="Enter your last name"
                    />
                </label>
                <label>
                    Enter last name :
                    <input
                        type="text"
                        value={LName}
                        onChange={handleLName}
                        placeholder="Enter your last name"
                    />
                </label>
            </form>
        </>
    );
}

export default App;

/*  
          1. Controlled Components
-   In controlled components, React manages the form values.
-   The form value (like text in an <input>) is stored in React’s state and updated through React.
-   Every time you type or change something in the form, React updates its state, and that state is the only place where the form data is stored.
-   Good for cases where you need to control and validate inputs as the user types

*/


/*  
        2. Uncontrolled Components  (using useRef hook)
-   In uncontrolled components, the form elements manage their own values without React’s state.
-   Instead of using React’s state, you grab the values directly from the input fields only when you need them.
-   Use a ref to “point” to the input field, so you can get its value later.
-   Good for simple forms where you don’t need real-time validation or control.

*/
