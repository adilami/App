import React, { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList';

const App = () => {
    const [inputList, setInputList]=useState("");

    const [items, setItems]= useState([]);

    const itemEvent = (event)=>{
        setInputList(event.target.value);
    };
    const listOfItems = () => {
        setItems((oldItems) =>{
            return  [...oldItems, inputList];
        })
        setInputList("");
    };
    const deleteItems = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arr, index) =>{
                return index!==id;
            })
        })
    };

  return (
    <>
    <div className="main">
    <div className='center'>
        <h1>To-Do List</h1>
        <div className='center1'>
        
          <input type='text' placeholder='Add a to-do' value={inputList} onChange={itemEvent}/>
       
              <button onClick={listOfItems}>
                  <div className='plis'>
                   +
                  </div>
              </button>
             
          </div>  
          <div className='list'>
            <ul style={{listStyleType:'none'}}>
                {items.map( (itemval, index) => {
                   return <ToDoList key={index} id={index} abc = {itemval} onSelect ={deleteItems}/>;
                   })}
            </ul>
          </div>
      </div>
  </div>
  </>
  );
};

export default App;
