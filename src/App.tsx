import React, { useState } from 'react';

import './App.css';
import InputFeild from './components/InputFeild';

const App: React.FC=()=> {

  const[todo, setTodo]= useState<string >("")
    console.log(todo)
  return (
    <div className="App">
     <span className="heading">Taskify</span>
     <InputFeild todo={todo} setTodo={setTodo}></InputFeild>
    </div>
  );
}

export default App;
