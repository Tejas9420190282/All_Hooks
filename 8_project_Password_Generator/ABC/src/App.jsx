import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = () => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) {
      str += "0123456789";
    }
    if (character) {
      str += "~!@#$%^&*()_-{}[]";
    }

    let pass = "";
    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }
    return pass;
  };

  useEffect(() => {
    setPassword(passwordGenerator());
  }, [length, number, character]);

  return (
    <>
      <div className="w-[500px] h-[150px] bg-gray-500 rounded-md">
        <p className="pt-5 text-xl font-semibold">Password Generator</p>
        <div className="flex justify-center items-center mt-2">
          <input
            type="text"
            className="bg-white text-orange-600 w-64 h-8 rounded-md outline-none"
            value={password}
            readOnly
          />
          <button
            className="h-8 rounded-md flex justify-center items-center bg-blue-500 font-bold outline-none"
            onClick={() => navigator.clipboard.writeText(password)}
          >
            Copy
          </button>
        </div>

        <div className="flex justify-center mt-5">
          <div>
            <input
              type="range"
              value={length}
              className="outline-none"
              min={8}
              max={100}
              onChange={(e) => setLength(parseInt(e.target.value))}
            />
            <label className="ml-2">Length: {length}</label>
          </div>
          <div className="ml-4 flex">
            <input
              type="checkbox"
              checked={number}
              onChange={() => setNumber((prev) => !prev)}
            />
            <p className="ml-1">Include Numbers</p>
          </div>
          <div className="ml-4 flex">
            <input
              type="checkbox"
              checked={character}
              onChange={() => setCharacter((prev) => !prev)}
            />
            <p className="ml-1">Include Special Characters</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
