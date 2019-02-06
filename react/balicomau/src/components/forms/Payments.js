import React, { Component } from "react";
import StripeCheckout from 'react-stripe-checkout';
import { connect } from "react-redux";
import { reduxForm, Field, submit } from "redux-form";
import axios from "axios";
import store from "./../../store";
import { withRouter } from 'react-router-dom';
import { setFormOpen } from "./../../actions";
import BookingSummary from "./../sections/BookingSummary";
import moment from "moment";
import { Grid, withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CustomerSummary from "./../sections/CustomerSummary";
import { reset } from "redux-form";

const styles = () => ({
    payButtonGridItem: {
        textAlign: "center",
        // display: "none"
    },
    formButton: {
        maxWidth: '150px', minWidth: '150px',
    },
    formButtonGroup: {
        paddingTop: '30px'
    }
});

class Payments extends Component {
    state = {
        cost: 800000,
        days: null,
        isPaidSuccessful: false,
        checkin: null,
        checkout: null
    }

    async componentDidMount(){
        console.log(store.getState().form.booking.values);
        const { first_name, last_name, email, phone, checkin, checkout, guests } = store.getState().form.booking.values;
        await axios.get(process.env.REACT_APP_API_URI, { 
            params: { checkin, checkout }
        })
        .then(res => {
            this.setState({ cost: res.data.cost});
            this.setState({ days: res.data.totalDays});
            this.setState({checkin: moment(checkin).format("DD MMM YY")});
            this.setState({checkout: moment(checkout).format("DD MMM YY")});
            this.setState({guests});
            this.setState({first_name});
            this.setState({last_name});
            this.setState({email});
            this.setState({phone});
        })
        .catch(err => console.log(err));
    }

    handleStripeSubmit = (token) => {
        const { change, dispatch } = this.props;
        change("token", token);
        change("cost", (this.state.cost * this.state.days));
        dispatch(submit("booking")); 
        dispatch(reset('booking'));
    }

    render() {
        const { first_name, last_name, email, phone, cost, days, guests, checkin, checkout } = this.state;
        const { classes, previousPage } = this.props;
        return (
            <>
                <Grid container spacing={16} justify="center">
                    <Grid item xs={12}>
                        <BookingSummary 
                            guests={guests}
                            checkin={checkin}
                            checkout={checkout}
                            cost={(cost/100)}
                            days={days}
                            amount={((cost*days)/100)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CustomerSummary
                            first_name={first_name}
                            last_name={last_name}
                            email={email}
                            phone={phone}
                        />
                    </Grid>
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
                    <Grid container spacing={16} justify="space-around" className={classes.formButtonGroup}>
                        <Grid item>
                            <StripeCheckout
                                className={classes.formButton}
                                onSubmit={() => console.log("here")}
                                name="Complete booking"
                                description="Villa Dewata 1"
                                amount={cost*days}
                                email={email}
                                token={this.handleStripeSubmit}
                                stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
                                closed={ () => {
                                    this.setState({ isPaidSuccessful: true });
                                    console.log("rerender new page here on success");
                                    console.log(this.state);
                                    this.props.setFormOpen(false);
                                }}
                            />
                        </Grid>
                        <Grid item>
                                <Button variant="contained" color="secondary" className={classes.formButton} onClick={previousPage}>
                                    Previous
                                </Button>
                        </Grid>
                    </Grid>
                </Grid>
         </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        formOpen: state.formOpen
    };
}

export default withStyles(styles)(connect(mapStateToProps, {
    setFormOpen
})(reduxForm({
    form:"booking",
    destroyOnUnmount: false
})(withRouter(Payments))));

// export default Payments;