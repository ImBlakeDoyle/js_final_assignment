import React, { Component } from "react";
import { InlineDatePicker, Day } from "material-ui-pickers";
import moment from "moment";

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
        const newDate = new Date('2019-01-30T00:00:00');
        console.log(`calendar: ${date}`);
        console.log(newDate);

        if ((date.getDay() === newDate.getDay()) && (date.getMonth() === newDate.getMonth()) && (date.getFullYear() === newDate.getFullYear())){
            return newDate;
        }
        // console.log(new Date("2019-01-30"));
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