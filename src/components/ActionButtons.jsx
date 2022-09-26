import React from "react";
import "../App.css";

function ActionButtons(prop) {
  return (
    <>
      <div className="buttonCombo">
        <button
          className="button1"
          onClick={() => prop.editItems(prop.elem.id)}
          title="Edit this todo"
        >
          <i className="fa fa-pen-to-square"></i>
        </button>
        <button
          className="button1"
          onClick={() => prop.deleteItems(prop.elem.id)}
          title="Remove this todo"
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </>
  );
}

export default ActionButtons;
