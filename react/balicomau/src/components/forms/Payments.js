import React, { Component } from "react";
import StripeCheckout from 'react-stripe-checkout';
import { connect } from "react-redux";
import { handleToken } from "./../../actions";
import { reduxForm, Field, submit } from "redux-form";


// class StripeField extends Component {
//     render() {
//         const { change } = this.props.input;

//         return (
//             <StripeCheckout
//                     onSubmit={() => console.log("here")}
//                     name="Complete booking"
//                     description="Villa Dewata 1"
//                     // amount={cost * 100}
//                     amount={500}
//                     token={token => change("token", token)}
//                     stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
//                     // metadata={this.props}
//                 />
//         )
//     }
// }


class Payments extends Component {


handleStripeSubmit = (token) => {
    const { change, dispatch } = this.props;
    change("token", token);
    dispatch(submit("booking"));
    
}

    render() {
        const {cost } = this.props;
        console.log(this.props);
        // const { handleToken } = this.props;
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
             amount={500}
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