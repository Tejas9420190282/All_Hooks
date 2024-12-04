import { useRef, useState } from "react";
import "./App.css";

function App() {
    const [text, setText] = useState("");

    const inputRef = useRef();

    const handleReset = () => {
        setText("");
    };

    const handleCurserOnPointer = () => {
        inputRef.current.focus();
    };

    const handleChangeCLR = () => {
        inputRef.current.style.color = "red";
    };

    const handleSelectText = () => {
        inputRef.current.select();
    };

    const handleCopyText = () => {
        inputRef.current.select();

        if (document.execCommand("copy")) {
            setTimeout(() => {
                alert("Copy to clickboard!");
            }, 1000);
        }
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <h1>Text : {text}</h1>

                <div className="mt-10 bg-white h-10 w-60 flex justify-start items-center">
                    <input
                        type="input"
                        ref={inputRef}
                        value={text}
                        className="outline-none h-9 w-52 ml-2 bg-white text-black"
                        placeholder="Enter text........"
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>

                <div className="flex flex-row gap-5 justify-center mt-10">
                    <button onClick={handleReset}>Reset text</button>
                    <button onClick={handleCurserOnPointer}>
                        Curser on Pointer
                    </button>
                    <button onClick={handleChangeCLR}>Change CLR</button>
                    <button onClick={handleSelectText}>Select Text</button>
                    <button onClick={handleCopyText}>Copy Text</button>
                </div>
            </div>
        </>
    );
}

export default App;
