import React, { Component } from "react";
import { InlineDatePicker } from "material-ui-pickers";
import moment from "moment";
import { fetchInvalid } from "./../../../actions";
import { connect } from "react-redux";

class NewDatePicker extends Component {
    state = {
        date: new Date()
    }
    componentDidMount() {
        this.props.fetchInvalid();
    }

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