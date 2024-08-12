import { useRef, useState } from "react";

import "./App.css";

function App() {
 
  const [name, setName] = useState("Tejas");

  const editText =(e)=> {
    setName(e.target.value);
  }

  const resetText =()=> {

    setName("");
  }

  const refText = useRef();

  const Curser_On_Point =(e)=> {
    
    refText.current.focus();
  }

  const change_color =()=> {

    refText.current.style.color="red";
  }

  const select_Text =()=> {

    refText.current.select();
  }


  return (
    <>
      <div>
        <h1>Text : {name}</h1>
        <input type="text" value={name} ref={refText} onChange={editText}/>

        <br />  <br />

        <button style={{margin: "10px"}} onClick={resetText}>Reset</button>
        <button style={{margin: "10px"}} onClick={Curser_On_Point}>Curser On Point</button>
        <button style={{margin: "10px"}} onClick={change_color}>Change color</button>
        <button style={{margin: "10px"}} onClick={select_Text}>Select the text</button>
      </div> 
    </>
  );
}

export default App;

/*  
    using useRef hook, we can manibulate the dom

*/

/* 
    const [name, setName] = useState("Tejas");

  const newText = (e) => {

    setName(e.target.value);
  }

  const refElement = useRef();

  const resetText = () => {

    setName("");
  }

  const curserOnText =()=> {

    refElement.current.focus();
  }

  const changeColor =()=> {
    
    refElement.current.style.color="red";
  }

  const selectText =()=> {

    refElement.current.select();
  }


  <div>
        <h1>Text : {name}</h1>
        <input type="text" value={name} onChange={newText} ref={refElement} />
        <br /> <br />
        <button style={{ margin: "30px" }} onClick={resetText}>
          Reset
        </button>
        <button style={{ margin: "30px" }} onClick={curserOnText}>
          Curser On Text
        </button>
        <button onClick={changeColor}>Change Color</button>
        <button style={{ margin: "30px" }} onClick={selectText}>
          Select the Text
        </button>
      </div>


*/
