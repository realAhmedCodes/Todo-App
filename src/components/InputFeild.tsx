import React from 'react'
import "./style.css"

interface Props{
  todo:string;
  setTodo:React.Dispatch<React.SetStateAction<string>>;
}
const InputFeild = ({todo, setTodo}:Props) => {
  return (
  <form action="
  " className="input">
    <input onChange={(e)=>setTodo(e.target.value)} value={todo} type="input" name="input" id="input" placeholder='Enter A Task'  className="input__box"/>
    <button className='input_submit' type='submit'>Go</button>
  </form>
  )
}

export default InputFeild