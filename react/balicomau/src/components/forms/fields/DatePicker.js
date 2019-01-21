import React, { Component } from "react";
import DatePicker from "react-datepicker";

class DatePickerField extends Component{
    
    onFieldChange = (event) => {
        console.log(event);
        this.props.input.onChange(event.toLocaleDateString("en-AU"));
    }

    render (){
    //Pulls off the props from the redux form Field, then we create our own onChange method to add to the props, which is then passed to the form
    const { onChange, ...other} = this.props.input
    return (
        <DatePicker {...other} onChange={this.onFieldChange}/>
    )}
}

export default DatePickerField;