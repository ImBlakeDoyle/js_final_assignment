import React, { Component } from "react";
// import { connect } from "react-redux";
// import { createBooking } from "../../actions";
import { reduxForm, Field } from "redux-form";
// import DatePickerField from "./fields/DatePicker";
import Grid from '@material-ui/core/Grid';
import TextField from './fields/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    textField: {
        width: '200px'
    },
    formButton: {
        maxWidth: '150px', minWidth: '150px',
    },
    formButtonGroup: {
        paddingTop: '30px'
    }
});

class BookingForm2 extends Component {

    render(){
    const { classes, handleSubmit, previousPage } = this.props;

        return(
            <form onSubmit={handleSubmit}>
                <div>
                    <Grid container spacing={16}>
                        <Grid item xs={12}>
                            <Field 
                                className={classes.textField}
                                name="first_name" 
                                type="text" 
                                component={TextField} 
                                label="First name" 
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field 
                                className={classes.textField}
                                name="last_name" 
                                type="text" 
                                component={TextField} 
                                label="Last name" 
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field 
                                className={classes.textField}
                                name="phone" 
                                type="text" 
                                component={TextField} 
                                label="Contact number" 
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field 
                                className={classes.textField}
                                name="email" 
                                type="text" 
                                component={TextField} 
                                label="Email" 
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field 
                                className={classes.textField}
                                name="comment" 
                                type="text" 
                                component={TextField} 
                                label="Additional comments" 
                                multiline
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field 
                                className={classes.textField}
                                name="stripe_id" 
                                type="text" 
                                component={TextField} 
                                label="Stripe ID" 
                            />
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.formButtonGroup}>
                    <Grid container spacing={16} justify="space-evenly">
                        <Grid item>
                            <Button variant="contained" color="primary" className={classes.formButton} type="submit">
                                Pay
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="secondary" className={classes.formButton} onClick={previousPage}>
                                Previous
                            </Button>
                        </Grid>
                    </Grid>
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

export default withStyles(styles)(reduxForm({
    form:"booking",
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
})(BookingForm2));