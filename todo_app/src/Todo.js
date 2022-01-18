import './Todo.css';
import { List,ListItem, ListItemText, ListItemAvatar, Avatar, ImageIcon, Button, Modal } from '@mui/material';
import  {makeStyles}  from '@mui/styles';
import React, {useState} from 'react';
import db from './firebase';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const useStyles = makeStyles ( (theme) => ({

    paper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    },
  }));

function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input,setInput] = useState();

    const handleOpen = () => {
        setOpen(true);
    };

    const updateTodo = () => {
     // update todo with new input text
     db.collection('todos').doc(props.todo.id).set({
         todo:input
     },{ merge: true});
     
     setOpen(false);


    }
    return (
       <>
       <Modal

      open={open}
      onClose={ e => setOpen(false)}
       
       >
        <div className= {classes.paper}> 

        <h1>I am a modal</h1>
        <input placeholder={props.todo.todo} value={input || ''} onChange={Event => setInput(Event.target.value)}/>
        <Button onClick={ e => setOpen(false)}>Update Todo</Button>

        </div>


       </Modal>
       
       <List className='todo__list'>
            <ListItem>
                <ListItemAvatar>
                    
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary=" Deadline : "/>
            </ListItem>
            <button onClick={ e => setOpen(true)}>Edit</button>
            <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}/>
        </List>
        </>
    )
}

export default Todo
