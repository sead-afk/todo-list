import React, {useState} from 'react';
import Todo from './Todo';
import {Button, FormControl, Input, InputLabel} from '@mui/material';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Take dogs for a walk', 'Take the rubbish out']) ;
  const [input, setInput] = useState('');
  console.log('emoji', input);
 
   const addTodo = (Event) => {
// this will fire off when we click the button
Event.preventDefault(); // Stops the refresh
console.log('drugi emoji', 'I am working !!!')
setTodos([...todos, input]);
setInput(''); //clearing input after submitting (clicking todo button)
}
  
return (
    <div className="App">
      <h1>Hello bois </h1>
      <form>
       <FormControl>
        <InputLabel>Write a Todo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>

       <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add Todo
        </Button>
       {/*<button type="submit" onClick={addTodo}>Add Todo</button>*/}
      </form>
      
      <ul>
        {todos.map(todo => (
         <Todo text={todo}/>
        ))}
        </ul>
    </div>
  );
}

export default App;




