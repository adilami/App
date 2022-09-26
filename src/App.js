import React, { useState, useEffect } from "react";
import "./App.css";
import ActionButtons from "./components/ActionButtons";

// To get data from localStorage
const getLocalItems = () => {
  let list = localStorage.getItem("list1");
  console.log(list);
  if (list) {
    return JSON.parse(localStorage.getItem("list1"));
  }
  return [];
};

function App(prop) {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState(getLocalItems());
  const [toggleSubmit, settoggleSubmit] = useState(false);
  const [edit, setedit] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);
 


  const handleItemChange = (event) => {
    setInputList(event.target.value);
  };
  const addItem = () => {
    if (inputList === "") {
      window.alert("The text field is empty. Please type a todo.");
    } else if (inputList && toggleSubmit) {
      setItems(
        items.map((itemval) => {
          if (itemval.id === edit) {
            return { ...itemval, name: inputList };
          }
          return itemval;
        })
      );
      settoggleSubmit(false);
      setInputList("");
      setedit(null);
    } else {
      const allInput = { id: new Date().getTime().toString(), name: inputList };
      setItems([...items, allInput]);
      setInputList("");
    }
  };

  const deleteItem = (index) => {
    setItems((items) => {
      return items.filter((itemval) => {
        return index !== itemval.id;
      });
    });
  };

  const deleteAll = () => {
    setItems([]);
    window.alert("Every to-do list is deleted.");
  };

  const editItems = (id) => {
    let newEditItem = items.find((itemval) => {
      return itemval.id === id;
    });
    settoggleSubmit(true);
    setInputList(newEditItem.name);
    setedit(id);
  };

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      addItem();
    }
  };

  //Adding Data to local storage
  useEffect(() => {
    localStorage.setItem("list1", JSON.stringify(items));
  }, [items]);

//   const [complete, setcomplete] = useState(false);
  const setDone = (id) => {
    // 1
    setSelectedIds((temp)=>{
       if(temp.includes(id)){
            return temp.filter(temp=>{
                return temp!==id
       })

        }
       else{
            return [...temp,id];
        }
    
    
    
        //check if that id is inside selectedIds, remove chaina bhane add id
    })
}




  return (
    <>
      <div className="main">
        <div className="center">
          <h1>To-Do List</h1>
          <div className="center1">
            <input
              type="text"
              placeholder="Add a to-do"
              value={inputList}
              onChange={handleItemChange}
              onKeyPress={handleSubmit}
            />
            {toggleSubmit ? (
              <button
                /*className="button1"*/ onClick={addItem}
                title="Edit this todo"
              >
                <i className="fa fa-pen-to-square"></i>
              </button>
            ) : (
              <button onClick={addItem}>
                <i className="fa-solid fa-plus" title="Add an Item"></i>
              </button>
            )}
          </div>
          <div className="list">
            <div className="list1">
              <ul style={{ listStyleType: "none" }}>
                {items.map((elem,id) => {
                  return (
                    <>
            
                      <div className="btn2">
                        <input
                          className="check"
                          type="checkbox"
                          onClick={()=>setDone(elem.id)}
                          title="Click here if this to-do is completed"
                        />
                        <div className="namec">
                          <li className={selectedIds.includes(elem.id) ? "doneItem" : ""}>
                            {elem.name}
                          </li>
                          
                          <ActionButtons
                            editItems={editItems}
                            deleteItems={deleteItem}
                            elem={elem}
                          />
                        </div>
                      </div>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="rmall">
            <button
              className="remove"
              onClick={deleteAll}
              title="Remove all todo"
            >
              Remove All
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
