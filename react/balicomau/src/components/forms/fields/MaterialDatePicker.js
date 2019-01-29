import React, { Component } from "react";
import { InlineDatePicker, Day } from "material-ui-pickers";

// const unavailableDates = [
//     "2019-01-29"
// ]

class NewDatePicker extends Component {
    // state = {
    //     unavailableDates: [
    //         new Date()
    //     ]
    // }

    unavailableDates = (date) => {
        return date.getDay() === 0;
    }

    render(){
        const { input, meta, ...other } = this.props;

        return(
            <InlineDatePicker
                disablePast={true}
                {...other}
                {...input}
                shouldDisableDate={this.unavailableDates}
            />
        );
    }
}

export default NewDatePicker