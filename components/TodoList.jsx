import { Checkbox, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import { DeleteOutlined } from "@mui/icons-material";
import { IconButton, List, ListItem, Paper } from "@mui/material";

export default function TodoList (props) {

    const {todos, onDelete, onToggle} = props;

    console.log(todos);

    return (
        <Paper>
            <List>
                {todos.list && todos.list.map((todo, idx) => {
                    return (
                        <ListItem key={todo.id} divider={idx !== todos.list.length - 1}>
                            <Checkbox checked={todo.finished} onClick={() => onToggle(todo.id)}/>
                            <ListItemText>{todo.text}</ListItemText>
                            <ListItemText>{todo.dueDate}</ListItemText>
                            <ListItemSecondaryAction>
                                <IconButton aria-label="Delete Todo" onClick={() => onDelete(todo.id)}>
                                    <DeleteOutlined />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>

                    );
                })}
            </List>
        </Paper>
    );
}