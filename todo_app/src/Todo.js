import './Todo.css';
import { List,ListItem, ListItemText, ListItemAvatar, Avatar, ImageIcon } from '@mui/material'
import React from 'react'

function Todo(props) {
    return (
        <List className='todo__list'>
            <ListItem>
                <ListItemAvatar>
                    
                </ListItemAvatar>
                <ListItemText primary={props.text} secondary=" Deadline : "/>
            </ListItem>
        </List>
    )
}

export default Todo
