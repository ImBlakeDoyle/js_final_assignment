import React, { Component } from "react";
import StripeCheckout from 'react-stripe-checkout';
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";


class Payments extends Component {
    render() {
        const {cost, checkin, checkout} = this.props;
        return (
            <StripeCheckout
                name="Complete booking"
                description="Villa Dewata 1"
                amount={cost * 100}
                token={token => console.log(token)}
                stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return{
        cost: state.form.booking.values.cost,
        checkin: state.form.booking.values.checkin,
        checkout: state.form.booking.values.checkout
    }
}

export default connect(mapStateToProps)(Payments);

// export default Payments;