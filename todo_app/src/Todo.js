import { List,ListItem, ListItemText, ListItemAvatar, Avatar, ImageIcon } from '@mui/material'
import React from 'react'

function Todo(props) {
    return (
        <List>
            <ListItem>
                <ListItemAvatar>
                    
                </ListItemAvatar>
                <ListItemText primary="Todo..." secondary={props.text}/>
            </ListItem>
        </List>
    )
}

export default Todo
