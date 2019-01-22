import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import { bookingAvailability } from "../../actions";
import { reduxForm, Field } from "redux-form";
import DatePickerField from "./fields/DatePicker";

class BookingForm1 extends Component{

    // onFormSubmit = async (formValues) => {
    //     const { guests, checkin, checkout } = formValues;
    //     const { bookingAvailability } = this.props;

    //     bookingAvailability({guests, checkin, checkout});
    // }

    render(){
    const { handleSubmit } = this.props;

        return(
            <form onSubmit={handleSubmit(this.onFormSubmit)}>
                <div>
                    <label>Check-in:</label>
                    <Field 
                        name="checkin"
                        component={DatePickerField}
                    />
                </div>
                <div>
                    <label>Check-out:</label>
                    <Field 
                        name="checkout"
                        component={DatePickerField}
                    />
                </div>
                <div>
                    <label>Guests:</label>
                        <Field 
                            type="number"
                            name="guests"
                            component="input"
                        />                
                </div>
                <div>
                    <input type="submit" value="submit" />
                </div>
            </form>
        );
    }
}

// const WrappedBookingForm = reduxForm({
//     form: "booking"
// })(AvailabilityForm);

// export default connect(null, {
//     bookingAvailability
// })(WrappedBookingForm);

export default reduxForm({
    form: "booking",
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
})(BookingForm1);