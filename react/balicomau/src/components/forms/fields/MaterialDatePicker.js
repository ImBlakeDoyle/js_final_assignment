import React, { Component } from "react";
import { InlineDatePicker } from "material-ui-pickers";
import moment from "moment";
import { fetchinvalid } from "./../../../actions";
import { connect } from "react-redux";

class NewDatePicker extends Component {

    //Fetch the array of already booked dates
    componentDidMount() {
        this.props.fetchinvalid();
    }

    //Renders unavailable dates on the calendar according to the booked dates array
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
        console.log(meta.error);

        return(
            <InlineDatePicker
                disablePast={true}
                helperText={(meta.touched && meta.error ? meta.error : null)}
                error={(meta.touched && meta.error ? true : false)}
                invalidLabel="Please select a date"
                {...other}
                {...input}
                shouldDisableDate={this.unavailableDates}
            />
        );
    }
}

//Adds the booked dates state as a prop
const mapStateToProps = (state) => {
    return {
        populateInvalid: state.bookings
    }
}

export default connect(mapStateToProps, { fetchinvalid })(NewDatePicker);