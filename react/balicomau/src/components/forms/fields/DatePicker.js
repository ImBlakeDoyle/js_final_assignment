import React, { Component } from "react";
import DatePicker from "react-datepicker";

class DatePickerField extends Component{
    
    onFieldChange = (event) => {
        console.log(event);
        this.props.input.onChange(event.toLocaleDateString("en-AU"));
    }

    render (){
    const { onChange, ...other} = this.props.input
    return (
        <DatePicker {...other} onChange={this.onFieldChange}/>
    )}
}

export default DatePickerField;