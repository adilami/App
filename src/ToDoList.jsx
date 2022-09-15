// import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import { useState } from "react";

const ToDoList = (prop) =>{
const [complete, setcomplete] = useState(false);
const setDone = () =>{
    setcomplete(!complete);
};
    return (
        // <div className="c">
        //     <div className="7 column">
        //         <div className="card">
        //         <li className={complete ? 'doneItem' : ''}>{prop.abc}</li>
        //         <button className="button1" onClick={() =>
        //             prop.onSelect(prop.id)}
        //         >x</button>
        //         </div>
        //     </div>
        // </div>
        <>
            <div className="btn2">
                <input className="check" type="checkbox" onClick={setDone}/>
                <div className="namec">
                    <li className={complete ? 'doneItem' : ''}>{prop.text}</li>
                    <div className="buttonCombo">
                        <button className="button1" onClick={() => 
                        {prop.onSelect(prop.edit)}}><i class="fa fa-pen-to-square"></i></button>
                        <button className="button1" onClick={() =>
                        prop.onSelect(prop.id)}>
                        <i class="fa-solid fa-trash"></i></button>
                    </div> 
                </div>
            </div>
        </>
    ); 
};

export default ToDoList;