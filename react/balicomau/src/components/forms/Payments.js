import React, { Component } from "react";
import StripeCheckout from 'react-stripe-checkout';
import { reduxForm, Field } from "redux-form";


class Payments extends Component {
    render() {
        console.log(this.props);
        return (
            <StripeCheckout
                amount={500}
                token={token => console.log(token)}
                stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
            />
        );
    }
}

export default Payments;