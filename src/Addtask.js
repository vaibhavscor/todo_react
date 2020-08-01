import React from "react";
import "./todo.css";

export default function Addtask(props) {
  return (
    <div className="divbox">
      <li> {props.text}</li>
      <button
        className="delete"
        onClick={() => {
          props.onSelect(props.id);
        }}
      >
        X
      </button>
    </div>
  );
}
