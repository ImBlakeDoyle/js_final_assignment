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
        date = moment.utc(date).set('hour', 0).add(1, 'd').format();
        const { populateInvalid } = this.props;
        for (let i = 0; i < populateInvalid.length; i++){
            const newDate = moment.utc(populateInvalid[i]).set('hour', 0).format();
            if (date === newDate){
                return true;
            }
        }
    }

    render(){
        const { input, meta, populateInvalid, ...other } = this.props;

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