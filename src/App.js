import './App.css';
import { useState } from 'react';
import TodoList from './components/TodoList';
import Input from './components/Input';
import TodoDonelist from './components/TodoDonelist';


function App() {
  const [todos,setTodos] = useState([
    {id:1, content: "Send E-mail", isDone: false},
    {id:2, content: "Make work-Books", isDone: false},
    {id:3, content: "Sleeping", isDone: true},
    {id:4, content: "Watching You-Tube", isDone: true}
  ]);

  const [name,setName] = useState("신성현");

  const todoing = todos.filter(todo => !todo.isDone);
  const done = todos.filter(todo => todo.isDone);
  console.log('todoing',todoing);
  console.log('todone',done);

  console.log(done);

  const handleComplete = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  } 
  
  const removeDone = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div  className='wrap'>
      <h1>UMC Study Plan</h1>
      < Input addTodo={addTodo}/>
      <div className='todolist'>
        < TodoList todos={todoing} handleComplete={handleComplete}/>
        < TodoDonelist  done={done} removeDone={removeDone}/>
      </div>
    </div>
  );
}

export default App;
