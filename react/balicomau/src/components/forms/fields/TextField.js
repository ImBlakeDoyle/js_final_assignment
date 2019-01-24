import React from 'react';
import TextField from '@material-ui/core/TextField';


const TextInput = ({input, meta, ...other}) => {
    return (
        <TextField 
            error={meta.touched && meta.error}
            helperText={meta.touched && meta.error}
            fullWidth
            {...input}
            {...other}
        />
    )
}

export default TextInput;