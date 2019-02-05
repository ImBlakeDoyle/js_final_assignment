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

    componentDidUpdate() {
        const { populateInvalid } = this.props;
        if (populateInvalid.length > 10){
            this.focusedDate();
        }
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

    focusedDate = () => {
        const { populateInvalid } = this.props;
        const newArray = [];
        const newestDate = moment.utc(this.state.date).startOf('d').format();
        for (let i = 0; i < populateInvalid.length; i++){
            const newDate = moment.utc(populateInvalid[i]).startOf('d').format();
            newArray.push(newDate);
        }
        for (let x = 0; x < populateInvalid.length; x++){
            if (newArray.includes(newestDate)){
                moment.utc(newestDate).startOf('d').add(1,'d').format();
            } else {
                this.setState({date: newestDate}); 
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
                value={this.state.date}
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