import {useState} from "react";
function ToDoList() {
    //const[deleteItem, setDeletedItem]=useState('');
    const [todo, setTodo]=useState({
        description:'',
        date: ''
    });
    const [todos, setTodos]=useState([]);

    const handleClick=()=>{
        if(todo.description){

            setTodos([...todos, todo]);
            setTodo({ description: '', date: '' });
        } else {
            alert("Type a description first");
        }
  
    }

    const handleDelete = (index) => {
        setTodos((prevTodos) => deleteTodoByIndex(prevTodos, index));
      };
      
      const deleteTodoByIndex = (todos, index) => {
        return todos.filter((todo, i) => i !== index);
      };
return(
   <>
   <input 
   placeholder="Description"
   value ={todo.description}
   onChange={e=> setTodo({...todo, description: e.target.value})} //this will save typed value into description state


   />
   <input
   type="date"
   value={todo.date}
   onChange={e=> setTodo({...todo, date: e.target.value})}/>
   
   <button onClick={handleClick}>Add Todo</button>
   
   
   <table>
    <tbody>
        
{
todos.map((todo, index) => (
  <div key={index}>
    <span>{todo.description}</span>
    <button onClick={() => handleDelete(index)}>Delete</button>
  </div>
))}

    </tbody>
   </table>
   </> 
);
}

export default ToDoList;