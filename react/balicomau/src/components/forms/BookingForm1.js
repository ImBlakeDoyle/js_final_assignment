import React from "react";
import "react-datepicker/dist/react-datepicker.css";
// import { connect } from "react-redux";
// import { bookingAvailability } from "../../actions";
import { reduxForm, Field } from "redux-form";
// import DatePickerField from "./fields/DatePicker";
import { withStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
import TextField from "./fields/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

// import DateFnsUtils from "@date-io/date-fns";
// import { MuiPickersUtilsProvider } from 'material-ui-pickers';
// import { DatePicker } from "material-ui-pickers";

import NewDatePicker from "./fields/MaterialDatePicker";

const styles = theme => ({
    menu: {
        width: 200,
      },
    button: {

    },
    guests : {
        width: 165,
    },
    gridItem: {
        textAlign: 'center',
    },
    button: {
        textAlign: 'center',
        paddingTop: 10
    }
    // formBody: {
    //     display: 'inline-block',
    // }
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
        const { classes } = this.props;
        const { handleSubmit } = this.props;
        return(
            <form onSubmit={handleSubmit}>
                <div>
                    <Field 
                        name="checkin"
                        label="Check-in"
                        component={NewDatePicker}
                    />
                    <Field
                        name="checkout"
                        label="Check-out"
                        component={NewDatePicker}
                    />
                    {/* <Grid item x={6}>
                        <Field
                            id="standard-name"
                            label="Check-out"
                            margin="normal"
                            type="date"
                            component={TextField}
                            name="checkout"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid> */}
                    <Grid item xs={6}>
                    <Field
                        id="select-guests"
                        select
                        label="Number of Guests"
                        name="guests"
                        component={TextField}
                        className={classes.guests}
                        type="number"
                        SelectProps={{
                            MenuProps: {
                            className: classes.menu,
                            },
                        }}
                        // helperText="Please select the amount of guests"
                        margin="normal"
                    >
                        {numberOfGuests.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </Field> 
                    </Grid>        
                </div>
                <div>
                    <Button variant="contained" color="primary" className={classes.button} type="submit">
                        Check availability 
                    </Button>
                </div>
            </form>
        );
    }
}



export default withStyles(styles)(reduxForm({
    form: "booking",
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
})(BookingForm1));