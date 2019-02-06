import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';

//Displays errors for the form fields
class TextInput extends Component {

    render() {
    const {input, meta, variant, ...other} = this.props;

    return (
        <>
        <TextField 
            error={meta.touched && meta.error}
            helperText={meta.touched && meta.error}
            variant={variant}
            {...input}
            {...other}
        />
        </>
    )}
}

export default TextInput;