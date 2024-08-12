import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("Olive");

  return (
    <>
      <div className="h-screen w-full " style={{ backgroundColor: color }}>
        <div className="h-16 w-[500px] bg-white flex justify-center items-center gap-5">
          <div
            className="bg-black p-3 rounded-2xl cursor-pointer"
            onClick={() => setColor("black")}
          >
            Black
          </div>
          <div
            className="bg-yellow-600 p-3 rounded-2xl cursor-pointer"
            onClick={() => setColor("yellow")}
          >
            yellow
          </div>
          <div
            className="bg-red-500 p-3 rounded-2xl cursor-pointer"
            onClick={() => setColor("red")}
          >
            red
          </div>
          <div
            className="bg-blue-500 p-3 rounded-2xl cursor-pointer"
            onClick={() => setColor("blue")}
          >
            Blue
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
