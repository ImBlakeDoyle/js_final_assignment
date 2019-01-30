import React, { Component } from "react";
import { InlineDatePicker, Day } from "material-ui-pickers";
import moment from "moment";
import { fetchInvalid } from "./../../../actions";
import { connect } from "react-redux";

// const unavailableDates = [
//     "2019-01-29"
// ]

class NewDatePicker extends Component {
    componentDidMount() {
        const { fetchInvalid } = this.props;
        fetchInvalid();
    }

    unavailableDates = (date) => {
        const { invalidDates } = this.props;
        // console.log(invalidDates);
        // for (let i = 0; i < invalidDates.length; i++){
        //     const newDate = moment.utc(invalidDates[i]).format();
        //     if ((date.getDay() === newDate.getDay()) && (date.getMonth() === newDate.getMonth()) && (date.getFullYear() === newDate.getFullYear())){
        //         return newDate;
        //     }
        // }
    }

    render(){
        const { input, meta, invalidDates, ...other } = this.props;

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
        invalidDates: state.invalidDates
    }
}

export default connect(mapStateToProps, { fetchInvalid })(NewDatePicker);