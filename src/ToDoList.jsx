import React from "react";

const ToDoList = (prop) =>{
    
    return (
        <>
        <div className="btn2">
      
        <button className="button1" onClick={() =>
        prop.onSelect(prop.id)}>x</button>  
        <li>{prop.abc}</li>
    </div>
    </>
    );
    
};

export default ToDoList;