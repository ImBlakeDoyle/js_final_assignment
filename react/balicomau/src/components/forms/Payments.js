import React, { Component } from "react";
import StripeCheckout from 'react-stripe-checkout';
import { connect } from "react-redux";
import { reduxForm, Field, submit } from "redux-form";
import axios from "axios";
import store from "./../../store";



class Payments extends Component {
    state = {
        cost: null,
        days: null
    }

async componentDidMount(){
    const { checkin, checkout } = store.getState().form.booking.values;
    await axios.get("http://localhost:3000/")
    .then(res => {
        // console.log(`data is: ${res.data}`);
        this.setState({ cost: res.data });
    })
    .catch(err => console.log(err));
}

handleStripeSubmit = (token) => {
    const { change, dispatch } = this.props;
    change("token", token);
    dispatch(submit("booking")); 
}

    render() {
        const { cost } = this.state;
        const { calculateDays } = this.props;
        return (
            <div>
            <form onSubmit = {() => console.log("what")}>
               <Field
                    name="token"
                    component="input"
                    type="hidden"
               />
            </form>
             <StripeCheckout
             onSubmit={() => console.log("here")}
             name="Complete booking"
             description="Villa Dewata 1"
             // amount={cost * 100}
            //   amount={cost}
             amount={cost}
            // amount={this.calculateDays(this.state.form.booking.values.checkin, this.state)}
             token={this.handleStripeSubmit}
             stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
             // metadata={this.props}
         />
         </div>
        );
    }
}

export default connect()(reduxForm({
    form:"booking",
})(Payments));

// export default Payments;