import React, { useState } from 'react';
// import {'../node_modules/@ajusa/lit/dist/lit.css'}
import './App.css';
import ToDoList from './ToDoList';

function App (){
    const [inputList, setInputList]=useState("");

    const [items, setItems]= useState([]);

    // const [edit, setedit]= useState({
    //     id:null,
    //     value:''
    // });

    const itemEvent = (event)=>{
        setInputList(event.target.value);
    };
    const listOfItems = () => {
        if(inputList===""){
            window.alert("The text field is empty. Please type a todo.")
        }
        else{
            console.log(inputList);
        setItems((oldItems) =>{
            return  [...oldItems, inputList];
        })}
        setInputList("");
    
    };


    const deleteItems = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arr, index) =>{
                return index!==id;
            })
        })
    };
  
    const handleSubmit = e => {
        if(e.key === "Enter"){
            listOfItems();
        }
    };
    return (
    <>
    <div className="main">
        <div className='center'>
            <h1>To-Do List</h1>
            <div className='center1'>      
                <input type='text' placeholder='Add a to-do' value={inputList} onChange={itemEvent} onKeyPress={handleSubmit}/>
                <button onClick={listOfItems} >
                    <i class="fa-solid fa-plus"></i>
                </button>
            </div>  
            <div className='list'>
                <div className='list1'>          
                    <ul style={{listStyleType:'none'}}>
                        {items.map( (itemval, index) => {
                        return <ToDoList key={index} id={index} text = {itemval} onSelect ={deleteItems}/>;
                        })}
                    </ul>
                </div>
            </div>
        </div>
  </div>
  </>
  );
};

export default App;
