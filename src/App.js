import React, { useState } from "react";
import Addtask from "./Addtask";
import "./App.css";

function App() {
  // this will hold current and updated data
  const [inputlist, setinputlist] = useState("");

  // this is a array
  const [items, setitems] = useState([]);

  const itemEvent = (event) => {
    setinputlist(event.target.value);
  };

  const listoditems = () => {
    setitems((olditems) => {
      return [...olditems, inputlist];
    });
    // doing this because we want to empty textfield after submission
    setinputlist(" ");
  };

  const deleteitems = (id) => {
    setitems((olditems) => {
      return olditems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <div classNames="main_div">
        <div className="card">
          <br />
          <h1>TODO LIST</h1>
          <br />
          <div className="move">
            <input
              type="text"
              placeholder="Add a item"
              value={inputlist}
              onChange={itemEvent}
            />

            <button className="btn" onClick={listoditems}>
              +
            </button>
          </div>

          <ol>
            {items.map((itemvalue, index) => {
              return (
                <Addtask
                  key={index}
                  id={index}
                  text={itemvalue}
                  onSelect={deleteitems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
