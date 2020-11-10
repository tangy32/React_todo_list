// import logo from './logo.svg';
import React, { useState , useEffect} from 'react'
import './App.css';

const removeIcon = <svg t="1604898279708" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5424" width="200" height="200"><path d="M804.414 123.434h-156.903c-7.827-67.871-65.572-120.767-135.51-120.767-69.935 0-127.672 52.893-135.499 120.767h-156.911c-63.498 0-115.15 51.667-115.15 115.163v5.909c0 48.523 30.213 90.055 72.775 106.977v544.022c0 63.498 51.659 115.163 115.152 115.163h439.272c63.495 0 115.15-51.67 115.15-115.163v-544.02c42.559-16.924 72.775-58.456 72.775-106.977v-5.909c0-63.498-51.657-115.165-115.15-115.165zM512 57.282c39.777 0 72.978 28.51 80.324 66.151h-160.633c7.344-37.643 40.547-66.151 80.309-66.151zM792.174 895.504c0 33.385-27.163 60.55-60.537 60.55h-439.272c-33.374 0-60.537-27.167-60.537-60.55v-535.836h560.347v535.836zM864.948 244.505c0 33.385-27.163 60.55-60.537 60.55h-584.822c-33.374 0-60.537-27.165-60.537-60.55v-5.909c0-33.385 27.163-60.55 60.537-60.55h584.824c33.374 0 60.537 27.165 60.537 60.55v5.909zM365.594 886.209c15.082 0 27.307-12.23 27.307-27.305v-307.468c0-15.078-12.227-27.309-27.307-27.309s-27.307 12.232-27.307 27.309v307.468c-0.002 15.08 12.225 27.305 27.307 27.305zM512 886.209c15.082 0 27.309-12.23 27.309-27.305v-307.468c0-15.078-12.232-27.309-27.309-27.309-15.08 0-27.307 12.232-27.307 27.309v307.468c0 15.08 12.225 27.305 27.307 27.305zM658.406 886.209c15.08 0 27.305-12.23 27.305-27.305v-307.468c0-15.078-12.227-27.309-27.305-27.309-15.084 0-27.309 12.232-27.309 27.309v307.468c-0.002 15.08 12.23 27.305 27.309 27.305z" fill="#ffffff" p-id="5425"></path></svg>

const completeIcon = <svg t="1604896975594" className ="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2442" width="200" height="200"><path d="M499.7587 800.00032 184.85566 474.771097l80.721463-65.702398 182.094268 145.004535c74.617441-90.096994 240.284575-268.907473 468.845131-411.111219l19.241226 45.057195C725.971791 383.722428 554.202683 659.205667 499.7587 800.00032L499.7587 800.00032 499.7587 800.00032zM894.33329 417.391249c7.199982 29.791513 11.047614 60.889789 11.047614 92.89369 0 217.60197-176.406732 394.009725-394.018935 394.009725-217.604016 0-394.013819-176.411849-394.013819-394.009725 0-217.60811 176.408779-394.017912 394.013819-394.017912 54.121642 0 105.691157 10.921747 152.634306 30.66644L663.996275 92.050486c-47.605228-17.377786-99.013061-26.861788-152.634306-26.861788-245.815545 0-445.092148 199.276602-445.092148 445.096241 0 245.810429 199.276602 445.087031 445.092148 445.087031 245.820662 0 445.095217-199.276602 445.095217-445.087031 0-31.858592-3.354398-62.932308-9.717316-92.89369L894.33329 417.391249 894.33329 417.391249zM894.33329 417.391249" p-id="2443" fill="#ffffff"></path></svg>

const uncomleteIcon = <svg t="1604897155354" className ="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4007" width="200" height="200"><path d="M512 0C229.232 0 0 229.232 0 512s229.232 512 512 512 512-229.232 512-512S794.768 0 512 0z m0 928C282.256 928 96 741.744 96 512 96 282.24 282.256 96 512 96s416 186.24 416 416c0 229.744-186.256 416-416 416z" fill="#ffffff" p-id="4008"></path></svg>
const INIT_TODOS = [

  {
    text : 'Learn about React',
    isComplete: false,
  }, 
  {
    text : 'Meet friend for lunch',
    isComplete: false,
  }, 
  {
    text : 'Build todo app',
    isComplete: false,
  }, 

]

function Todo ({ todo, removeTodo, completeTodo, index }) {
  return (
    <div className="todo" onClick = {(e) => completeTodo(index)}>
      <div 
        className ="task"
        style = {{
          textDecoration: todo.isComplete ? 'line-through' : ''
        }}
      >
        {todo.isComplete ? completeIcon : uncomleteIcon}
        {todo.text} 
      </div>
      <a className="remove" href = "#!" onClick={(e) => removeTodo(e, index)} >
        {removeIcon}
      </a>
    </div>
  ) 
}

function TodoForm({ addTodo}) {
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    //console.log(value);
  }
  return (
    <form onSubmit = {handleSubmit}>
      <input 
        value = {value} 
        className = "input"
        onChange = {(e) => setValue(e.target.value)}
       />
    </form>
  )
}




function App() {
  const [todos,setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || INIT_TODOS);

  useEffect(() => {
    console.log('did mount')
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  const addTodo = text => {

    const newTodos = [{ text }, ...todos];
    setTodos(newTodos);
  }
  const removeTodo = (e, index) => {
    e.preventDefault();
    e.stopPropagation();
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    //console.log(index);
  }

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isComplete = true;
    setTodos(newTodos);
  }
  return (
    <div className = 'app'>
       <div className = "todo-list">
        <TodoForm addTodo = {addTodo} />
       {
         todos.map((todo, index) => (
           <Todo index={index} 
                 removeTodo = {removeTodo} 
                 completeTodo = {completeTodo}
                 key={todo.text} 
                 todo={todo} />
         ))
       }
       </div>
    </div>
  )
}

export default App;
