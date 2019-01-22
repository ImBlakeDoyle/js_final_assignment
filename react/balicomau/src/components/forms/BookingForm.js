import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import { createBooking } from "./../../actions";
import { reduxForm, Field } from "redux-form";
import DatePickerField from "./fields/DatePicker";

class BookingForm extends Component {

    // onStartDateChange = (date) => {
    //     this.setState({ checkin: date});
    // }

    // onEndDateChange = (date) => {
    //     this.setState({ checkout: date});
    // }

    onFormSubmit = async (formValues) => {
        const { name, email, guests, checkin, checkout, cost, phone, comment, stripe_id } = formValues;
        const { createBooking } = this.props;

        createBooking({name, email, guests, checkin, checkout, cost, phone, comment, stripe_id });
    }

    render(){
    // const { name, email, guests, checkin, checkout, cost, phone, comment, stripe_id } = this.state;
    const { handleSubmit } = this.props;

        return(
            <form onSubmit={handleSubmit(this.onFormSubmit)}>
                <div>
                    <label>Name:</label>
                        <Field 
                            type="text"
                            name="name"
                            component="input"
                        />
                </div>
                <div>
                    <label>Email:</label>
                        <Field 
                            type="email"
                            name="email"
                            component="input"
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
                    <label>Cost:</label>
                        <Field 
                            type="number"
                            name="cost"
                            component="input"
                        />
                </div>
                <div>
                    <label>Phone:</label>
                        <Field 
                            type="number"
                            name="phone"
                            component="input"
                        />
                </div>
                <div>
                    <label>Comment:</label>
                        <Field 
                            type="text"
                            name="comment"
                            component="input"
                        />
                </div>
                <div>
                    <label>Stripe id:</label>
                        <Field 
                            type="number"
                            name="stripe_id"
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

const WrappedBookingForm = reduxForm({
    form: "booking"
})(BookingForm);

export default connect(null, {
    createBooking
})(WrappedBookingForm);