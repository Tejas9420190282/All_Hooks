import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState();

  const passwordGenerator = () => {
    
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      if (number) {
        str = str + "0147852369";
      }

      if (character) {
        str = str + "~!@#$%^*()_{}[]";
      }

      for (let i = 1; i <= length; i++) {
        
        let char = Math.floor(Math.random() * str.length + 1)

        pass = pass + str.charAt(char)
      }
    
    setPassword(pass);
  }

  useEffect( () => {
    
    passwordGenerator();
  }, [number, length, character])

  const inputRef = useRef();

  const copyText = () => {
  
     // Select the text in the input field
     inputRef.current.select();
     // Copy the selected text to the clipboard
     document.execCommand('copy');
     // Optionally, alert the user that the text has been copied
     alert('Text copied to clipboard!');
  }


  return (
    <>
      <div className="h-[200px] w-[500px] bg-gray-800 ">
        <p className="text-white font-bold pt-5 text-xl">Password Generator</p>
        <div className="flex justify-center">
          <input
            type="text"
            value={password}
            ref={inputRef}
            readOnly
            className="bg-white mt-4 h-8 w-72 text-orange-500 pl-3 font-semibold outline-none rounded-md"
          />
          <button className="h-8 flex justify-center items-center mt-4 outline-none bg-blue-500 font-semibold " onClick={copyText}>
            Copy
          </button>
        </div>

        <div className="flex justify-center mt-12">
          <div className="flex">
            <input
              type="range"
              className="cursor-pointer"
              value={length}
              max={100}
              min={8}
              onChange={(e) => setLength(e.target.value)}
            />
            <p className="ml-2">Length : {length}</p>
          </div>

          <div className="flex ml-5">
            <input
              type="checkbox"
              onPointerDownCapture={number}
              onChange={() => setNumber((prev) => !prev)}
            />
            <p className="ml-2">Number</p>
          </div>

          <div className="flex ml-5">
            <input
                type="checkbox"
                onPointerDownCapture={character}
                onChange={() => setCharacter((prev) => !prev)}
            />
            <p className="ml-2">Character</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
