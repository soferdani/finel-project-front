import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { MenuItem } from '@material-ui/core'

export default function NewToDo(props) {

    const { open, handleClose } = props

    const types = ['Manager', 'Electricity', 'Plumbing', 'Pool']

    const [input, setInput] = useState({
        task: '',
        type: ''
    })

    async function handleInputChange(event) {
        setInput({ ...input, [event.target.name]: event.target.value})
    }
    
    async function handleSubmitTodo() {
        props.handleSubmitTodo(input)
    }

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add To Do Details</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Write your open task and connect it to a service provider 
                </DialogContentText>
                <TextField
                    id='outlined-multiline-static'
                    variant='outlined'
                    autoFocus
                    multiline
                    rows={3}
                    variant="outlined"
                    name="task"
                    label="Task"
                    type="text"
                    fullWidth
                    onChange={handleInputChange}
                />
                 <TextField
                    id="outlined-select-currency"
                    select
                    label="Select task's type"
                    name='type'
                    value={input.type}
                    onChange={handleInputChange}
                    helperText="Please select the task type to connect it to a service provider"
                    fullWidth
                    SelectProps={{
                        MenuProps: {
                          anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left"
                          },
                          getContentAnchorEl: null
                        }
                    }}
                >
                {types.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </TextField>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSubmitTodo} color="primary">
                    ADD
                </Button>
            </DialogActions>
        </Dialog>
    )
}