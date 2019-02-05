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
    gridItem: {
        textAlign: "center"
    },
    formButton: {
        maxWidth: '150px', minWidth: '150px',
    },
    formButtonGroup: {
        paddingTop: '30px'
    },
    formBody: {

    }
});

class BookingForm2 extends Component {

    render() {
    const { classes, handleSubmit, previousPage } = this.props;

        return(
            <form onSubmit={handleSubmit} className={classes.formBody}>
                <div>
                    <Grid container spacing={16} justify="center">
                        <Grid item xs={12} className={classes.gridItem}>
                            <Field 
                                className={classes.textField}
                                name="first_name" 
                                type="text" 
                                component={TextField} 
                                label="First name" 
                            />
                        </Grid>
                        <Grid item xs={12} className={classes.gridItem}>
                            <Field 
                                className={classes.textField}
                                name="last_name" 
                                type="text" 
                                component={TextField} 
                                label="Last name" 
                            />
                        </Grid>
                        <Grid item xs={12} className={classes.gridItem}>
                            <Field 
                                className={classes.textField}
                                name="phone" 
                                type="number" 
                                component={TextField} 
                                label="Contact number" 
                            />
                        </Grid>
                        <Grid item xs={12} className={classes.gridItem}>
                            <Field 
                                className={classes.textField}
                                name="email" 
                                type="text" 
                                component={TextField} 
                                label="Email" 
                            />
                        </Grid>
                        <Grid item xs={12} className={classes.gridItem}>
                            <Field 
                                className={classes.textField}
                                name="comment" 
                                type="text" 
                                component={TextField} 
                                label="Additional comments" 
                                multiline
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

const validate = (formValues) => {
    const errors = {};
    if (!formValues.first_name) {
        errors.first_name = "You must enter a first name"
    }
    if (!formValues.last_name) {
        errors.last_name = "You must enter a last name"
    }
    if (!formValues.phone) {
        errors.phone = "You must enter a phone number"
    }
    if (!formValues.email) {
        errors.email = "You must enter an email address"
    }
    return errors;
};

export default withStyles(styles)(reduxForm({
    form:"booking",
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(BookingForm2));