import React from 'react';
import './App.css';

function App() {
  return (
    <div className="main">
    <div className='center'>
          <h1>To Do List</h1>
          <div className='center1'>
          <form className='input'>
          <input
              type='text'
              placeholder='Add a todo'
          />
          </form>
              <button>
                  <div className='plis'>
                   +
                  </div>
              </button>
          </div>  
      </div>
  </div>
  );
}

export default App;
