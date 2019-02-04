import React, { Component } from "react";
import StripeCheckout from 'react-stripe-checkout';
import { connect } from "react-redux";
import { reduxForm, Field, submit } from "redux-form";
import axios from "axios";
import store from "./../../store";
import { withRouter } from 'react-router-dom';
import { setFormOpen } from "./../../actions";



class Payments extends Component {
    state = {
        cost: 800000,
        days: null,
        isPaidSuccessful: false
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
             closed={ () => {
                this.setState({ isPaidSuccessful: true });
                console.log("rerender new page here on success");
                console.log(this.state);
                this.props.setFormOpen(false);
                // this.props.history.push('/');
                // axios.get("http://localhost:3001/")

             }}
         />
         </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        formOpen: state.formOpen
    };
}

export default connect(mapStateToProps, {
    setFormOpen
})(reduxForm({
    form:"booking"
})(withRouter(Payments)));

// export default Payments;