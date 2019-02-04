import React, { Component } from "react";
import StripeCheckout from 'react-stripe-checkout';
import { connect } from "react-redux";
import { reduxForm, Field, submit } from "redux-form";
import axios from "axios";
import store from "./../../store";



class Payments extends Component {
    state = {
        cost: 800000,
        days: null
    }

async componentDidMount(){
    const { checkin, checkout } = store.getState().form.booking.values;
    await axios.get("http://localhost:3000/", { 
        params: { checkin, checkout }
    })
    .then(res => {
        // console.log(`data is: ${res.data}`);
        this.setState({ cost: res.data.cost});
        this.setState({ days: res.data.totalDays});
    })
    .catch(err => console.log(err));
}

componentDidUpdate(){
    // console.log(typeof(this.state.cost));
    // const { change } = this.props;
    // change("cost", (this.state.cost * this.state.days));
}

handleStripeSubmit = (token) => {
    const { change, dispatch } = this.props;
    change("token", token);
    change("cost", (this.state.cost * this.state.days));
    dispatch(submit("booking")); 
}

    render() {
        const { cost, days } = this.state;
        // const { calculateDays } = this.props;
        return (
            <div>
            <form onSubmit = {() => console.log("what")}>
               <Field
                    name="token"
                    component="input"
                    type="hidden"
               />
               <Field 
                    name="cost"
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
             amount={cost*days}
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