import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { reduxForm, Field } from "redux-form";
import { withStyles } from '@material-ui/core/styles';
import TextField from "./fields/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import NewDatePicker from "./fields/MaterialDatePicker";
import { Typography } from "@material-ui/core";

const styles = theme => ({
    formButton: {
        maxWidth: '150px', minWidth: '150px',
    },
    guests : {
        minWidth: "135px",
        width: "60%",
        textAlign: "left"
    },
    gridItem: {
        textAlign: 'center',
        marginTop: '16px',
    },
    formButtonGroup: {
        paddingTop: '30px'
    },
    formField: {
        minWidth: "135px",
        width: "60%"
    }
});

const numberOfGuests = [
    {
        value: 1,
        label: '1',
    },
    {
        value: 2,
        label: '2',
    },
    {
        value: 3,
        label: '3',
    },
    {
        value: 4,
        label: '4',
    },
    {
        value: 5,
        label: '5',
    },
    {
        value: 6,
        label: '6',
    },
    {
        value: 7,
        label: '7',
    },
    {
        value: 8,
        label: '8',
    },
];

class BookingForm1 extends React.Component {
    state = {
        numberOfGuests: 0
    }
    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };

    render() {
        const { classes, handleSubmit, cancel } = this.props;
        return(

            <form onSubmit={handleSubmit}>
                <div>
                    <Grid container>
                        <Grid item xs={12} className={classes.gridItem}>
                            <Typography variant="h5">Select your dates</Typography>
                            {/* <Typography variant="">* Required</Typography> */}
                        </Grid>
                        {/* <Grid item>
                            
                        </Grid> */}
                        <Grid item xs={12} className={classes.gridItem}>
                            <Field 
                                className={classes.formField}
                                name="checkin"
                                label="Check-in"
                                component={NewDatePicker}
                                variant="outlined"
                                required={true}
                            />
                        </Grid>
                        <Grid item xs={12} className={classes.gridItem}>
                            <Field
                                className={classes.formField}
                                name="checkout"
                                label="Check-out"
                                component={NewDatePicker}
                                variant="outlined"
                                required={true}
                            />
                        </Grid>
                        <Grid item xs={12} className={classes.gridItem}>
                            <Field
                                id="select-guests"
                                select
                                label="Guests"
                                name="guests"
                                component={TextField}
                                className={classes.guests}
                                type="number"
                                variant="outlined"
                                required={true}
                                SelectProps={{
                                    MenuProps: {
                                    className: classes.menu,
                                    },
                                }}
                            >
                                {numberOfGuests.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                            </Field> 
                        </Grid>
                    </Grid>
                <div className={classes.formButtonGroup}>
                    <Grid container spacing={16} justify="space-evenly">
                        <Grid item>
                            <Button variant="contained" color="primary" className={classes.formButton} type="submit">
                                Continue
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="secondary" className={classes.formButton} onClick={cancel}>
                                Cancel
                            </Button>
                        </Grid>
                    </Grid>
                </div>
                </div>
            </form>

        );
    }
}

const validate = (formValues) => {
    const errors = {};
    const newCheckin = moment(formValues.checkin).startOf('day').format();
    const newCheckout = moment(formValues.checkout).startOf('day').format();
    if (!formValues.guests) {
        errors.guests = "You must enter number of guests"
    }
    if (formValues.guests > 8){
        errors.guests = "You can only select up to 8 guests"
    }
    if (formValues.guests < 1){
        errors.guests = "There must be at least 1 guest"
    }
    if (!formValues.checkin) {
        errors.checkin = 'You must enter a check-in date'
    }
    if (!formValues.checkout) {
        errors.checkout = 'You must enter a check-out date'
    }
    if (formValues.checkout < formValues.checkin){
        errors.checkout = "check-out must be after check-in"
    }
    if (newCheckin === newCheckout){
        errors.checkout = "Cannot check-out on the same day"
    }
    return errors;
};

export default withStyles(styles)(reduxForm({
    form: "booking",
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(BookingForm1));