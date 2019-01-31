import React, { Component } from "react";
import { InlineDatePicker, Day } from "material-ui-pickers";
import moment from "moment";
import { fetchInvalid } from "./../../../actions";
import { connect } from "react-redux";

class NewDatePicker extends Component {
    componentDidMount() {
        // const { fetchInvalid } = this.props;
        // fetchInvalid();
        this.props.fetchInvalid();
        console.log('here')
    }

    // unavailableDates = (date) => {
    //     const { populateInvalid } = this.props;
    //     console.log(`Invalid dates are: ${populateInvalid}`);
    //     // for (let i = 0; i < populateInvalid.length; i++){
    //     //     const newDate = moment.utc(populateInvalid[i]).format();
    //     //     if ((date.getDay() === newDate.getDay()) && (date.getMonth() === newDate.getMonth()) && (date.getFullYear() === newDate.getFullYear())){
    //     //         return newDate;
    //     //     }
    //     // }
    // }

    unavailableDates = (date) => {
        const { populateInvalid } = this.props;

        for (let i = 0; i < 3; i++){
            const newDate = moment(populateInvalid[i]).format();
            console.log(newDate);
            console.log(date);
        }
        // const newDate = new Date('2019-02-01T00:00:00');
        // // console.log(`calendar: ${date}`);
        // // console.log(newDate);

        // if ((date.getDay() === newDate.getDay()) && (date.getMonth() === newDate.getMonth()) && (date.getFullYear() === newDate.getFullYear())){
        //     return newDate;
        // }
        // console.log(populateInvalid);
        // console.log(new Date("2019-01-30"));
    }

    render(){
        const { input, meta, populateInvalid, ...other } = this.props;
        // console.log(populateInvalid);
        
        // console.log(`Invalid dates are ${populateInvalid}`);

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

const mapStateToProps = (state) => {
    return {
        populateInvalid: state.bookings
    }
}

export default connect(mapStateToProps, { fetchInvalid })(NewDatePicker);