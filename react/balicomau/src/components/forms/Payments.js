import React, { Component } from "react";
import StripeCheckout from 'react-stripe-checkout';
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";


class Payments extends Component {
    render() {
        const {cost} = this.props;
        return (
            <StripeCheckout
                amount={cost * 100}
                token={token => console.log(token)}
                stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return{
        cost: state.form.booking.values.cost
    }
}

export default connect(mapStateToProps)(Payments);

// export default Payments;