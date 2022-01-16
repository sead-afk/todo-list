import React, {useState} from 'react';
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
setInput(); //clearing input after submitting (clicking todo button)
}
  
return (
    <div className="App">
      <h1>Hello Clever Programmers </h1>
      <form>
       <input value={input} onChange={Event => setInput(Event.target.value) }/>
       <button type="submit" onClick={addTodo}>Add Todo</button>
      </form>
      
      <ul>
        {todos.map(todo => (
         <li>{todo}</li> 
        ))}
        </ul>
    </div>
  );
}

export default App;




