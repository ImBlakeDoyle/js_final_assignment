import React, { Component } from "react";
import { connect } from "react-redux";
import { createBooking } from "../../actions";
import { reduxForm, Field } from "redux-form";
import DatePickerField from "./fields/DatePicker";

class BookingForm2 extends Component {

    // onFormSubmit = async (formValues) => {
    //     const { name, email, guests, checkin, checkout, cost, phone, comment, stripe_id } = formValues;
    //     const { createBooking } = this.props;

    //     createBooking({name, email, guests, checkin, checkout, cost, phone, comment, stripe_id });
    // }

    render(){
    const { handleSubmit, previousPage } = this.props;

        return(
            <form onSubmit={handleSubmit}>
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
                    <button type="button" name="previous" onClick={previousPage}>
                    Previous
                    </button>
                    <input type="submit" value="submit" />
                </div>
            </form>
        );
    }
}

// const WrappedBookingForm = reduxForm({
//     form: "booking"
// })(BookingForm);

// export default connect(null, {
//     createBooking
// })(WrappedBookingForm);

export default reduxForm({
    form:"booking",
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
})(BookingForm2);