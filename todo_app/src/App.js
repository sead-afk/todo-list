import React, {useEffect, useState} from 'react';
import Todo from './Todo';
import {Button, FormControl, Input, InputLabel} from '@mui/material';
import './App.css';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]) ;
  const [input, setInput] = useState('');
  
  //When app loads we wait for database and fetch new todos as they get added or removed

  useEffect( () => {
// this code fires when app.js loads
db.collection('todos').onSnapshot(snapshot => {
  setTodos(snapshot.docs.map(doc => doc.data().todo))

})


  }, []);
 
   const addTodo = (Event) => {
// this will fire off when we click the button
Event.preventDefault(); // Stops the refresh

db.collection('todos').add({
  todo: input,
  timestamp: firebase.firestore.FieldValue.serverTimestamp()
})

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




