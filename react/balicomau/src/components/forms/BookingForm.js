import React, { Component } from "react";
// import { connect } from "react-redux";
// import { createBooking } from "./../../actions";
// import { reduxForm, Field } from "redux-form";

// const Input = ({input, meta, type}) => {
//     return <span>
//                 <input {...input} type={type} autoComplete="off" />
//             </span>  
// }

class BookingForm extends Component {
    state = {
        name: "",
        email: "",
        guests: null,
        checkin: null,
        checkout: null,
        cost: null,
        phone: null,
        comment: "",
        stripe_id: ""
    };

    onFieldChange = (event) => {
        console.log(event.target.name, event.target.value);
        this.setState({ [event.target.name]: event.target.value});
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render(){
    const { name, email, guests, checkin, checkout, cost, phone, comment, stripe_id } = this.state;
        return(
            <form onSubmit={this.onFormSubmit}>
                <div>
                    <label>Name:</label>
                        <input type="text" value={name} name="name" onChange={this.onFieldChange} />
                </div>
                <div>
                    <label>Email:</label>
                        <input type="email" value={email} name="email" onChange={this.onFieldChange} />
                </div>
                <div>
                    <label>Guests:</label>
                        <input type="number" value={guests} name="guests" onChange={this.onFieldChange} />
                </div>
                <div>
                    <label>Check-in:</label>
                        <input type="date" value={checkin} name="checkin" onChange={this.onFieldChange} />
                </div>
                <div>
                    <label>Check-out:</label>
                        <input type="date" value={checkout} name="checkout" onChange={this.onFieldChange} />
                </div>
                <div>
                    <label>Cost:</label>
                        <input type="number" value={cost} name="cost" onChange={this.onFieldChange} />
                </div>
                <div>
                    <label>Phone:</label>
                        <input type="number" value={phone} name="phone" onChange={this.onFieldChange} />
                </div>
                <div>
                    <label>Comment:</label>
                        <input type="text" value={comment} name="comment" onChange={this.onFieldChange} />
                </div>
                <div>
                    <label>Stripe id:</label>
                        <input type="number" value={stripe_id} name="stripe_id" onChange={this.onFieldChange} />
                </div>
                <div>
                    <input type="submit" value="submit" />
                </div>
            </form>
        );
    }
}

export default BookingForm;