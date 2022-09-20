import React, { useState, useEffect } from 'react';
import "./App.css"

// To get data from localStorage
const getLocalItems = () => {
    let list = localStorage.getItem('list1');
    console.log(list);
    if(list){
        return JSON.parse(localStorage.getItem('list1'));
    }
    return[];
};

function App (){
    const [inputList, setInputList]=useState("");
    const [items, setItems]= useState(getLocalItems());
    const [toggleSubmit, settoggleSubmit]=useState(true);
    const [edit, setedit]= useState(null);

    const itemEvent = (event)=>{
        setInputList(event.target.value);
        };
    const listOfItems = () => {
        if(inputList===""){
            window.alert("The text field is empty. Please type a todo.")
        }
        else if(inputList && !toggleSubmit){
            setItems(
                items.map((itemval)=>{
                    if(itemval.id === edit){
                        return{...itemval, name:inputList}
                    }
                    return itemval;
                })
            )
            settoggleSubmit(true);
            setInputList("");
            setedit(null);
        }
        else{
            const allInput = { id: new Date().getTime().toString(), name:inputList };
            setItems([...items, allInput]);
            setInputList("");   
        }
        };

    const deleteItems = (index) => {
        setItems((items) => {
            return items.filter((itemval) =>{
                return index!==itemval.id;
            })
        })
    };

    const deleteAll = () => {
        setItems([]);
        window.alert("Every to-do list is deleted.");
    };

    const editItems = (id) => {
        let newEditItem = items.find((itemval) =>{
            return itemval.id === id
        });
        console.log(newEditItem);
        settoggleSubmit(false);
        setInputList(newEditItem.name);
        setedit(id);
    };
  
    const handleSubmit = (e) => {
        if(e.key === "Enter"){
            listOfItems();
        }
    };

    //Adding Data to local storage
    useEffect( () => {
        localStorage.setItem('list1', JSON.stringify(items));
        }, [items]);

    const [complete, setcomplete] = useState(false);
    const setDone = () =>{
        setcomplete(!complete);
        }
    return (
        <>
            <div className="main">
                <div className='center'>
                    <h1>To-Do List</h1>
                    <div className='center1'>      
                        <input type='text' placeholder='Add a to-do' value={inputList} onChange={itemEvent} onKeyPress={handleSubmit}/>
                        {
                            toggleSubmit ? <button onClick={listOfItems}><i class="fa-solid fa-plus" title='Add an Item'></i></button> : <button /*className="button1"*/ onClick={listOfItems} title="Edit this todo"><i class="fa fa-pen-to-square"></i></button>
                        }
                        
                    </div>  
                    <div className='list'>
                        <div className='list1'>          
                            <ul style={{listStyleType:'none'}}>
                            {items.map( (elem) => {
                                return(
                                    <>
                                        <div className="btn2" key={elem.id}>
                                            <input className="check" type="checkbox" onClick={setDone}/>
                                            <div className="namec">
                                            <li className={complete ? 'doneItem' : ''}>{elem.name}</li>
                                                <div className="buttonCombo">
                                                    <button className="button1" onClick={()=>editItems(elem.id)} title="Edit this todo"><i class="fa fa-pen-to-square"></i></button>
                                                    <button className="button1" onClick={() => deleteItems(elem.id)}  title="Remove this todo">
                                                    <i class="fa-solid fa-trash"></i></button>
                                                </div> 
                                            </div>
                                        </div>
                                    </>
                                )})}
                            </ul>
                        </div>
                    </div>
                    <div className='rmall'>
                        <button className='remove' onClick={deleteAll} title="Remove all todo">Remove All</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App
