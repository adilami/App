import React, { useState, useEffect } from 'react';
// import {'../node_modules/@ajusa/lit/dist/lit.css'}
import './App.css';
import ToDoList from './ToDoList';

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
    // const editItem = (e) => {

    // };

    const deleteItems = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arr, index) =>{
                return index!==id;
            })
        })
    };
    const deleteAll = () => {
        setItems([]);
    };
  
    const handleSubmit = e => {
        if(e.key === "Enter"){
            listOfItems();
        }
    };

    //Adding Data to local storage
    useEffect( () => {
        localStorage.setItem('list1', JSON.stringify(items));
    }, [items]);

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
                        return <ToDoList key={index} id={index} text = {itemval}  onSelect ={deleteItems}/>;
                        })}
                    </ul>
                </div>
            </div>
            <div className='rmall'>
                    <button className='remove' onClick={deleteAll}>Remove All</button>
            </div>
        </div>
  </div>
  </>
  );
};

export default App;
