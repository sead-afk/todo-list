import './Todo.css';
import { List,ListItem, ListItemText, ListItemAvatar, Avatar, ImageIcon, Button } from '@mui/material';
import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import db from './firebase';

function Todo(props) {
    return (
        <List className='todo__list'>
            <ListItem>
                <ListItemAvatar>
                    
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary=" Deadline : "/>
            </ListItem>
            <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}/>
        </List>
    )
}

export default Todo
