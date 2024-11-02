
import "./App.css";
import Click_Counter from "./Component/Click_Counter";
import Hover_Counter from "./Component/Hover_Counter";
function App() {

    return (
        <>
            <Click_Counter />

            <h1 className="mt-5 mb-5">============</h1>

            <Hover_Counter />
        </>
    );
}

export default App;
